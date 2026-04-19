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

describe("netlify get-army-book handler", () => {
  beforeEach(() => {
    vi.resetModules();
  });

  it("returns 400 when bookUid or gameSystemId is missing", async () => {
    const { handler } = await import(
      "../netlify/functions/get-army-book/get-army-book"
    );
    const res = await handler({ queryStringParameters: {} } as any, {} as any);
    expect(res.statusCode).toBe(400);
  });

  it("fetches the expected army-book endpoint", async () => {
    const json = vi.fn().mockResolvedValue({ ok: true });
    const get = vi.fn().mockReturnValue({ json });
    vi.doMock("got", () => ({ default: { get } }));

    const { handler } = await import(
      "../netlify/functions/get-army-book/get-army-book"
    );
    const res = await handler(
      {
        queryStringParameters: {
          bookUid: "w7qor7b2kuifcyvk",
          gameSystemId: "2",
          isBeta: "false",
        },
      } as any,
      {} as any
    );

    expect(get).toHaveBeenCalledWith(
      "https://army-forge.onepagerules.com/api/army-books/w7qor7b2kuifcyvk?gameSystem=2&simpleMode=false",
      expect.any(Object)
    );
    expect(res.statusCode).toBe(200);
  });
});

describe("netlify dictionary handler", () => {
  beforeEach(() => {
    vi.resetModules();
  });

  it("returns the common rules dictionary on GET", async () => {
    const { handler } = await import("../netlify/functions/dictionary/dictionary");
    const res = await handler({ httpMethod: "GET" } as any, {} as any);

    expect(res.statusCode).toBe(200);
    expect((res as any).headers["Content-Type"]).toContain("application/json");

    const body = JSON.parse((res as any).body);
    expect(body.commonRules.en.Hero.title).toBe("Hero");
    expect(Object.keys(body.commonSpells.en).length).toBeGreaterThan(0);
  });

  it("rejects unsupported methods", async () => {
    const { handler } = await import("../netlify/functions/dictionary/dictionary");
    const res = await handler({ httpMethod: "POST" } as any, {} as any);

    expect(res.statusCode).toBe(405);
    expect(JSON.parse((res as any).body).error).toBe("Method not allowed");
  });
});

describe("netlify dictionary-rules handler", () => {
  beforeEach(() => {
    vi.resetModules();
  });

  it("returns only RulesByLanguage on GET", async () => {
    const { handler } = await import(
      "../netlify/functions/dictionary-rules/dictionary-rules"
    );
    const res = await handler({ httpMethod: "GET" } as any, {} as any);

    expect(res.statusCode).toBe(200);
    expect((res as any).headers["Content-Type"]).toContain("application/json");

    const body = JSON.parse((res as any).body);
    expect(body.en.Hero.title).toBe("Hero");
    expect(body.commonRules).toBeUndefined();
    expect(body.commonSpells).toBeUndefined();
  });

  it("rejects unsupported methods", async () => {
    const { handler } = await import(
      "../netlify/functions/dictionary-rules/dictionary-rules"
    );
    const res = await handler({ httpMethod: "POST" } as any, {} as any);

    expect(res.statusCode).toBe(405);
    expect(JSON.parse((res as any).body).error).toBe("Method not allowed");
  });
});

describe("netlify dictionary-spells handler", () => {
  beforeEach(() => {
    vi.resetModules();
  });

  it("returns only SpellsByLanguage on GET", async () => {
    const { handler } = await import(
      "../netlify/functions/dictionary-spells/dictionary-spells"
    );
    const res = await handler({ httpMethod: "GET" } as any, {} as any);

    expect(res.statusCode).toBe(200);
    expect((res as any).headers["Content-Type"]).toContain("application/json");

    const body = JSON.parse((res as any).body);
    expect(body.en).toBeDefined();
    expect(Object.keys(body.en).length).toBeGreaterThan(0);
    expect(body.commonSpells).toBeUndefined();
    expect(body.commonRules).toBeUndefined();
  });

  it("rejects unsupported methods", async () => {
    const { handler } = await import(
      "../netlify/functions/dictionary-spells/dictionary-spells"
    );
    const res = await handler({ httpMethod: "POST" } as any, {} as any);

    expect(res.statusCode).toBe(405);
    expect(JSON.parse((res as any).body).error).toBe("Method not allowed");
  });
});

describe("netlify dictionary-rules-language handler", () => {
  beforeEach(() => {
    vi.resetModules();
  });

  it("returns only the requested rules language and falls back to english", async () => {
    const { handler } = await import(
      "../netlify/functions/dictionary-rules-language/dictionary-rules-language"
    );

    const frenchRes = await handler(
      { httpMethod: "GET", queryStringParameters: { language: "fr-FR" } } as any,
      {} as any
    );
    const frenchBody = JSON.parse((frenchRes as any).body);
    expect(frenchRes.statusCode).toBe(200);
    expect(frenchBody.Hero.title).not.toBe("Hero");

    const fallbackRes = await handler(
      { httpMethod: "GET", queryStringParameters: { language: "es-ES" } } as any,
      {} as any
    );
    const fallbackBody = JSON.parse((fallbackRes as any).body);
    expect(fallbackBody.Hero.title).toBe("Hero");
  });
});

describe("netlify dictionary-spells-language handler", () => {
  beforeEach(() => {
    vi.resetModules();
  });

  it("returns only the requested spells language and falls back to english", async () => {
    const { handler } = await import(
      "../netlify/functions/dictionary-spells-language/dictionary-spells-language"
    );

    const frenchRes = await handler(
      { httpMethod: "GET", queryStringParameters: { language: "fr-FR" } } as any,
      {} as any
    );
    const frenchBody = JSON.parse((frenchRes as any).body);
    expect(frenchRes.statusCode).toBe(200);
    expect(Object.keys(frenchBody).length).toBeGreaterThan(0);

    const fallbackRes = await handler(
      { httpMethod: "GET", queryStringParameters: { language: "es-ES" } } as any,
      {} as any
    );
    const fallbackBody = JSON.parse((fallbackRes as any).body);
    expect(Object.keys(fallbackBody).length).toBeGreaterThan(0);
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
