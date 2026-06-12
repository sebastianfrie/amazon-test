/** 
 * Author: Sebastian Frie
 * Purpose: Test steps for basket-related actions
*/

import { When } from '@cucumber/cucumber';
import { Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import type { TestWorld } from '../support/world.ts';

Then('the basket total equals the sum of product prices in the basket', async function (this: TestWorld) {

    const items = await this.basketPage.getBasketItemsLoc();

    let itemPrice = -1;                                         // price of current item in loop
    let manualSum = 0;                                          // manual calculation of total price
    let basketSum = -1;                                         // total price from basket
    
    // sum the prices of all basket items manually
    for (const item of items) {
        
        itemPrice = await this.basketPage.getItemPrice(item);                                                                 

        if(itemPrice != -1){  
                manualSum += itemPrice;
        }
        else
        {
            throw new Error(`Price extraction of item failed.`);  
        }
    }
  
    basketSum = await this.basketPage.getTotalPrice();          // get basket sum from page

    if(basketSum != -1)
    {
        expect(basketSum).toBe(manualSum);                      // compare manual calculation with total price from basket
    }
    else
    {
        throw new Error(`Price extraction of item failed.`); 
    }
});

When('the user proceeds to checkout', async function (this: TestWorld) {
    await this.basketPage.gotoCheckout();
});

Then('the user is redirected to the login or registration page', async function (this: TestWorld) {
    await this.signInPage.checkSigninPageOpened();
});