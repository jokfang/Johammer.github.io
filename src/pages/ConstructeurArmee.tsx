import { useEffect } from "react";

function ConstructeurArmee() {
  const armyForgeBasePath = "/ArmyForgeFR";

  useEffect(() => {
    void import("../../ArmyForgeFR/src/main");
  }, []);

  return (
    <>
      <header className="top-header">
        <nav className="top-nav">
          <a className="menu-button menu-home" href="./">
            Accueil
          </a>
          <button className="menu-button menu-login" id="openLoginModal" type="button">
            Se connecter
          </button>
        </nav>
      </header>

      <main>
        <section className="split-home">
          <article className="game-panel panel-aof">
            <div className="panel-content">
              <p className="panel-eyebrow">Univers Fantasy</p>
              <h1>Age of Fantasy</h1>
              <p>Composez vos armees de fantasy et preparez vos listes en francais.</p>
              <div className="panel-button-row">
                <a className="panel-button" href={`${armyForgeBasePath}/choix-d-armee.html?systeme=4`}>
                  Jouer a Age of Fantasy
                </a>
                <a className="panel-button" href={`${armyForgeBasePath}/choix-d-armee.html?systeme=4`}>
                  Jouer a Age of Fantasy: Skirmish
                </a>
                <a className="panel-button" href={`${armyForgeBasePath}/choix-d-armee.html?systeme=4`}>
                  Jouer a Age of Fantasy: Quest
                </a>
                <a className="panel-button" href={`${armyForgeBasePath}/choix-d-armee.html?systeme=4`}>
                  Jouer a Age of Fantasy: Regiments
                </a>
              </div>
            </div>
          </article>

          <article className="game-panel panel-gf">
            <div className="panel-content">
              <p className="panel-eyebrow">Univers Science-Fiction</p>
              <h1>Grimdark Future</h1>
              <p>Creez vos forces futuristes et organisez vos parties rapidement.</p>
              <div className="panel-button-row">
                <a className="panel-button" href={`${armyForgeBasePath}/choix-d-armee.html?systeme=2`}>
                  Jouer a Grimdark Future
                </a>
                <a className="panel-button" href={`${armyForgeBasePath}/choix-d-armee.html?systeme=6`}>
                  Jouer a Grimdark Future: Firefight
                </a>
                <a className="panel-button" href={`${armyForgeBasePath}/choix-d-armee.html?systeme=7`}>
                  Jouer a Grimdark Future: StarQuest
                </a>
                <a className="panel-button" href={`${armyForgeBasePath}/choix-d-armee.html?systeme=8`}>
                  Jouer a Grimdark Future: Warfleets
                </a>
              </div>
            </div>
          </article>
        </section>
      </main>

      <footer className="footer">
        <div>
          <p>Projet non officiel communautaire. One Page Rules appartient a ses auteurs respectifs.</p>
        </div>
      </footer>

      <div className="login-popup" id="loginPopup" hidden>
        <h2 id="loginModalTitle">Connexion</h2>
        <p id="loginModalDescription">Connectez-vous avec Patreon pour synchroniser votre compte.</p>
        <a className="patreon-login-button" id="patreonLoginButton" href="/.netlify/functions/patreon-login">
          Se connecter avec Patreon
        </a>
        <p className="login-helper" id="patreonLoginHelper">
          Vous serez redirige vers Patreon pour autoriser la connexion.
        </p>
        <div className="patreon-account" id="patreonAccount" hidden>
          <p className="patreon-user" id="patreonUser" />
          <p className="patreon-tier-line" id="patreonTierLine" />
          <button className="logout-button" id="logoutButton" type="button">
            Se deconnecter
          </button>
        </div>
      </div>
    </>
  );
}

export default ConstructeurArmee;
