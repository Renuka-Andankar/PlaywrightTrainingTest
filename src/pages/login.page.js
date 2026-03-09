const SAUCE_DEMO_URL = 'https://www.saucedemo.com/';

class LoginPage {
  constructor(page) {
    this.page = page;
    this.userField = '#user-name';
    this.passField = '#password';
    this.loginButton = '#login-button';
    this.errorMessage = '[data-test="error"]';
  }

  async goto() {
    await this.page.goto(SAUCE_DEMO_URL);
  }

  async login(username, password) {
    await this.page.fill(this.userField, username);
    await this.page.fill(this.passField, password);
    await this.page.click(this.loginButton);
  }

  async getErrorText() {
    return this.page.locator(this.errorMessage).innerText();
  }
}

module.exports = { LoginPage };
