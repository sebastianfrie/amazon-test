# Amazon Test Automation Challenge

## Task
Set Up a Web Testing Project for Chrome that executes the following Test Case.

As a new Amazon user, I want to search for the cheapest Snickers and Skittles on the page. Add the cheapest ones to your Basket and check if the basket calculates the result correctly. Check if on Checkout, without an account, the user gets redirected to the registration page.
Additional conditions:
-	Document your project so a customer can use it without a personal ramp-up. (Readme.md)
-	To formulate the Test Case, please use a descriptive Language that can be exported for automated Test Reporting. (preferred: “Cucumber
-	Please write the Test as generic as possible to expand the Testsuite using the DRY-Principle.
-	Multiple OS Drivers should be included (Windows, Linux MacOS)

-	Time Limit: 3 Days


## Solution

### Test Scenarios
The automated test suite covers two business scenarios for a new Amazon user:

Scenario 1: Basket Total Calculation
  Search for the cheapest Snickers and Skittles products
  Add the cheapest items to the basket
  Validate that the basket total is calculated correctly

Scenario 2: Checkout Redirection
  Search for the cheapest Snickers and Skittles products
  Add the cheapest items to the basket
  Proceed to checkout without being logged in
  Verify that the user is redirected to the registration/sign-in page

### Tech Stack
- Playwright (browser automation)
- Cucumber (BDD / Gherkin syntax)
- Node.js (NodeNext module system)
- TypeScript
- Cross-platform execution support (Windows, macOS, Linux via Chrome driver abstraction)

### Sources
Amazon-Test/
- src/
  - features/          (Gherkin feature files)
  - pages/             (Page Object Models)
  - step-definitions/  (Cucumber step implementations)
  - support/           (Hooks, setup, utilities)

#### Installation
Download and Install VS Code on your system https://code.visualstudio.com/
Download and Install Node.js on your System https://nodejs.org/en

1 Clone repository  
Click on "Clone Git Repository" and enter the following adress: https://github.com/sebastianfrie/amazon-test.git

2 Open the cloned repository in VS Code  
Click on "Open" and choose the cloned repository "amazon-test"

3 Open VS Code terminal  
Menu View->Terminal

3 Install all dependencies   
```bash
 npm install 
```
4 Install Playwright browsers:  
```bash
npx playwright install --with-deps
```
After installation is done, continue with the steps below "How to Run Tests"


#### How to Run Tests
Execute the full test suite and generate and open a report:

1 Run Tests  
```bash
npm run amazon-tests:report
```
2 After finished test run, open the report  
```bash
open reports/html/index.html
```

### Reporting
After execution, reports are generated in the following locations:

JSON Report:
reports/json

HTML Report:
reports/html

The reports include:
- Test execution results
- Step-by-step execution details
- Failure analysis information

Open the html report by using the following command:  
```bash
open reports/html/index.html
```

### Cross-Platform Support
The project is designed to run on:

- Windows
- macOS
- Linux

Chrome-based execution is handled via Playwright’s browser abstraction layer.