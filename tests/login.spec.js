const { test, expect } = require('@playwright/test');

test.describe('TOD TV Login - Negative Scenario', () => {

  test('Login attempt with invalid credentials', async ({ page }) => {
    // Adım 1: Siteye git
    await page.goto('/hosgeldiniz');

    // Adım 2: Cookie popup'ını kapat
    await page.locator('iframe').contentFrame().getByText('Daha Sonra').click();
    await page.getByRole('button', { name: 'Hepsini Reddet' }).click();

    // Adım 3: "Giriş Yap" butonuna tıkla
    await page.locator('a').filter({ hasText: /^Giriş Yap$/ }).click();

    // Adım 4: Kullanıcı adı gir
    await page.getByRole('textbox', { name: 'Cep Telefonu / E-posta / Ü' }).fill('yelizakdag');

    // Adım 5: Şifre gir
    await page.getByRole('textbox', { name: 'Şifre' }).fill('12345');

    // Adım 6: Giriş butonuna tıkla
    await page.getByRole('button', { name: 'Devam Et' }).click();

    // Adım 7: Hata mesajının görüntülendiğini doğrula
    await expect(page.getByText('Lütfen geçerli bir Şifre girin!')).toBeVisible();
  });

});
