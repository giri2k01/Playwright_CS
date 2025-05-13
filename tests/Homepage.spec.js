let {test,expect}=require('@playwright/test')  
/*import {test,expect} from '@playwright/test'     //importing test & exepct from playwright/test
const playwrightTest = require('@playwright/test');
console.log(playwrightTest);*/

test('Home page', async ({ page }) =>{                    //makes a program return a promise //Home page is the name of the test // {}=> is the declaration of ananiomus function //page is a fixture
 await page.goto('https://letcode.in')                 //makes the func wait for the promise(wait until the page is loaded)
 await page.setViewportSize({ width: 1920, height: 1080 })
 await page.click('id=testing')
 await page.locator('a[href="/edit"]').click();
 const pagename = await page.locator('//h1[contains(text(),"Input")]')
 await expect(pagename).toBeVisible()
 await page.fill('xpath=//*[@id="fullName"]','Giridharan')
 const fields = await page.$$('xpath=//div[@class="field"]')
//await page.fill('xpath=//*[@id="fullName"]', 'Giri');  // Using XPath with page.fill
//const fields = await page.$$('xpath=//div[@class="field"]');  // Using XPath with page.$$
for(const field of fields ){
    const res = await field.textContent()
    console.log(res)
}
await page.goto('https://letcode.in')  
 
 //var pagetitle = page.title();
 //console.log('pagetitle:',pagetitle );
 //await expect(page).toHaveTitle('Google');
 //const ppgeurl = page.url();
 //page.close();
})


