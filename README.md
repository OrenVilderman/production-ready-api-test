# production-ready-calculator-api
This is a sample project of how to create a production ready serverless api with compile tests

## Server Status
[![`Netlify` Status](https://api.netlify.com/api/v1/badges/9d03ef8a-c8a3-4cfd-b2e4-225d3cf4d5f0/deploy-status)](https://app.netlify.com/sites/production-ready-calculator/deploys)
[![`Calculator` Status](https://img.shields.io/website?logo=netlify&up_color=grass&up_message=online&url=https%3A%2F%2Fproduction-ready-calculator-api.netlify.app%2F)](https://production-ready-calculator-api.netlify.app/)


## GitHub Repository
[![`GitHub`](https://img.shields.io/github/package-json/v/OrenVilderman/production-ready-calculator-api?logo=github)](https://github.com/OrenVilderman/production-ready-calculator-api.git)
[![Tests](https://github.com/OrenVilderman/production-ready-calculator-api/actions/workflows/test.yml/badge.svg)](https://github.com/OrenVilderman/production-ready-calculator-api/actions/workflows/test.yml)

## Installation
Install by running 
```
npm install
```

## Start the server with debug* (Optional to use F5 before running the script)
Start the server by running:
``` 
npm start
```
Start with nodemon by running:
``` 
npm run start-dev
```

## Start the server with the netlify runner in dev mode (Debug is also optional here with F5)
Start the tests by running:
``` 
npm run dev
```

## Start the jest coverage tests
Start the tests by running:
``` 
npm test
```

# API Design Documentation
`/api/V0.1`
## POST
`POST /api/V0.1/calculate`
### Query Parameters
- **non**
### Body
- **non**
### Response
- **TEXT** - Text contain the result of the calculation
### Errors
- **404** - Not Found - With information about the uri and method used
- **500** - Internal Server Error - With text "Oops, something went wrong..."
### Example Request
```typescript
request({
  method: 'POST',
  url: 'https://production-ready-calculator-api.netlify.app/api/V0.1/calculate',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    firstNumber: 2,
    secondNumber: 6,
    operator: '+'
  },
});
```
### Example Response
`200 OK`
```text
8
```

## Unit tests cover status
<img alt="Image_Of_Unit_Tests_Cover_Report" src="images\Unit_Tests_Cover.png" style="min-width:800px; width:1200px;"/>

## Pull Request / Contribute
PRs are only possible from a separate branch.

Before submitting a PR please validate lint, unit tests, test cover and version update:
- You should fix linting issues by running `npm run fix-lint` - Make sure to fix every error or warning.
- You should run unit tests by running `npm test` - Make sure that all the tests pass.
- The test coverage should remain at **100%** : `100% Statements 70/70 | 100% Branches 12/12 | 100% Functions 9/9 | 100% Lines 65/65` - Make sure to add tests if needed.
- **Always** increment* the version, according to the specifications below.

## Versions
Run `npm version patch` in cases of bug fixes and small modifications.

Run `npm version minor` in cases of functionality **non-breaking** changes.

Run `npm version major` in cases of important functionality or any **breaking** changes.
