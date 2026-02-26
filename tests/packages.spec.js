import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('https://www.todtv.com.tr/hosgeldiniz');
    await page.locator('iframe').contentFrame().getByText('Daha Sonra').click();
    await page.getByRole('button', { name: 'Hepsini Reddet' }).click();
    await page.getByRole('link', { name: 'Satın Al' }).first().click();
    await page.getByLabel('1 /').getByRole('button', { name: 'Hemen Satın Al' }).click();
    await page.getByRole('textbox', { name: 'Ad', exact: true }).click();
    await page.getByRole('textbox', { name: 'Ad', exact: true }).fill('yeliz');
    await page.getByRole('textbox', { name: 'Soyad' }).click();
    await page.getByRole('textbox', { name: 'Soyad' }).fill('akdağ');
    await page.getByRole('textbox', { name: 'T.C. Kimlik Numarası' }).click();
    await page.getByRole('textbox', { name: 'T.C. Kimlik Numarası' }).fill('111111111111');
    await page.getByRole('textbox', { name: 'Doğum Tarihi' }).fill('2000-12-19');
    await page.getByRole('textbox', { name: 'E-Posta' }).fill('akdagyeliz@gmail.com');
    await page.getByRole('textbox', { name: 'Cep Telefonu' }).click();
    await page.getByRole('textbox', { name: 'Cep Telefonu' }).fill('(555) 555 55 55_');
    await page.locator('div:nth-child(16) > .checkbox-container > .custom-checkbox > .checkmark').click();
});