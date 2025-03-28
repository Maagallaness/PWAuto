Ya llegó Katia jijij








### Running the Example Test
By default tests will be run on all 3 browsers, Chromium, Firefox and WebKit using 3 workers. This can be configured in the playwright.config file. Tests are run in headless mode meaning no browser will open up when running the tests. Results of the tests and test logs will be shown in the terminal.

npx playwright test


### HTML Test Reports
After your test completes, an HTML Reporter will be generated, which shows you a full report of your tests allowing you to filter the report by browsers, passed tests, failed tests, skipped tests and flaky tests. You can click on each test and explore the test's errors as well as each step of the test. By default, the HTML report is opened automatically if some of the tests failed.

npx playwright show-report

### Running the Example Test in UI Mode
Run your tests with UI Mode for a better developer experience with time travel debugging, watch mode and more.

npx playwright test --ui

### Updating Playwright
To update Playwright to the latest version run the following command:

npm install -D @playwright/test@latest
# Also download new browser binaries and their dependencies:
npx playwright install --with-deps