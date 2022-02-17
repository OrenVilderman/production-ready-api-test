/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  collectCoverage: true,
  maxWorkers: 1,
  collectCoverageFrom: [
    "**/*.{jsx,ts}",
    "!**/node_modules/**",
    "!**/coverage/**",
  ],
};
