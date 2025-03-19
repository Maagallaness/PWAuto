import { test, expect } from '@playwright/test';

test('basic test', async ({ page }) => {
  // Navigate to website
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);

  // Click the get started link.
  await page.getByRole('link', { name: 'Star' }).click();

  // Expects page to have a heading with the name "Installation".
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
