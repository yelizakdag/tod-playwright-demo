const { setWorldConstructor, World } = require('@cucumber/cucumber');
const { chromium } = require('playwright');

class PlaywrightWorld extends World {
  async openBrowser() {
    this.browser = await chromium.launch({ headless: false });
    this.context = await this.browser.newContext({ baseURL: 'https://www.todtv.com.tr' });
    this.page = await this.context.newPage();
  }
  async closeBrowser() {
    await this.browser.close();
  }
}
setWorldConstructor(PlaywrightWorld);
