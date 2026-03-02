import { Handler } from "@netlify/functions";
import { RulesBook } from "./rulesbook";

export const handler: Handler = async (event, context) => {
  const armyId = event.queryStringParameters?.armyId?.trim() ?? "";
  const isBeta = event.queryStringParameters?.isBeta === "true";

  if (armyId) {
    try {
      const res = await RulesBook.fetchTtsExport(armyId, isBeta);

      return {
        statusCode: 200,
        body: JSON.stringify(res),
      };
    } catch {
      return {
        statusCode: 500,
        body: JSON.stringify({
          error: "Army Forge failed to export list. Sorry!",
        }),
      };
    }
  }

  return {
    statusCode: 400,
    body: JSON.stringify({
      error: `Endpoint called without an army list id`,
    }),
  };
};
