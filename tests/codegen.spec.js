import { test, expect } from '@playwright/test';

test('codegen', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByPlaceholder('Username').click();
  await page.getByPlaceholder('Username').fill('Admin');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'Admin' }).click();
  await page.locator('li').filter({ hasText: 'User Management' }).click();
  await page.locator('li').filter({ hasText: 'Job' }).click();
  await page.locator('li').filter({ hasText: /^Job Titles$/ }).click();
  await page.getByRole('row', { name: 'Automaton Tester' }).locator('label i').click();
});