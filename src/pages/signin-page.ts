/** 
 * Author: Sebastian Frie
 * Purpose: Page object for Product Page interactions. 
*/

import { expect } from '@playwright/test';

export class SignInPage {
    private page: any;
    
    constructor(page: any) {
        this.page = page;
    }

    async checkSigninPageOpened(){
        await expect(this.page).toHaveURL(/signin/i);
    }
}