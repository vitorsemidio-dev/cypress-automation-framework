const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "rkd47h",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: "cypress/e2e/**/*.{js,jsx,tsx,tsx,feature}",
    excludeSpecPattern: "cypress/e2e/other/*.js",
    baseUrl: "http://www.webdriveruniversity.com",
    chromeWebSecurity: false,
    experimentalSessionAndOrigin: true,
    experimentalRunAllSpecs: true,
    defaultCommandTimeout: 10_000,
    pageLoadTimeout: 120_000,
    reporter: "cypress-multi-reporters",
    reporterOptions: {
      configFile: "reporter-config.json",
    },
    screenshotOnRunFailure: true,
    trashAssetsBeforeRuns: true,
    video: true,
    videoUploadOnPasses: false,
    viewportHeight: 1080,
    viewportWidth: 1980,
  },
  env: {
    first_name: "Sarah",
    webdriveruni_homepage: "http://www.webdriveruniversity.com",
    automationteststore_homepage: "https://www.automationteststore.com/",
  },
});
