import { Handler } from "@netlify/functions";
import {
  getVersionedCommonRulesDictionary,
  getVersionedCommonSpellsDictionary,
  getVersionedFactionData,
  isDictionaryVersionSupported,
} from "../shared/versioned-dictionary";

const jsonResponse = (statusCode: number, body: unknown) => ({
  statusCode,
  headers: {
    "Content-Type": "application/json; charset=utf-8",
  },
  body: JSON.stringify(body),
});

export const handler: Handler = async (event) => {
  if (event.httpMethod && event.httpMethod !== "GET") {
    return jsonResponse(405, {
      error: "Method not allowed",
    });
  }

  const system = event.queryStringParameters?.system;
  const version = event.queryStringParameters?.version;
  if (!isDictionaryVersionSupported(version)) {
    return jsonResponse(400, { error: `Unsupported dictionary version: ${version}` });
  }

  return jsonResponse(200, {
    commonRules: getVersionedCommonRulesDictionary(system, version),
    commonSpells: getVersionedCommonSpellsDictionary(system, version),
    factionData: getVersionedFactionData(system, version),
  });
};
