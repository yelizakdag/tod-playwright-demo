const { Given, When, Then } = require('@cucumber/cucumber');
const { LoginPage } = require('../pages/LoginPage');

Given('TOD TV ana sayfasındayım', async function () {
  this.loginPage = new LoginPage(this.page);
  await this.loginPage.goto('/hosgeldiniz');
});
Given('çerez popup\'ını kapatıyorum', async function () {
  await this.loginPage.closeCookiePopup();
});
When('giriş yap sayfasına gidiyorum', async function () {
  await this.loginPage.navigateToLogin();
});
When('kullanıcı adı olarak {string} giriyorum', async function (username) {
  await this.loginPage.fillUsername(username);
});
When('şifre olarak {string} giriyorum', async function (password) {
  await this.loginPage.fillPassword(password);
});
When('devam et butonuna tıklıyorum', async function () {
  await this.loginPage.clickSubmit();
});
Then('{string} hata mesajını görmeliyim', async function (expectedMessage) {
  const errorLocator = this.page.getByText(expectedMessage);
  await errorLocator.waitFor({ state: 'visible', timeout: 30000 });
});
