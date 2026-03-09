class InventoryPage {
  constructor(page) {
    this.page = page;
    this.cartLink = '.shopping_cart_link';
  }

  async addItemToCart(itemTestId) {
    await this.page.click(`button[data-test="add-to-cart-${itemTestId}"]`);
  }

  async openCart() {
    await this.page.click(this.cartLink);
  }
}

module.exports = { InventoryPage };
