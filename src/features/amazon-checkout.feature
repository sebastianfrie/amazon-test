 # Author: Sebastian Frie
 # Purpose: Validate checkout on amazon

 Feature: Amazon checkout
 
    Scenario: Redirect unauthenticated users to login during checkout

        Given Google Chrome is started
        And Amazon is opened
        And the user adds the cheapest "Snickers" product to the basket
        And the user adds the cheapest "Skittles" product to the basket
        And the user opens the basket

        When the user proceeds to checkout

        Then the user is redirected to the login or registration page