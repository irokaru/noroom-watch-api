module.exports = {
  transform: {
    ".(ts|tsx)": "ts-jest",
  },
  testMatch: ["**/tests/**/*.spec.(ts|tsx)"],
  globals: {
    "ts-jest": {
      tsconfig: "tsconfig.json",
    },
  },
  moduleNameMapper: {
    "^#/(.*)$": "<rootDir>/src/$1",
  },
};
