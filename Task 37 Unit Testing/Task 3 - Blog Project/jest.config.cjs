// jest.config.cjs
module.exports = {
  testEnvironment: "jest-environment-jsdom",
  moduleNameMapper: {
    "\\.css$": "identity-obj-proxy",
  },
  setupFiles: ["./jest.setup.js"], // Ensure this path is correct
};
