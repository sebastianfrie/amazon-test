/** 
 * Author: Sebastian Frie
 * Purpose: Page object for Product Page interactions. 
*/

export class SearchResultPage {
    private page: any;
    
    constructor(page: any) {
        this.page = page;
    }

    async openBasket(){
        await this.page.evaluate(() => window.scrollTo(0, 0));          // auto scoll of .click() not working, scroll manually to top of page before clicking on basket
        await this.page.locator('#nav-cart').click();                   // click on basket
        await this.page.locator('#sc-active-items-header').waitFor();   // wait for basket page to load
    }


}