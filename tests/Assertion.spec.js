import {test,expect} from '@playwright/test';
//test('Assertions',{tag: '@smoke',},async({page})=>{
test('Assertion',async({page})=>{
    await page.goto('https://demo.nopcommerce.com/register');
    
    // Page has a URL 
    // Used hard assertion
    await expect(page).toHaveURL('https://demo.nopcommerce.com/register'); 
    
    // Page has a title 
    // Used soft assertion  
    await expect.soft(page).toHaveTitle('nopCommerce demo store. Register'); 
    
    // Element is visible
    const pageimg =page.getByAltText('nopCommerce demo store');
    await expect(pageimg).toBeVisible();
    
    // Element is enabled
    const searchfield=await page.locator('#small-searchterms');
    await expect(searchfield).toBeEnabled();
    const radiobtn=await page.locator('#gender-male');
    radiobtn.click();
    
    // Checkbox is checked
    await expect(radiobtn).toBeChecked();
    
    // Element has a DOM attribute
    const firstnamefield = page.locator('#FirstName');                           // used css
    await expect(firstnamefield).toHaveAttribute('name', 'FirstName');
    await page.fill('#FirstName','Giri');

    // Input has a value
    await expect(firstnamefield).toHaveValue('Giri');
    
    // List has exact number of children
    const months = await page.locator('select[name="DateOfBirthMonth"]');
    await expect(months).not.toHaveCount(11);
    
    await page.getByRole('button',{type:'submit'})
    await page.getByRole('link',{name:'Electronics '}).hover();
    await page.getByRole('link', { name: 'Camera & photo' }).click();

    //	Element matches text
    const camheading = page.locator('div[class="page-title"] h1');                                       //Used xpath
    await expect(camheading).toHaveText('Camera & photo');

    //await expect.soft(await page.locator('div[class="page-title"] h1')).toHaveText('Camera & photo');
    
    // Element contains text
    await expect(await page.getByText('Categories')).toContainText('Cat');

    //await page.pause(); 
    


   
})






