/** 
 * Author: Sebastian Frie
 * Purpose: Initializes and disposes Playwright browser, context, and page before and after each test scenario
*/
import { Before, After } from '@cucumber/cucumber';
import { setDefaultTimeout } from '@cucumber/cucumber';
import { chromium } from 'playwright';
import type { TestWorld } from './world.ts';
import { LandingPage } from '../pages/landing-page.ts';
import { BasketPage } from '../pages/basket-page.ts';
import { SignInPage } from '../pages/signin-page.ts';
import { SearchResultPage } from '../pages/search-result-page.ts';

const isDebugMode = process.env.DEBUG === 'true';                   // check if debug mode is enabled via environment variable
setDefaultTimeout(isDebugMode ? 60 * 60 * 1000 : 30 * 1000);        // set default timeout to 60 minutes in debug mode for better visibility of test execution, otherwise set to 30 seconds

Before(async function (this: TestWorld) {
    console.log('Start scenario');                                  // log message to indicate start of test
    this.browser = await chromium.launch({ headless: false });      // launch chromium browser in headed mode for better visibility of test execution
    this.context = await this.browser.newContext();                 // create new browser context for test isolation
    this.page = await this.context.newPage();                       // create new page in browser context for test isolation

    this.landingPage = new LandingPage(this.page);                  // initialize landing page object with current page
    this.searchResultPage = new SearchResultPage(this.page);        // initialize search result page object with current page
    this.signInPage = new SignInPage(this.page);                    // initialize sign in page object with current page
    this.basketPage = new BasketPage(this.page);                    // initialize basket page object with current page
});

After(async function (this: TestWorld) {
    await this.page?.close();                                       // close page after each scenario to free up resources
    await this.context?.close();                                    // close browser context after each scenario to free up resources
    await this.browser?.close();                                    // close browser after each scenario to free up resources
    console.log('End scenario');                                    // log message to indicate end of test
});