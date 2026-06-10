/**
 * Author: Sebastian Frie
 * Purpose: A simple Playwright test to demonstrate how to use Playwright with TypeScript.
 * Date of creation: 2024-06-05
 * Note: Open browser, go to specific site, close browser again
 */

import { chromium } from '@playwright/test';

(async () => {
    const browser = await chromium.launch({headless: false});
    const page = await browser.newPage();

    await page.goto('https://www.google.com');
    await page.waitForTimeout(3000);
    await browser.close();
})();