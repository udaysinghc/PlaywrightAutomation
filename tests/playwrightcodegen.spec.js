import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.locator('body').click();
  await page.goto('https://testautomationpractice.blogspot.com/');
  await expect(page.getByRole('heading', { name: 'Automation Testing Practice' })).toBeVisible();
  await page.getByPlaceholder('Enter Name').click();
  await page.getByPlaceholder('Enter Name').fill('Sumit Sahu');
  await page.getByPlaceholder('Enter Name').press('Tab');
  await page.getByPlaceholder('Enter EMail').fill('sumitsahu@amwebtech.com');
  await page.getByPlaceholder('Enter Phone').click();
  await page.getByPlaceholder('Enter Phone').fill('8545212121');
  await page.getByLabel('Address:').click();
  await page.getByLabel('Address:').fill('indore');
  await page.getByLabel('Male', { exact: true }).check();
  await page.locator('#post-body-1307673142697428135 div').filter({ hasText: 'Sunday' }).nth(1).click();
  await page.getByLabel('Colors:').selectOption('green');
  await page.getByLabel('Colors:').selectOption('blue');
});