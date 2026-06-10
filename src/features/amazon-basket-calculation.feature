 # Author: Sebastian Frie
 # Purpose: Validate basket calculation on amazon

 Feature: Amazon basket calculation

    Scenario: Verify basket total for the cheapest Snickers and Skittles products

        Given Google Chrome is started
        And Amazon is opened
        And the user adds the cheapest "Snickers" product to the basket
        And the user adds the cheapest "Skittles" product to the basket

        When the user opens the basket

        Then the basket total equals the sum of product prices in the basket