import { getOnePageRulesTierLine, type PatreonSession } from "../patreon/session-utils";
import {
  LIBRARY_VERSION_OPTIONS,
  getSelectedLibraryVersion,
  setSelectedLibraryVersion
} from "./version-selection";
import "./login-menu.css";

export const initLoginMenu = (): void => {
  const openLoginModal = document.getElementById("openLoginModal");
  const loginModal = document.getElementById("loginPopup");
  const menuZone = document.querySelector(".top-nav");
  const loginModalTitle = document.getElementById("loginModalTitle");
  const loginModalDescription = document.getElementById("loginModalDescription");
  const patreonLoginButton = document.getElementById("patreonLoginButton");
  const patreonLoginHelper = document.getElementById("patreonLoginHelper");
  const patreonAccount = document.getElementById("patreonAccount");
  const patreonUser = document.getElementById("patreonUser");
  const patreonTierLine = document.getElementById("patreonTierLine");
  const logoutButton = document.getElementById("logoutButton");
  const depotAllowedEmails = String(import.meta.env.VITE_DEPOT_ALLOWED_EMAILS ?? "")
    .split(";")
    .map((email) => email.trim().toLowerCase())
    .filter(Boolean);
  const depotButton =
    menuZone instanceof HTMLElement
      ? Object.assign(document.createElement("a"), {
          className: "menu-button menu-depot",
          href: "./depot.html",
          textContent: "depot",
          hidden: true
        })
      : null;
  const versionSelect =
    menuZone instanceof HTMLElement
      ? Object.assign(document.createElement("select"), {
          className: "menu-version-select",
          ariaLabel: "Version des regles"
        })
      : null;
  let closeModalTimer: number | null = null;

  if (menuZone instanceof HTMLElement && depotButton instanceof HTMLAnchorElement) {
    menuZone.append(depotButton);
  }

  if (menuZone instanceof HTMLElement && versionSelect instanceof HTMLSelectElement) {
    LIBRARY_VERSION_OPTIONS.forEach((option) => {
      versionSelect.append(new Option(option.label, option.value, false, false));
    });

    versionSelect.value = getSelectedLibraryVersion();
    versionSelect.addEventListener("change", () => {
      const selectedVersion = setSelectedLibraryVersion(versionSelect.value);
      versionSelect.value = selectedVersion;
      window.location.reload();
    });

    if (openLoginModal instanceof HTMLButtonElement) {
      menuZone.insertBefore(versionSelect, openLoginModal);
    } else {
      menuZone.append(versionSelect);
    }
  }

  const readCookie = (name: string): string | null => {
    const cookies = document.cookie.split(";").map((item) => item.trim());
    const cookie = cookies.find((item) => item.startsWith(`${name}=`));
    if (!cookie) {
      return null;
    }

    return decodeURIComponent(cookie.substring(name.length + 1));
  };

  const parsePatreonSession = (): PatreonSession | null => {
    const rawSession = readCookie("patreon_session");
    if (!rawSession) {
      return null;
    }

    try {
      const json = atob(rawSession);
      return JSON.parse(json) as PatreonSession;
    } catch {
      return null;
    }
  };

  const clearCookie = (name: string): void => {
    document.cookie = `${name}=; Max-Age=0; Path=/; SameSite=Lax`;
    document.cookie = `${name}=; Max-Age=0; Path=/; SameSite=Lax; Secure`;
  };

  const openModal = () => {
    if (!(loginModal instanceof HTMLElement)) {
      return;
    }

    loginModal.hidden = false;
    document.body.classList.add("modal-open");
  };

  const closeModal = () => {
    if (!(loginModal instanceof HTMLElement)) {
      return;
    }

    loginModal.hidden = true;
    document.body.classList.remove("modal-open");
  };

  const cancelCloseModal = () => {
    if (closeModalTimer !== null) {
      window.clearTimeout(closeModalTimer);
      closeModalTimer = null;
    }
  };

  const scheduleCloseModal = () => {
    cancelCloseModal();
    closeModalTimer = window.setTimeout(() => {
      closeModal();
      closeModalTimer = null;
    }, 180);
  };

  const isInLoginZone = (node: Node | null): boolean => {
    if (!(loginModal instanceof HTMLElement) || !(menuZone instanceof HTMLElement) || !node) {
      return false;
    }

    return loginModal.contains(node) || menuZone.contains(node);
  };

  const handleZoneMouseLeave = (event: MouseEvent) => {
    if (!(loginModal instanceof HTMLElement) || loginModal.hidden) {
      return;
    }

    const nextTarget = event.relatedTarget;
    if (nextTarget instanceof Node && isInLoginZone(nextTarget)) {
      return;
    }

    scheduleCloseModal();
  };

  const syncDepotButton = (session: PatreonSession | null) => {
    if (!(depotButton instanceof HTMLAnchorElement)) {
      return;
    }

    const email = session?.user.email?.trim().toLowerCase();
    depotButton.hidden = !email || !depotAllowedEmails.includes(email);
  };

  if (openLoginModal instanceof HTMLButtonElement) {
    openLoginModal.addEventListener("click", () => {
      cancelCloseModal();
      openModal();
    });
  }

  if (loginModal instanceof HTMLElement) {
    loginModal.addEventListener("mouseenter", cancelCloseModal);
    loginModal.addEventListener("click", (event: MouseEvent) => {
      if (event.target === loginModal) {
        closeModal();
      }
    });

    loginModal.addEventListener("mouseleave", handleZoneMouseLeave);

    document.addEventListener("keydown", (event: KeyboardEvent) => {
      if (event.key === "Escape" && !loginModal.hidden) {
        closeModal();
      }
    });
  }

  if (menuZone instanceof HTMLElement) {
    menuZone.addEventListener("mouseenter", cancelCloseModal);
    menuZone.addEventListener("mouseleave", handleZoneMouseLeave);
  }

  if (
    openLoginModal instanceof HTMLButtonElement &&
    loginModalTitle instanceof HTMLElement &&
    loginModalDescription instanceof HTMLElement &&
    patreonLoginButton instanceof HTMLAnchorElement &&
    patreonLoginHelper instanceof HTMLElement &&
    patreonAccount instanceof HTMLElement &&
    patreonUser instanceof HTMLElement &&
    patreonTierLine instanceof HTMLElement &&
    logoutButton instanceof HTMLButtonElement
  ) {
    const session = parsePatreonSession();
    const params = new URLSearchParams(window.location.search);
    const patreonStatus = params.get("patreon");

    if (patreonStatus === "success") {
      openModal();
    }

    if (patreonStatus === "error") {
      openModal();
      patreonLoginHelper.textContent = "Echec de connexion Patreon. Verifiez la configuration OAuth.";
    }

    if (session) {
      openLoginModal.textContent = session.user.fullName;
      openLoginModal.title = `Connecte: ${session.user.fullName}`;
      openLoginModal.classList.add("menu-login-authenticated");
      syncDepotButton(session);

      loginModalTitle.textContent = "Connecte avec Patreon";
      loginModalDescription.textContent = "Votre compte est authentifie.";
      patreonUser.textContent = `${session.user.fullName}${session.user.email ? ` (${session.user.email})` : ""}`;
      patreonTierLine.textContent = getOnePageRulesTierLine(session.memberships);

      patreonAccount.hidden = false;
      logoutButton.hidden = false;
      patreonLoginButton.textContent = "Reconnecter Patreon";
      patreonLoginHelper.textContent = "Vos abonnements actifs sont charges.";
    } else {
      patreonAccount.hidden = true;
      logoutButton.hidden = true;
      openLoginModal.textContent = "Se connecter";
      openLoginModal.title = "Se connecter";
      openLoginModal.classList.remove("menu-login-authenticated");
      syncDepotButton(null);
    }

    logoutButton.addEventListener("click", () => {
      clearCookie("patreon_session");
      clearCookie("patreon_oauth_state");
      clearCookie("patreon_oauth_debug");
      window.location.href = "/";
    });
  }
};
