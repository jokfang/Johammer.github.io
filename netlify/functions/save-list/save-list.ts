require("dotenv").config();
import { Handler, HandlerEvent } from "@netlify/functions";
import { nanoid } from "nanoid";
import { createClient } from "@libsql/client";

const httpError = (code: number, message: string) => ({
  statusCode: code,
  body: JSON.stringify({
    error: message,
  }),
});

const getClient = () => {
  const url = process.env.TURSO_DB_URL;
  const authToken = process.env.TURSO_AUTH_STRING;

  if (!url || !authToken) {
    console.error("Database environment variables not set");
    return null;
  }

  return createClient({
    url,
    authToken,
  });
};

const parseEventBody = (
  event: HandlerEvent
): { list_json: unknown } | null => {
  if (!event.body) {
    return null;
  }
  try {
    return JSON.parse(event.body) as { list_json: unknown };
  } catch {
    return null;
  }
};

const handleGET = async (event: HandlerEvent) => {
  const client = getClient();
  if (!client) {
    return httpError(500, "Database not configured");
  }

  const listId = event.queryStringParameters?.listId ?? null;

  if (!listId) {
    return httpError(400, "Must supply `listId`");
  }

  const results = await client.execute({
    sql: "SELECT * FROM `lists` WHERE `id` = ?",
    args: [listId],
  });

  const { rows } = results;

  if (rows.length !== 1) {
    return httpError(404, "List not found");
  }

  return {
    statusCode: 200,
    body: JSON.stringify({
      listId,
      listJson: JSON.parse(rows[0].list_json as string),
    }),
  };
};

const handlePOST = async (event: HandlerEvent) => {
  const client = getClient();
  if (!client) {
    return httpError(500, "Database not configured");
  }

  const id = nanoid();
  const body = parseEventBody(event);

  if (!body) {
    return httpError(400, "Invalid JSON body");
  }

  const { list_json } = body;
  if (list_json == null) {
    return httpError(400, "Must supply `list_json`");
  }

  try {
    await client.execute({
      sql: "INSERT INTO `lists` (id, list_json) VALUES (?, ?)",
      args: [id, JSON.stringify(list_json)],
    });

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: "List saved",
        listId: id,
      }),
    };
  } catch (e) {
    console.error("e", e);
    return httpError(500, "Error saving list");
  }
};

export const handler: Handler = async (event, context) => {
  if (event.httpMethod === "GET") {
    return await handleGET(event);
  } else if (event.httpMethod === "POST") {
    return await handlePOST(event);
  }

  return httpError(400, "Must use GET or POST");
};
