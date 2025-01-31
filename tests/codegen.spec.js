import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');
  await page.getByPlaceholder('Start Date').fill('2024-12-01');
  await page.getByPlaceholder('End Date').fill('2024-12-15');
  await page.locator('#post-body-1307673142697428135').getByRole('button', { name: 'Submit' }).click();
  await expect(page.getByText('You selected a range of 14')).toBeVisible();
  await page.locator('#datepicker').click();
  await page.getByTitle('Next').click();
  await page.locator('#ui-datepicker-div').getByRole('link', { name: '1', exact: true }).click();
  await page.locator('#txtDate').click();
  await page.getByTitle('Next').click();
  await page.getByTitle('Next').click();
  await page.getByRole('row', { name: '1', exact: true }).getByRole('link').click();
});