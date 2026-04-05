import type { Handler } from "@netlify/functions";
import { readEnv } from "./_env";

const COOKIE_STATE = "patreon_oauth_state";
const COOKIE_SESSION = "patreon_session";
const COOKIE_DEBUG = "patreon_oauth_debug";

type PatreonApiResource = {
  id: string;
  type: string;
  attributes?: Record<string, unknown>;
  relationships?: Record<string, { data?: Array<{ id: string; type: string }> | { id: string; type: string } }>;
};

type PatreonSession = {
  user: {
    fullName: string;
    email: string | null;
    imageUrl: string | null;
    vanity: string | null;
  };
  memberships: Array<{
    id: string;
    campaignName: string;
    campaignUrl: string | null;
    patronStatus: string | null;
    lastChargeStatus: string | null;
    entitledAmountCents: number | null;
    tiers: string[];
  }>;
  createdAt: string;
};

const getBaseUrl = (host: string, forwardedProto?: string): string => {
  const isLocalHost = /^localhost(?::\d+)?$/i.test(host) || /^127\.0\.0\.1(?::\d+)?$/.test(host);
  const protocol = forwardedProto ? (forwardedProto === "http" ? "http" : "https") : (isLocalHost ? "http" : "https");
  return `${protocol}://${host}`;
};

const shouldUseSecureCookie = (host: string, forwardedProto?: string): boolean => {
  if (forwardedProto) {
    return forwardedProto !== "http";
  }

  return !/^localhost(?::\d+)?$/i.test(host) && !/^127\.0\.0\.1(?::\d+)?$/.test(host);
};

const parseCookies = (cookieHeader: string | undefined): Record<string, string> => {
  if (!cookieHeader) {
    return {};
  }

  return cookieHeader.split(";").reduce<Record<string, string>>((acc, rawPair) => {
    const [rawKey, ...rawValue] = rawPair.trim().split("=");
    if (!rawKey || rawValue.length === 0) {
      return acc;
    }

    acc[rawKey] = decodeURIComponent(rawValue.join("="));
    return acc;
  }, {});
};

const buildCookie = (name: string, value: string, maxAgeSeconds: number, secure: boolean, httpOnly: boolean): string => {
  const securePart = secure ? "; Secure" : "";
  const httpOnlyPart = httpOnly ? "; HttpOnly" : "";
  return `${name}=${value}; Path=/; Max-Age=${maxAgeSeconds}; SameSite=Lax${httpOnlyPart}${securePart}`;
};

const clearCookie = (name: string, secure: boolean): string => buildCookie(name, "", 0, secure, false);

const toStringOrNull = (value: unknown): string | null => (typeof value === "string" ? value : null);
const toNumberOrNull = (value: unknown): number | null => (typeof value === "number" ? value : null);

const getRelationshipIds = (resource: PatreonApiResource, relationName: string): string[] => {
  const relation = resource.relationships?.[relationName];
  if (!relation?.data) {
    return [];
  }

  if (Array.isArray(relation.data)) {
    return relation.data.map((entry) => entry.id);
  }

  return [relation.data.id];
};

const redirectWithStatus = (baseUrl: string, status: "success" | "error", secure: boolean, sessionCookie?: string) => {
  const cookies = [clearCookie(COOKIE_STATE, secure)];
  if (sessionCookie) {
    cookies.push(sessionCookie);
  }

  return {
    statusCode: 302,
    headers: {
      Location: `${baseUrl}/?patreon=${status}`
    },
    multiValueHeaders: {
      "Set-Cookie": cookies
    }
  };
};

const debugHtml = (payload: unknown): string => {
  const json = JSON.stringify(payload, null, 2);
  return `<!doctype html>
<html lang="fr">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Patreon OAuth Debug</title>
    <style>
      body { font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace; background:#0f1420; color:#e6e6e6; margin:0; padding:20px; }
      h1 { font-size:20px; margin:0 0 12px; }
      p { margin:0 0 14px; color:#b9c4d0; }
      pre { background:#0a0e18; border:1px solid #2a3348; border-radius:8px; padding:14px; overflow:auto; }
      a { color:#8ab4ff; }
    </style>
  </head>
  <body>
    <h1>Patreon OAuth Debug</h1>
    <p>Mode debug actif. La redirection vers l'accueil est suspendue.</p>
    <pre>${json}</pre>
    <p><a href="/">Retour accueil</a></p>
  </body>
</html>`;
};

