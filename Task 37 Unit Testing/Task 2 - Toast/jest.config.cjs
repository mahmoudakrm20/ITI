// jest.config.cjs
module.exports = {
  testEnvironment: "jest-environment-jsdom", // Specify the environment explicitly
  moduleNameMapper: {
    "\\.css$": "identity-obj-proxy", // Mock CSS imports
  },
};
