/** 
 * Author: Sebastian Frie
 * Purpose: Test steps for product-related actions
*/
import { Given } from '@cucumber/cucumber';
import type { TestWorld } from '../support/world.ts';

// search for given productName
// get all prices of products on result page 01 only
// add the cheapest of this page to basket
// only consider products which contains the search term in the title
// only consider products which can directly be added to the basket
Given('the user adds the cheapest {string} product to the basket', async function (this: TestWorld, productName: string) {

	let cheapestPrice = -1;				// price of cheapest product		
	let indexCheapest = -1;				// index of cheapest product in cards

	await this.landingPage.searchForProduct(productName);
	const cards = await this.landingPage.getSearchResultsLoc();			
	const noOfCards = await cards.count();							

	for (let i = 0; i < noOfCards; i++) {																	
		let productTitle = "";			
		
		process.stdout.write(`\r\tChecking result ${i + 1}/${noOfCards} for product ${productName}...`);	// log progress, avoid timeout		
		if(i === noOfCards - 1) { process.stdout.write(`\n`); }												// log completion of loop

		const card = cards.nth(i);
		productTitle = await this.landingPage.getSearchResultTitle(card);								
	

		if(productTitle && productTitle.toLowerCase().includes(productName.toLowerCase())) {				// only consider products that includes the search term
			
			if(await this.landingPage.addToCartAvailable(card)) {											// only consider products that can directly be added to basket
																	
				const normalizedPrice = await this.landingPage.getNormalizedSearchResultPrice(card);					
					
				if(cheapestPrice === -1 || normalizedPrice > -1 && normalizedPrice < cheapestPrice) {		// check, if current product is the cheapest			
					cheapestPrice = normalizedPrice;
					indexCheapest = i;
				}   		
			}		
		}
	}

	if(indexCheapest != -1) {
		await this.landingPage.addSearchResultToCart(cards.nth(indexCheapest));
	}
});