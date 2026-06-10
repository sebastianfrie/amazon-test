/** 
 * Author: Sebastian Frie
 * Purpose: Page object for Product Page interactions. 
*/

import type { Locator, Page } from "@playwright/test";
import { normalizePrice } from '../support/tool.ts';

export class BasketPage {
    private page: any;
    
    constructor(page: any) {
        this.page = page;
    }

    // get locators to items in basket
    getBasketItemsLoc() : Promise<Locator[]> {
        return this.page.locator('.sc-list-item-content').all();            
    }

    // get price of item, needs to be normalized before comparison with total price from basket
    async getItemPrice(item: Locator) : Promise<number> {                               
        let itemPriceText = "";
        let itemPriceNumber = 0;

        if(await item.locator('.sc-product-price').count() > 0){                                    // if price element is available
            itemPriceText = (await item.locator('.sc-product-price').allTextContents())[0] ?? '';   // get price information
            if(itemPriceText){
                itemPriceNumber = normalizePrice(itemPriceText);                                    // convert to number
            } 
        }
        return itemPriceNumber;
    }

    // get total price of basket
    async getTotalPrice() : Promise<number>{
        let totalPriceText = "";
        let totalPriceNumber = 0;
        
        if(await this.page.locator('.sc-subtotal-amount-activecart').count() > 0 ) {                            // if total price element is available
            totalPriceText = await this.page.locator('.sc-subtotal-amount-activecart').textContent() ?? '';     // get total price information
            if (totalPriceText) {
                totalPriceNumber = normalizePrice(totalPriceText);                                              // convert to number
            }
        }
        return totalPriceNumber;
    }

    // go to check out
    async gotoCheckout(){
        await this.page.locator('#sc-buy-box-ptc-button').click();
    }

}