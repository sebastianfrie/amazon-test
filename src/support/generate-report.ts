/** 
 * Author: Sebastian Frie
 * Purpose: Generates an HTML report from Cucumber JSON reports using the multiple-cucumber-html-reporter package
*/

import * as report from 'multiple-cucumber-html-reporter';

report.generate({
    jsonDir: 'reports/json',
    reportPath: 'reports/html',
    displayDuration: true,
    metadata: {
        browser: {
            name: 'chromium',
            version: 'unknown'
        },
        platform: {
            name: process.platform,
            version: process.version
        }
    }
});