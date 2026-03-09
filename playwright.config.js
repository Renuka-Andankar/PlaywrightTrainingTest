const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  // testDir: './tests',

  timeout: 50 * 1000,

  expect: {
    timeout: 5000,
  },

  // ✅ Enable ALL reports together
  reporter: [
    ['list'],                      // Console report
    ['html', { open: 'never' }],   // Playwright HTML report
    ["line"],
     ['allure-playwright', {
      detail: true,
      outputFolder: 'allure-results',
      suiteTitle: false
    }]         // Allure report
  ],

  use: {
    browserName: 'chromium',
    headless: true,

    // Best settings for reports
    screenshot: 'on',
    trace: 'on-first-retry',
    video: 'retain-on-failure',
  },
});
