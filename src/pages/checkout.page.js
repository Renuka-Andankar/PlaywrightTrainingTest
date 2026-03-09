class CheckoutPage {
  constructor(page) {
    this.page = page;
    this.firstName = '[data-test="firstName"]';
    this.lastName = '[data-test="lastName"]';
    this.postalCode = '[data-test="postalCode"]';
    this.continueButton = '[data-test="continue"]';
    this.finishButton = '[data-test="finish"]';
    this.completeHeader = '[data-test="complete-header"]';
  }

  async fillInformation({ firstName, lastName, postalCode }) {
    await this.page.fill(this.firstName, firstName);
    await this.page.fill(this.lastName, lastName);
    await this.page.fill(this.postalCode, postalCode);
  }

  async continue() {
    await this.page.click(this.continueButton);
  }

  async finish() {
    await this.page.click(this.finishButton);
  }

  async getConfirmationHeader() {
    return this.page.locator(this.completeHeader).innerText();
  }
}

module.exports = { CheckoutPage };
