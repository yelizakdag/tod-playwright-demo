class BasePage {
  constructor(page) { this.page = page; }

  async goto(path) {
    await this.page.goto(path);
  }

  async closeCookiePopup() {
    await this.page.locator('iframe').contentFrame().getByText('Daha Sonra').click();
    await this.page.getByRole('button', { name: 'Hepsini Reddet' }).click();
  }
}
module.exports = { BasePage };
