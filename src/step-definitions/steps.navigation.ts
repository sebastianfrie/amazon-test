/** 
 * Author: Sebastian Frie
 * Purpose: Test steps for navigation-related actions
*/

import { Given } from '@cucumber/cucumber';
import { When } from '@cucumber/cucumber';
import type { TestWorld } from '../support/world.ts';

Given('Google Chrome is started', async function (this: TestWorld) {
    // Browser is already started in hooks.ts
});

Given('Amazon is opened', async function (this: TestWorld) {
    await this.landingPage.openAmazon();              
    await this.landingPage.rejectCookies();    
});

When('the user opens the basket', async function (this: TestWorld) {
    await this.searchResultPage.openBasket();   
});