const debugResponse = (payload: unknown, secure: boolean, sessionCookie?: string) => {
  const cookies = [clearCookie(COOKIE_STATE, secure)];
  if (sessionCookie) {
    cookies.push(sessionCookie);
  }

  return {
    statusCode: 200,
    headers: {
      "Content-Type": "text/html; charset=utf-8"
    },
    multiValueHeaders: {
      "Set-Cookie": cookies
    },
    body: debugHtml(payload)
  };
};

export const handler: Handler = async (event) => {
  const clientId = readEnv("PATREON_CLIENT_ID", "VITE_PATREON_CLIENT_ID");
  const clientSecret = readEnv("PATREON_CLIENT_SECRET", "VITE_PATREON_CLIENT_SECRET");
  const configuredRedirectUri = readEnv("PATREON_REDIRECT_URI");
  const host = event.headers.host;
  const forwardedProto = event.headers["x-forwarded-proto"];
  const secure = host ? shouldUseSecureCookie(host, forwardedProto) : forwardedProto !== "http";

  if (!host || !clientId || !clientSecret) {
    console.error("[patreon-callback] Missing configuration", {
      hasHost: Boolean(host),
      hasClientId: Boolean(clientId),
      hasClientSecret: Boolean(clientSecret)
    });
    return {
      statusCode: 500,
      body: "Configuration Patreon incomplete: define PATREON_CLIENT_ID (or VITE_PATREON_CLIENT_ID), PATREON_CLIENT_SECRET (or VITE_PATREON_CLIENT_SECRET), and ensure host is available."
    };
  }

  const baseUrl = getBaseUrl(host, forwardedProto);
  const redirectUri = configuredRedirectUri ?? `${baseUrl}/.netlify/functions/patreon-callback`;
  const params = new URLSearchParams(event.rawQuery ?? "");
  const code = params.get("code");
  const state = params.get("state");
  const cookies = parseCookies(event.headers.cookie);
  const storedState = cookies[COOKIE_STATE];
  const debugMode = cookies[COOKIE_DEBUG] === "1" || readEnv("PATREON_OAUTH_DEBUG") === "1";

  console.log("[patreon-callback] Incoming callback", {
    host,
    forwardedProto,
    hasCode: Boolean(code),
    hasState: Boolean(state),
    hasStoredState: Boolean(storedState),
    debugMode
  });

  if (!code || !state || !storedState || state !== storedState) {
    console.warn("[patreon-callback] State validation failed", {
      hasCode: Boolean(code),
      hasState: Boolean(state),
      hasStoredState: Boolean(storedState),
      stateMatches: state === storedState
    });
    if (debugMode) {
      return debugResponse(
        {
          step: "state_validation",
          ok: false,
          details: {
            hasCode: Boolean(code),
            hasState: Boolean(state),
            hasStoredState: Boolean(storedState),
            stateMatches: state === storedState
          }
        },
        secure
      );
    }
    return redirectWithStatus(baseUrl, "error", secure);
  }

  const tokenPayload = new URLSearchParams({
    code,
    grant_type: "authorization_code",
    client_id: clientId,
    client_secret: clientSecret,
    redirect_uri: redirectUri
  });

  const tokenResponse = await fetch("https://www.patreon.com/api/oauth2/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: tokenPayload
  });

  console.log("[patreon-callback] Token exchange response", {
    ok: tokenResponse.ok,
    status: tokenResponse.status
  });

  if (!tokenResponse.ok) {
    if (debugMode) {
      const tokenErrorBody = await tokenResponse.text();
      return debugResponse(
        {
          step: "token_exchange",
          ok: false,
          details: {
            status: tokenResponse.status,
            statusText: tokenResponse.statusText,
            body: tokenErrorBody
          }
        },
        secure
      );
    }
    return redirectWithStatus(baseUrl, "error", secure);
  }

  const tokenJson = (await tokenResponse.json()) as { access_token?: string };
  const accessToken = tokenJson.access_token;
  if (!accessToken) {
    console.warn("[patreon-callback] Token missing in response", {
      keys: Object.keys(tokenJson)
    });
    if (debugMode) {
      return debugResponse(
        {
          step: "token_parsing",
          ok: false,
          details: {
            hasAccessToken: false,
            tokenKeys: Object.keys(tokenJson)
          }
        },
        secure
      );
    }
    return redirectWithStatus(baseUrl, "error", secure);
  }

  const identityUrl = new URL("https://www.patreon.com/api/oauth2/v2/identity");
  identityUrl.searchParams.set("include", "memberships.campaign,memberships.currently_entitled_tiers");
  identityUrl.searchParams.set("fields[user]", "full_name,email,image_url,vanity");
  identityUrl.searchParams.set(
    "fields[member]",
    "patron_status,last_charge_status,currently_entitled_amount_cents"
  );
  identityUrl.searchParams.set("fields[campaign]", "creation_name,url");
  identityUrl.searchParams.set("fields[tier]", "title,amount_cents");

  const identityResponse = await fetch(identityUrl, {
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  });

  console.log("[patreon-callback] Identity response", {
    ok: identityResponse.ok,
    status: identityResponse.status
  });

  if (!identityResponse.ok) {
    if (debugMode) {
      const identityErrorBody = await identityResponse.text();
      return debugResponse(
        {
          step: "identity_fetch",
          ok: false,
          details: {
            status: identityResponse.status,
            statusText: identityResponse.statusText,
            body: identityErrorBody
          }
        },
        secure
      );
    }
    return redirectWithStatus(baseUrl, "error", secure);
  }

  const identityJson = (await identityResponse.json()) as {
    data?: PatreonApiResource;
    included?: PatreonApiResource[];
  };

  const user = identityJson.data;
  if (!user) {
    console.warn("[patreon-callback] Identity payload missing user data", {
      includedCount: (identityJson.included ?? []).length
    });
    if (debugMode) {
      return debugResponse(
        {
          step: "identity_parsing",
          ok: false,
          details: {
            hasData: false,
            includedCount: (identityJson.included ?? []).length
          }
        },
        secure
      );
    }
    return redirectWithStatus(baseUrl, "error", secure);
  }

  const included = identityJson.included ?? [];
  const includedMap = new Map<string, PatreonApiResource>();
  included.forEach((resource) => {
    includedMap.set(`${resource.type}:${resource.id}`, resource);
  });

  const membershipIds = getRelationshipIds(user, "memberships");
  const memberships = membershipIds
    .map((id) => includedMap.get(`member:${id}`))
    .filter((resource): resource is PatreonApiResource => Boolean(resource))
    .map((member) => {
      const campaignId = getRelationshipIds(member, "campaign")[0];
      const campaign = campaignId ? includedMap.get(`campaign:${campaignId}`) : undefined;
      const tierIds = getRelationshipIds(member, "currently_entitled_tiers");
      const tierTitles = tierIds
        .map((tierId) => includedMap.get(`tier:${tierId}`))
        .map((tier) => toStringOrNull(tier?.attributes?.title))
        .filter((value): value is string => Boolean(value));

      return {
        id: member.id,
        campaignName: toStringOrNull(campaign?.attributes?.creation_name) ?? "Campagne Patreon",
        campaignUrl: toStringOrNull(campaign?.attributes?.url),
        patronStatus: toStringOrNull(member.attributes?.patron_status),
        lastChargeStatus: toStringOrNull(member.attributes?.last_charge_status),
        entitledAmountCents: toNumberOrNull(member.attributes?.currently_entitled_amount_cents),
        tiers: tierTitles
      };
    })
    .filter((membership) => membership.patronStatus === "active_patron");

  const session: PatreonSession = {
    user: {
      fullName: toStringOrNull(user.attributes?.full_name) ?? "Utilisateur Patreon",
      email: toStringOrNull(user.attributes?.email),
      imageUrl: toStringOrNull(user.attributes?.image_url),
      vanity: toStringOrNull(user.attributes?.vanity)
    },
    memberships,
    createdAt: new Date().toISOString()
  };

  const encodedSession = encodeURIComponent(Buffer.from(JSON.stringify(session)).toString("base64"));
  const sessionCookie = buildCookie(COOKIE_SESSION, encodedSession, 60 * 60 * 24 * 7, secure, false);

  console.log("[patreon-callback] OAuth completed", {
    fullName: session.user.fullName,
    membershipsCount: session.memberships.length,
    debugMode
  });

  if (debugMode) {
    return debugResponse(
      {
        step: "completed",
        ok: true,
        details: {
          user: {
            fullName: session.user.fullName,
            email: session.user.email,
            vanity: session.user.vanity
          },
          membershipsCount: session.memberships.length,
          memberships: session.memberships
        }
      },
      secure,
      sessionCookie
    );
  }

  return redirectWithStatus(baseUrl, "success", secure, sessionCookie);
};
