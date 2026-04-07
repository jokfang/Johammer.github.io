import { Handler } from "@netlify/functions";
import got from "got";
import { RulesBook } from "../../../shared/rulesbook";

export const handler: Handler = async (event) => {
  const bookUid = event.queryStringParameters?.bookUid?.trim() ?? "";
  const gameSystemId = event.queryStringParameters?.gameSystemId?.trim() ?? "";
  const isBeta = event.queryStringParameters?.isBeta === "true";

  if (!bookUid || !gameSystemId) {
    return {
      statusCode: 400,
      body: JSON.stringify({
        error: "Endpoint called without a book uid or game system id",
      }),
    };
  }

  try {
    const host = RulesBook.getArmyForgeHost(isBeta);
    const url = `${host}/api/army-books/${bookUid}?gameSystem=${gameSystemId}&simpleMode=false`;
    const res = await got
      .get(url, {
        headers: {
          "User-Agent": "Mozilla/5.0",
          Accept: "application/json, text/plain, */*",
        },
      })
      .json();

    return {
      statusCode: 200,
      body: JSON.stringify(res),
    };
  } catch {
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: "Army Forge failed to fetch army book. Sorry!",
      }),
    };
  }
};
