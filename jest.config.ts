import type { Config } from "jest";
import nextJest from "next/jest.js";

const createJestConfig = nextJest({
  // path to the Next.js app to load next.config.ts and .env files in the test environment
  dir: "./",
});

// add custom configs for Jest
const config: Config = {
  coverageProvider: "v8", // new (from Next)
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  // testEnvironment: "jsdom", (replaced with syntax below)
  testEnvironment: "jest-environment-jsdom",
  preset: "ts-jest",
};

export default createJestConfig(config);
