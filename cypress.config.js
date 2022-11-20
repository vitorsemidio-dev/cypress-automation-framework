const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: "cypress/e2e/**/*.{js,jsx,tsx,tsx,feature}",
    excludeSpecPattern: "cypress/e2e/other/*.js",
    baseUrl: "http://www.webdriveruniversity.com",
    chromeWebSecurity: false,
    experimentalSessionAndOrigin: true,
    defaultCommandTimeout: 10_000,
    pageLoadTimeout: 120_000,
    screenshotOnRunFailure: true,
    trashAssetsBeforeRuns: true,
    video: true,
    viewportHeight: 1080,
    viewportWidth: 1980,
  },
  env: {
    first_name: "Sarah",
    webdriveruni_homepage: "http://www.webdriveruniversity.com",
    automationteststore_homepage: "https://www.automationteststore.com/",
  }
});
