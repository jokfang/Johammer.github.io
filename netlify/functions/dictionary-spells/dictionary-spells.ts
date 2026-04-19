import { Handler } from "@netlify/functions";
import { getCommonSpellsDictionary } from "../../../src/services/common-rules-api";

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

  return jsonResponse(200, getCommonSpellsDictionary());
};
