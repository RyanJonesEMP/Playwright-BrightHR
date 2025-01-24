import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  //Login
  await page.goto('https://sandbox-app.brighthr.com/lite');
  await page.screenshot({ path: 'screenshot1.png' })
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.getByRole('textbox', { name: 'Email address' }).click();
  await page.getByRole('textbox', { name: 'Email address' }).fill('ryanjonesemp@gmail.com');
  await page.getByRole('textbox', { name: 'Password visibility' }).click();
  await page.getByRole('textbox', { name: 'Password visibility' }).fill('Power11werop!');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.screenshot({ path: 'screenshot2.png' })

  //Home Page
  await page.getByRole('heading', { name: 'Your daily rota update' });
  await page.screenshot({ path: 'screenshot3.png' })

  //Navigate to Employees Page
  await page.getByTestId('sideBar').getByRole('link', { name: 'Employees' }).click();
  await page.screenshot({ path: 'screenshot4.png' })

  //Add Employee 1
  await page.getByRole('button', { name: 'Add employee' }).click();
  await page.getByRole('textbox', { name: 'First name' }).click();
  await page.getByRole('textbox', { name: 'First name' }).fill('Ryan');
  await page.getByRole('textbox', { name: 'First name' }).press('Tab');
  await page.getByRole('textbox', { name: 'Last name' }).fill('Jones 2');
  await page.getByRole('textbox', { name: 'Last name' }).press('Tab');
  await page.getByRole('textbox', { name: 'Email address' }).fill('ryanjonesemp@gmail.com');
  await page.getByRole('textbox', { name: 'Phone number (optional)' }).click();
  await page.getByRole('textbox', { name: 'Phone number (optional)' }).fill('07712552958');
  await page.getByTestId('input-selector').click();
  await page.getByTestId('daypicker-panel').getByRole('img').nth(1).click();
  await page.getByRole('gridcell', { name: 'Fri Feb 28' }).locator('div').nth(1).click();
  await page.getByRole('textbox', { name: 'Job title (optional)' }).click();
  await page.getByRole('textbox', { name: 'Job title (optional)' }).fill('Test Job');

  //Add Employee 2
  await page.getByRole('button', { name: 'Save new employee' }).click();
  await page.getByRole('button', { name: 'Add another employee' }).click();
  await page.getByRole('textbox', { name: 'First name' }).click();
  await page.getByRole('textbox', { name: 'First name' }).fill('Ryan');
  await page.getByRole('textbox', { name: 'First name' }).press('Tab');
  await page.getByRole('textbox', { name: 'Last name' }).fill('Jones 3');
  await page.getByRole('textbox', { name: 'Email address' }).click();
  await page.getByRole('textbox', { name: 'Email address' }).fill('ryanjonesemp@gmail.com');
  await page.getByRole('textbox', { name: 'Email address' }).press('Tab');
  await page.getByTestId('inputRight').press('Tab');
  await page.getByRole('textbox', { name: 'Phone number (optional)' }).fill('07712552958');
  await page.getByTestId('input-selector').click();
  await page.getByTestId('daypicker-panel').getByRole('img').nth(1).click();
  await page.getByLabel('Fri Feb 28').getByText('28').click();
  await page.getByRole('textbox', { name: 'Job title (optional)' }).click();
  await page.getByRole('textbox', { name: 'Job title (optional)' }).fill('Test Job 2');
  await page.getByRole('button', { name: 'Save new employee' }).click();
  await page.getByRole('button', { name: 'Close modal' }).click();

  //Comfirm Employee 1 and 2 are added
  await page.getByTestId('sideBar').getByRole('link', { name: 'Employees' }).click();
  await page.locator('.grid > div:nth-child(2)');
  await page.locator('.grid > div:nth-child(3)');
  await page.screenshot({ path: 'screenshot5.png' })

  //Clean Data
  // await page.getByTestId('sideBar').getByRole('link', { name: 'Employees' }).click();
  // await page.getByTestId('EditButton').nth(1).click();
  // await page.getByRole('link', { name: 'Delete employee record' }).click();
  // await page.getByTestId('checkboxLabel').locator('span').first().click();
  // await page.getByRole('button', { name: 'Delete Ryan' }).click();
  // await page.getByRole('button', { name: 'Return to employee hub' }).click();
  // await page.getByTestId('EditButton').nth(1).click();
  // await page.getByRole('link', { name: 'Delete employee record' }).click();
  // await page.getByTestId('checkboxLabel').locator('span').first().click();
  // await page.getByRole('button', { name: 'Delete Ryan' }).click();
  // await page.getByRole('button', { name: 'Return to employee hub' }).click();
  // await page.screenshot({ path: 'screenshot6.png' })
  // await page.getByTestId('sideBar').getByRole('link', { name: 'Home' }).click();
  // await page.getByRole('link', { name: 'Employees' }).click();
  // await page.locator('div').filter({ hasText: /^RJRyan Jones$/ }).first().click();
  // await page.screenshot({ path: 'screenshot7.png' })
  
  //Logout
  await page.getByRole('link', { name: 'Logout' }).click();
  

  //Confirm Logout
  await page.getByRole('heading', { name: 'Get FREE unlimited rota' });
  await page.screenshot({ path: 'screenshot8.png' })
});



