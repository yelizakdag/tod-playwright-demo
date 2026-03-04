const { BasePage } = require('./BasePage');

class LoginPage extends BasePage {
  constructor(page) {
    super(page);
    this.usernameInput = page.getByRole('textbox', { name: 'Cep Telefonu / E-posta / Ü' });
    this.passwordInput = page.getByRole('textbox', { name: 'Şifre' });
    this.loginLink    = page.locator('a').filter({ hasText: /^Giriş Yap$/ });
    this.submitButton = page.getByRole('button', { name: 'Devam Et' });
    this.errorMessage = page.getByText('Lütfen geçerli bir Şifre girin!');
  }

  async navigateToLogin() { await this.loginLink.click(); }
  async fillUsername(username) { await this.usernameInput.fill(username); }
  async fillPassword(password) { await this.passwordInput.fill(password); }
  async clickSubmit() { await this.submitButton.click(); }
}
module.exports = { LoginPage };
