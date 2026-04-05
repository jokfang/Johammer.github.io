import { config as dotenvConfig } from "dotenv";
import { existsSync } from "node:fs";
import { resolve } from "node:path";

let envLoaded = false;

const loadEnvFiles = (): void => {
  if (envLoaded) {
    return;
  }

  const cwd = process.cwd();
  const envPath = resolve(cwd, ".env");
  const envExamplePath = resolve(cwd, ".env.example");

  if (existsSync(envPath)) {
    dotenvConfig({ path: envPath, override: false });
  }

  if (existsSync(envExamplePath)) {
    dotenvConfig({ path: envExamplePath, override: false });
  }

  envLoaded = true;
};

const isUsableValue = (value: string | undefined): value is string => {
  if (!value) {
    return false;
  }

  const normalized = value.trim();
  if (normalized.length === 0) {
    return false;
  }

  if (normalized.startsWith("your_patreon_")) {
    return false;
  }

  return true;
};

export const readEnv = (...keys: string[]): string | undefined => {
  loadEnvFiles();

  for (const key of keys) {
    const value = process.env[key];
    if (isUsableValue(value)) {
      return value;
    }
  }

  return undefined;
};
