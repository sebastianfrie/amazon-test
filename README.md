# amazon-test
Amazon Test Automation Project
===============================

Overview
--------
This project is a web test automation framework built to validate key user flows on an Amazon-like e-commerce page.

It is implemented using Playwright, Cucumber (BDD), and Node.js (NodeNext module system).

The main goal is to demonstrate scalable, maintainable, and cross-platform UI test automation following best practices such as DRY principles and Page Object Model (POM).

------------------------------------------------------------

Test Scenario
-------------
The automated test covers the following business scenario:

As a new Amazon user, the test performs the following steps:
- Search for the cheapest Snickers and Skittles products
- Add the cheapest items to the basket
- Validate that the basket total is calculated correctly
- Proceed to checkout and verify that without an account the user is redirected to the registration page

------------------------------------------------------------

Tech Stack
----------
- Playwright (browser automation)
- Cucumber (BDD / Gherkin syntax)
- Node.js (NodeNext module system)
- TypeScript
- Cross-platform execution support (Windows, macOS, Linux via Chrome driver abstraction)

------------------------------------------------------------

Project Structure
-----------------
Amazon-Test/
- reports/
  - json/
  - html/

- src/
  - features/          (Gherkin feature files)
  - pages/             (Page Object Models)
  - step-definitions/  (Cucumber step implementations)
  - support/           (Hooks, setup, utilities)

- package.json
- tsconfig.json

------------------------------------------------------------

Installation
------------
Install all dependencies:
npm install

Install Playwright browsers:
npx playwright install --with-deps

------------------------------------------------------------

How to Run Tests
----------------
Execute the full test suite and generate a report:

npm run amazon-tests:report

------------------------------------------------------------

Reporting
---------
After execution, reports are generated in the following locations:

JSON Report:
reports/json

HTML Report:
reports/html

The reports include:
- Test execution results
- Step-by-step execution details
- Failure analysis information

------------------------------------------------------------

Design Principles
------------------
This framework follows modern test automation principles:

Page Object Model (POM):
UI selectors and actions are centralized in page classes to improve maintainability and reusability.

DRY Principle:
Reusable methods and steps are implemented to avoid duplication.

BDD Approach:
Tests are written in Gherkin language to ensure readability for both technical and non-technical stakeholders.

Scalability:
The structure supports easy extension for additional test scenarios and user flows.

------------------------------------------------------------

Cross-Platform Support
----------------------
The project is designed to run on:

- Windows
- macOS
- Linux

Chrome-based execution is handled via Playwright’s browser abstraction layer.

------------------------------------------------------------

Notes for Reviewers
--------------------
- The framework is designed for extensibility and real-world test automation use cases
- Focus is placed on maintainability, readability, and scalability
- The test suite is modular and can easily be extended with additional scenarios

------------------------------------------------------------

Execution Command Summary
------------------------
Run full test suite with report:

npm run amazon-tests:report
