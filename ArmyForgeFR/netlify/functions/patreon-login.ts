import type { Handler } from "@netlify/functions";
import crypto from "node:crypto";
import { readEnv } from "./_env";

const COOKIE_STATE = "patreon_oauth_state";
const COOKIE_DEBUG = "patreon_oauth_debug";

const getBaseUrl = (host: string, forwardedProto?: string): string => {
  const isLocalHost = /^localhost(?::\d+)?$/i.test(host) || /^127\.0\.0\.1(?::\d+)?$/.test(host);
  const protocol = forwardedProto ? (forwardedProto === "http" ? "http" : "https") : (isLocalHost ? "http" : "https");
  return `${protocol}://${host}`;
};

const shouldUseSecureCookie = (host: string, forwardedProto?: string): boolean => {
  if (forwardedProto) {
    return forwardedProto !== "http";
  }

  return !/^localhost(?::\d+)?$/i.test(host) && !/^127\.0\.0\.1(?::\d+)?$/.test(host);
};

const buildCookie = (name: string, value: string, maxAgeSeconds: number, secure: boolean): string => {
  const securePart = secure ? "; Secure" : "";
  return `${name}=${value}; Path=/; Max-Age=${maxAgeSeconds}; HttpOnly; SameSite=Lax${securePart}`;
};

export const handler: Handler = async (event) => {
  const clientId = readEnv("PATREON_CLIENT_ID", "VITE_PATREON_CLIENT_ID");
  const configuredRedirectUri = readEnv("PATREON_REDIRECT_URI");
  const scopes = readEnv("PATREON_OAUTH_SCOPES") ?? "identity identity[email] identity.memberships";
  const host = event.headers.host;
  const forwardedProto = event.headers["x-forwarded-proto"];
  const debugMode = event.queryStringParameters?.debug === "1";

  if (!clientId || !host) {
    console.error("[patreon-login] Missing configuration", {
      hasClientId: Boolean(clientId),
      hasHost: Boolean(host)
    });
    return {
      statusCode: 500,
      body: "Configuration Patreon incomplete: define PATREON_CLIENT_ID (or VITE_PATREON_CLIENT_ID) and ensure host is available."
    };
  }

  const redirectUri = configuredRedirectUri ?? `${getBaseUrl(host, forwardedProto)}/.netlify/functions/patreon-callback`;
  const state = crypto.randomUUID();
  const secure = shouldUseSecureCookie(host, forwardedProto);
  const stateCookie = buildCookie(COOKIE_STATE, encodeURIComponent(state), 600, secure);
  const debugCookie = buildCookie(COOKIE_DEBUG, debugMode ? "1" : "0", 60 * 60, secure);

  const params = new URLSearchParams({
    response_type: "code",
    client_id: clientId,
    redirect_uri: redirectUri,
    scope: scopes,
    state
  });

  console.log("[patreon-login] OAuth start", {
    host,
    forwardedProto,
    debugMode,
    redirectUri,
    scopes
  });

  return {
    statusCode: 302,
    headers: {
      Location: `https://www.patreon.com/oauth2/authorize?${params.toString()}`
    },
    multiValueHeaders: {
      "Set-Cookie": [stateCookie, debugCookie]
    }
  };
};
