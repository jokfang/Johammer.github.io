# Army Forge TTS API (mini-doc interne)

Ce document décrit l'API utilisée par le projet pour récupérer une liste Army Forge au format consommable par l'application.

Source principale dans le code:
- [netlify/functions/get-army/rulesbook.ts](../netlify/functions/get-army/rulesbook.ts)
- [netlify/functions/get-army/get-army.ts](../netlify/functions/get-army/get-army.ts)
- [shared/rulesbook.ts](../shared/rulesbook.ts)
- [src/army-forge-types.ts](../src/army-forge-types.ts)

## Endpoint appelé

Le code appelle:
- `GET /api/tts?id=<armyId>`

Hôtes possibles:
- Production: `https://army-forge.onepagerules.com/api/tts?id=<armyId>`
- Beta: `https://army-forge-beta.onepagerules.com/api/tts?id=<armyId>`

Le switch prod/beta est piloté par `isBeta`.

## Paramètres

### Query param `id`
- Type: `string`
- Requis: oui
- Description: identifiant de la liste Army Forge (issu du lien de partage Army Forge).

Exemple de lien de partage attendu côté app:
- `https://army-forge.onepagerules.com/army-books/view?id=<armyId>`

## Réponse (shape observée dans ce projet)

Le projet traite la réponse comme:
- `ListState` (voir `src/army-forge-types.ts`)
- éventuellement avec `error?: string`

Champs principaux consommés:
- `creationTime: string`
- `name: string`
- `points: number`
- `gameSystem: "gf" | "gff" | "aof" | "aofs" | "aofr"`
- `units: ISelectedUnit[]`

`ISelectedUnit` inclut notamment:
- infos d'unité (`name`, `size`, `quality`, `defense`, `rules`, ...)
- sélection (`selectionId`, `joinToUnit`, `selectedUpgrades`, `loadout`, ...)

### Exemple simplifié

```json
{
  "creationTime": "2026-01-01T12:00:00.000Z",
  "name": "My Army List",
  "points": 2000,
  "gameSystem": "aof",
  "units": [
    {
      "id": "unit-1",
      "name": "Warriors",
      "size": 10,
      "quality": "4",
      "defense": "4",
      "selectionId": "sel-1",
      "selectedUpgrades": [],
      "loadout": []
    }
  ]
}
```

## Erreurs gérées dans ce projet

### Côté proxy Netlify `/.netlify/functions/get-army`

- `400` si `armyId` absent:
  ```json
  { "error": "Endpoint called without an army list id" }
  ```
- `500` si l'appel upstream échoue:
  ```json
  { "error": "Army Forge failed to export list. Sorry!" }
  ```

### Côté frontend

Le client vérifie:
- réponse vide -> erreur
- présence de `error` dans le body -> erreur

## Notes importantes

- Cette mini-doc est basée sur les contrats **observés dans le code du projet**, pas sur une spec officielle publiée.
- Si l'API amont change (champs, erreurs, format), les types `src/army-forge-types.ts` devront être ajustés.
