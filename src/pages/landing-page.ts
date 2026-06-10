/** 
 * Author: Sebastian Frie
 * Purpose: Page object for Product Page interactions. 
*/

import type { Locator } from "@playwright/test";
import { normalizePrice } from '../support/tool.ts';

export class LandingPage {
    private page: any;
    
    constructor(page: any) {
        this.page = page;
    }

    async openAmazon() {
        await this.page.goto('https://www.amazon.de');                                      // Navigate to Amazon Germany
    }

    async rejectCookies() {
        const rejectButton = this.page.locator('#sp-cc-rejectall-link');                    // locate the cookie consent reject button
    
        try {
            await rejectButton.waitFor({ state: 'visible', timeout: 10000 });               // Wait for the button to be visible
            await rejectButton.click();                                                     // Click the reject button
        }
        catch {}
    }

    async searchForProduct(productName: string){
        await this.page.fill('#twotabsearchtextbox', productName);					        // fill search box with product name
  	    await this.page.press('#twotabsearchtextbox', 'Enter');						        // submit search 
        
    }

    async getSearchResultsLoc() : Promise<Locator> {
        const cards =  this.page.locator('[data-component-type="s-search-result"]');        // locate each search result   
        await cards.first().waitFor();												        // wait for first search result to load
        return cards;          
    }

    async getSearchResultTitle(searchResult: Locator) : Promise<string>{
        let productTitle = "";
        if(await searchResult.locator('h2 span').count() > 0){                                          // if title element is available
            productTitle = (await searchResult.locator('h2 span').textContent())?.trim() ?? '';         // get title of product
        }
        return productTitle;
    }

    // return true if a addToCart button is available on the search result, otherwise false
    async addToCartAvailable(searchResult: Locator) : Promise<boolean>{
        if(await searchResult.locator('button[name="submit.addToCart"]').count() > 0){
            return true;
        }
        else { return false; }
    }

    // check, if price information is available and return the normalized number
    async getNormalizedSearchResultPrice(searchResult: Locator) : Promise<number>{
        let searchResultPrice = -1;
        let productPriceWhole = null;			
		let productPriceFraction = null;

        if(await searchResult.locator('.a-price-whole').count() > 0 
        && await searchResult.locator('.a-price-fraction').count() > 0) {							    // check if price elements are available

            productPriceWhole = await searchResult.locator('.a-price-whole').textContent();			    // get price info of product
            productPriceFraction = await searchResult.locator('.a-price-fraction').textContent();	    // get price info of product
            
            if(productPriceWhole && productPriceFraction) {											    // if price info is available
                searchResultPrice = normalizePrice(`${productPriceWhole}${productPriceFraction}`);
            }
        }
        return searchResultPrice;
    }

    async addSearchResultToCart(searchResult: Locator){
        await searchResult.locator('button[name="submit.addToCart"]').click();
    }
}
