const { defineConfig } = require("cypress");
const path = require("path");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on("before:browser:launch", (browser, launchOptions) => {
        launchOptions.extensions.push(path.join(__dirname, "web-extension/"));
        return launchOptions;
      });
    },
  },
});
