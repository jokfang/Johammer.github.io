import { beforeEach, describe, expect, it, vi } from "vitest";

describe("netlify get-army handler", () => {
  beforeEach(() => {
    vi.resetModules();
  });

  it("returns 400 when armyId is missing", async () => {
    const { handler } = await import("../netlify/functions/get-army/get-army");
    const res = await handler({ queryStringParameters: {} } as any, {} as any);
    expect(res.statusCode).toBe(400);
  });

  it("uses beta endpoint when isBeta=true", async () => {
    const json = vi.fn().mockResolvedValue({ ok: true });
    const get = vi.fn().mockReturnValue({ json });
    vi.doMock("got", () => ({ default: { get } }));

    const { handler } = await import("../netlify/functions/get-army/get-army");
    const res = await handler(
      { queryStringParameters: { armyId: "abc", isBeta: "true" } } as any,
      {} as any
    );
    expect(get).toHaveBeenCalledWith(
      "https://army-forge-beta.onepagerules.com/api/tts?id=abc"
    );
    expect(res.statusCode).toBe(200);
  });

  it("returns 500 when upstream request fails", async () => {
    const json = vi.fn().mockRejectedValue(new Error("boom"));
    const get = vi.fn().mockReturnValue({ json });
    vi.doMock("got", () => ({ default: { get } }));

    const { handler } = await import("../netlify/functions/get-army/get-army");
    const res = await handler(
      { queryStringParameters: { armyId: "abc", isBeta: "false" } } as any,
      {} as any
    );
    expect(res.statusCode).toBe(500);
    expect(JSON.parse((res as any).body).error).toContain("Army Forge failed");
  });
});

describe("netlify save-list handler", () => {
  beforeEach(() => {
    vi.resetModules();
    delete process.env.TURSO_DB_URL;
    delete process.env.TURSO_AUTH_STRING;
  });

  it("returns 500 when DB env vars are missing", async () => {
    process.env.TURSO_DB_URL = "";
    process.env.TURSO_AUTH_STRING = "";
    const { handler } = await import("../netlify/functions/save-list/save-list");
    const res = await handler({ httpMethod: "GET" } as any, {} as any);
    expect(res.statusCode).toBe(500);

    const resPost = await handler({ httpMethod: "POST", body: "{}" } as any, {} as any);
    expect(resPost.statusCode).toBe(500);
  });

  it("GET returns 400 without listId", async () => {
    process.env.TURSO_DB_URL = "db";
    process.env.TURSO_AUTH_STRING = "token";
    const execute = vi.fn();
    vi.doMock("@libsql/client", () => ({
      createClient: () => ({ execute }),
    }));

    const { handler } = await import("../netlify/functions/save-list/save-list");
    const res = await handler(
      { httpMethod: "GET", queryStringParameters: {} } as any,
      {} as any
    );
    expect(res.statusCode).toBe(400);
  });

  it("GET returns 404 when list is not found and 200 when found", async () => {
    process.env.TURSO_DB_URL = "db";
    process.env.TURSO_AUTH_STRING = "token";
    const execute = vi
      .fn()
      .mockResolvedValueOnce({ rows: [] })
      .mockResolvedValueOnce({
        rows: [{ list_json: JSON.stringify({ a: 1 }) }],
      });
    vi.doMock("@libsql/client", () => ({
      createClient: () => ({ execute }),
    }));

    const { handler } = await import("../netlify/functions/save-list/save-list");
    const notFound = await handler(
      { httpMethod: "GET", queryStringParameters: { listId: "x" } } as any,
      {} as any
    );
    expect(notFound.statusCode).toBe(404);

    const found = await handler(
      { httpMethod: "GET", queryStringParameters: { listId: "y" } } as any,
      {} as any
    );
    expect(found.statusCode).toBe(200);
    expect(JSON.parse((found as any).body).listJson).toEqual({ a: 1 });
  });

  it("POST validates body and saves list", async () => {
    process.env.TURSO_DB_URL = "db";
    process.env.TURSO_AUTH_STRING = "token";
    const execute = vi.fn().mockResolvedValue({});
    vi.doMock("@libsql/client", () => ({
      createClient: () => ({ execute }),
    }));

    const { handler } = await import("../netlify/functions/save-list/save-list");
    const invalidJson = await handler(
      { httpMethod: "POST", body: "{bad" } as any,
      {} as any
    );
    expect(invalidJson.statusCode).toBe(400);

    const missingBody = await handler(
      { httpMethod: "POST" } as any,
      {} as any
    );
    expect(missingBody.statusCode).toBe(400);

    const missingField = await handler(
      { httpMethod: "POST", body: JSON.stringify({}) } as any,
      {} as any
    );
    expect(missingField.statusCode).toBe(400);

    const success = await handler(
      { httpMethod: "POST", body: JSON.stringify({ list_json: { a: 1 } }) } as any,
      {} as any
    );
    expect(success.statusCode).toBe(200);
  });

  it("POST returns 500 when DB insert fails and rejects unsupported methods", async () => {
    process.env.TURSO_DB_URL = "db";
    process.env.TURSO_AUTH_STRING = "token";
    const execute = vi.fn().mockRejectedValue(new Error("db down"));
    vi.doMock("@libsql/client", () => ({
      createClient: () => ({ execute }),
    }));

    const { handler } = await import("../netlify/functions/save-list/save-list");
    const fail = await handler(
      { httpMethod: "POST", body: JSON.stringify({ list_json: { a: 1 } }) } as any,
      {} as any
    );
    expect(fail.statusCode).toBe(500);

    const badMethod = await handler({ httpMethod: "PUT" } as any, {} as any);
    expect(badMethod.statusCode).toBe(400);
  });
});
