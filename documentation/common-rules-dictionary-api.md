# API du dictionnaire de règles

Le dictionnaire courant est servi par défaut. La version archivée `3.5.3` est
accessible avec le paramètre de requête `version=3.5.3`.

Exemples :

- `GET /api/dictionary?version=3.5.3`
- `GET /api/dictionary?version=3.5.3&system=GF`
- `GET /api/dictionary/rules?version=3.5.3`
- `GET /api/dictionary/rules/fr?version=3.5.3&system=GF`
- `GET /api/dictionary/spells?version=3.5.3`
- `GET /api/dictionary/spells/fr?version=3.5.3&system=AOF`

Sans paramètre `version`, ou avec `version=current`, les routes renvoient le
dictionnaire courant. Une version inconnue renvoie une réponse `400`.

Avec `system`, les descriptions propres au système sont renvoyées sous le tag
du système demandé. Les descriptions génériques conservent le tag `all` afin de
rester un fallback distinct des descriptions spécifiques.

Les fichiers statiques sont également publiés :

- manifeste courant : `/locales/rules/common-rules/index.json`
- manifeste 3.5.3 : `/locales/rules/common-rules/3.5.3/index.json`

Le paramètre `version` de l'API publique Army Forge
`/api/rules/common/:id` est actuellement ignoré par le serveur amont. L'archive
locale est donc nécessaire pour garantir un contenu 3.5.3 immuable.
