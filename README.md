# production-ready-calculator-api
This is a sample project of how to create a production ready serverless api with compile tests

## Server Status
[![Netlify Status](https://api.netlify.com/api/v1/badges/9d03ef8a-c8a3-4cfd-b2e4-225d3cf4d5f0/deploy-status)](https://app.netlify.com/sites/production-ready-calculator/deploys)

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
- **TEXT** - Text contian the result of the calculation
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

## Unit tests cover status:
<img alt="Image_Of_Unit_Tests_Cover_Report" src="images\Unit_Tests_Cover.png" style="max-width:750px;"/>
