import { test, expect } from '@playwright/test';
{
    test('test', async ({ page }) => {
        await page.goto('https://onlinelibrary.wiley.com/');
        await page.getByPlaceholder('Search publications, articles').click();
        await page.getByPlaceholder('Search publications, articles').fill('science');

        await page.getByLabel('Submit Search').click();
    });
    test('test', async ({ page }) => {
        await page.goto('https://onlinelibrary.wiley.com/');
        await page.getByRole('link', { name: '+ Journals' }).click();

    });







}

