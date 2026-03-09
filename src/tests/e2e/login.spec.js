const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../pages/login.page');
const {
  VALID_USER,
  VALID_PASS,
  INVALID_USER,
  INVALID_PASS,
  LOGIN_ERROR_MESSAGE,
} = require('../../utils/testData');

test.describe('Sauce Demo - Login', () => {
  test('should log in successfully with valid credentials', async ({ page }) => {
    const login = new LoginPage(page);

    await login.goto();
    await login.login(VALID_USER, VALID_PASS);

    await expect(page).toHaveURL(/inventory\.html/);
    await expect(page.locator('.inventory_list')).toBeVisible();
  });

  test('should show error message with invalid credentials', async ({ page }) => {
    const login = new LoginPage(page);

    await login.goto();
    await login.login(INVALID_USER, INVALID_PASS);

    await expect(page.locator('[data-test="error"]')).toHaveText(
      LOGIN_ERROR_MESSAGE
    );
  });
});
