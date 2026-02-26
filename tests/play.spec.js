import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('https://www.todtv.com.tr/hosgeldiniz');
    await page.locator('iframe').contentFrame().getByText('Daha Sonra').click();
    await page.getByRole('button', { name: 'Hepsini Reddet' }).click();
    await page.getByRole('link', { name: 'İçerikleri Keşfet' }).click();
    await page.getByRole('link', { name: 'Yeni Gelenler' }).click();
    await page.getByRole('link', { name: 'Mission: Impossible - Son' }).click();
    await page.waitForLoadState('networkidle');
    await page.getByRole('link', { name: 'Fragmanı İzle' }).click();
    await page.waitForSelector('[aria-label="Play"]', { timeout: 15000 });
    await page.getByRole('region', { name: 'Video player controls' }).getByLabel('Play').click();
    await page.waitForTimeout(3000);
    await page.getByRole('region', { name: 'Video player controls' }).getByLabel('Play').click();
    await page.waitForTimeout(2000);
    await page.locator('#bmpui-id-82').click();
    await page.waitForTimeout(2000);
    await page.locator('#bmpui-id-82').click();
    await page.waitForTimeout(2000);
    await page.getByRole('button', { name: 'Sessiz' }).click();
    await page.waitForTimeout(2000);
    await page.getByRole('button', { name: 'Close' }).click();
});