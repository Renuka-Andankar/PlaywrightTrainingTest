const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../pages/login.page');
const { InventoryPage } = require('../../pages/inventory.page');
const { CartPage } = require('../../pages/cart.page');
const { CheckoutPage } = require('../../pages/checkout.page');
const { VALID_USER, VALID_PASS, ORDER_SUCCESS_HEADER } = require('../../utils/testData');

async function login(page) {
  const login = new LoginPage(page);
  await login.goto();
  await login.login(VALID_USER, VALID_PASS);
  await expect(page).toHaveURL(/inventory\.html/);
}

test.describe('Sauce Demo - Ordering Flow', () => {
  test('should complete an order end-to-end', async ({ page }) => {
    await login(page);

    const inventory = new InventoryPage(page);
    const cart = new CartPage(page);
    const checkout = new CheckoutPage(page);

    // Add a couple of items to cart
    await inventory.addItemToCart('sauce-labs-backpack');
    await inventory.addItemToCart('sauce-labs-bike-light');

    // Open cart
    await inventory.openCart();
    await expect(page).toHaveURL(/cart\.html/);
    await expect(cart.getItemCount()).resolves.toBe(2);

    // Checkout
    await cart.checkout();
    await expect(page).toHaveURL(/checkout-step-one\.html/);

    // Fill in checkout information
    await checkout.fillInformation({
      firstName: 'Renuka',
      lastName: 'Andankar',
      postalCode: '12345',
    });
    await checkout.continue();

    // Verify overview and finish
    await expect(page).toHaveURL(/checkout-step-two\.html/);
    await expect(cart.getItemCount()).resolves.toBe(2);
    await checkout.finish();

    // Confirmation
    await expect(page).toHaveURL(/checkout-complete\.html/);
    await expect(checkout.getConfirmationHeader()).resolves.toContain(ORDER_SUCCESS_HEADER);
  });
});
