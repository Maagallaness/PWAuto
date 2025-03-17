# Playwright TypeScript Automation Framework

## Overview
This project is a Playwright automation framework built with TypeScript. It provides a structured approach to writing and organizing tests for web applications using Playwright's powerful API.

## Project Structure
```
playwright-ts-framework
├── src
│   ├── tests
│   │   └── example.spec.ts
│   ├── helpers
│   │   └── utils.ts
│   └── types
│       └── index.ts
├── playwright.config.ts
├── package.json
├── tsconfig.json
└── README.md
```

## Setup Instructions

1. **Clone the Repository**
   ```bash
   git clone <repository-url>
   cd playwright-ts-framework
   ```

2. **Install Dependencies**
   Make sure you have Node.js installed. Then run:
   ```bash
   npm install
   ```

3. **Run Tests**
   To execute the tests, use the following command:
   ```bash
   npx playwright test
   ```

## Usage
- The test cases are located in the `src/tests` directory. You can create new test files following the naming convention `*.spec.ts`.
- Utility functions can be added to `src/helpers/utils.ts` for reuse across tests.
- Custom types and interfaces can be defined in `src/types/index.ts` to enhance type safety.

## Configuration
- The Playwright configuration can be found in `playwright.config.ts`. You can adjust settings such as test directory, timeout values, and browser options as needed.
- TypeScript configuration is managed in `tsconfig.json`, where you can specify compiler options.

## Contributing
Feel free to submit issues or pull requests to improve the framework. Contributions are welcome!

## License
This project is licensed under the MIT License.