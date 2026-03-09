class CartPage {
  constructor(page) {
    this.page = page;
    this.cartItems = '.cart_item';
    this.checkoutButton = '[data-test="checkout"]';
  }

  async getItemCount() {
    return this.page.locator(this.cartItems).count();
  }

  async checkout() {
    await this.page.click(this.checkoutButton);
  }
}

module.exports = { CartPage };
