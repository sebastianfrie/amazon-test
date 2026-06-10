/** 
 * Author: Sebastian Frie
 * Purpose: Container for test case data
*/
import { setWorldConstructor, World } from '@cucumber/cucumber';
import type { Browser, BrowserContext, Page } from 'playwright';

import { LandingPage } from '../pages/landing-page.ts';
import { SearchResultPage } from '../pages/search-result-page.ts';
import { SignInPage } from '../pages/signin-page.ts';
import { BasketPage } from '../pages/basket-page.ts';

export class TestWorld extends World {
    browser!: Browser;
    context!: BrowserContext;
    page!: Page;

    landingPage!: LandingPage;
    searchResultPage!: SearchResultPage;
    signInPage!: SignInPage;
    basketPage!: BasketPage;
}

setWorldConstructor(TestWorld);