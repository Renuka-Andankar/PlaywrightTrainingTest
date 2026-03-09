# Playwright Training Framework

_Author: Renuka Andankar_

A lightweight Playwright test automation framework scaffolded for training and experimentation.

## 🚀 Overview

This repository provides a basic Playwright setup with:
- Playwright test runner (`@playwright/test`)
- Allure reporting via `allure-playwright`
- Example end-to-end test verifying that Playwright can load a sample site

## ✅ Prerequisites

- Node.js (v16+ recommended)
- npm (bundled with Node.js)

## 🛠️ Setup

1. Install dependencies:

```bash
npm install
```

2. (Optional) Install Playwright browsers (if not already):

```bash
npx playwright install
```

## ▶️ Running Tests

Run the test suite using Playwright's test runner:

```bash
npx playwright test
```

> The default test is located at `src/tests/e2e/sanity.spec.js`.

## 🧾 Reporting

### Playwright HTML Report

After a test run, generate/open the HTML report:

```bash
npx playwright show-report
```

### Allure Report

Allure results are written to `allure-results/`.

To generate the HTML report:

```bash
npx allure generate --clean
```

#### Option A — View via Allure CLI

```bash
npx allure open
```

#### Option B — Serve the generated report (useful if `allure open` is unavailable)

1. If you have a ZIP export (e.g., `allure-report.zip`), unzip it:

```bash
unzip allure-report.zip -d allure-report
```

2. Serve the report using a static server:

```bash
npx serve --single allure-report
```

> If `allure` is not available, you can install it globally:
>
> ```bash
> npm install -g allure-commandline
> ```

## 🧱 Project Structure

```
├── playwright.config.js         # Playwright configuration (reporters, timeouts, etc.)
├── src/
│   ├── fixtures/              # Test fixtures (custom test setups)
│   ├── pages/                 # Page objects / UI abstractions
│   └── tests/
│       └── e2e/               # End-to-end tests
│           └── sanity.spec.js # Example sanity test
├── allure-results/            # Allure raw results (generated)
├── allure-report/             # Generated Allure report (HTML output)
└── playwright-report/         # Generated Playwright HTML report
```

## ✏️ Adding New Tests

1. Create a new `.spec.js` file under `src/tests/e2e/`.
2. Use Playwright's test API:

```js
const { test, expect } = require('@playwright/test');

test('my test', async ({ page }) => {
  await page.goto('https://example.com');
  await expect(page).toHaveTitle(/Example/);
});
```

3. Run the test:

```bash
npx playwright test
```

## 🧩 Customizing Configuration

Update `playwright.config.js` to change: 
- browsers (e.g., `firefox`, `webkit`)
- headless/headful execution
- timeouts
- reporters (console, HTML, Allure, etc.)

## 📌 Notes

- The current setup uses `headless: true` and captures screenshots/traces on failure.
- The `test` script in `package.json` is a placeholder; it can be updated to a real command (e.g., `playwright test`).

---

