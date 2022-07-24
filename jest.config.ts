export default {
  testEnvironment: "jsdom",  
  roots: ["<rootDir>/src"],
  verbose: true,
  transform: {
    "\\.[jt]sx?$": "esbuild-jest",
  },
  testMatch: [
    "<rootDir>/src/**/__tests__/**/*.{js,jsx,ts,tsx}",
    "<rootDir>/src/**/*.{spec,test}.{js,jsx,ts,tsx}",
  ],  
  testPathIgnorePatterns: ["/node_modules/", "/dist/"],
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
}
