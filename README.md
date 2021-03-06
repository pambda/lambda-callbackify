# lambda-callbackify

Callbackify for AWS Lambda.

## Installation

```
npm i lambda-callbackify
```

## Usage

``` javascript
const { callbackify } = require('lambda-callbackify');

const asyncFunctionLambda = async (event, context) => {
  // Do something.
};

// This lambda has 3 arguments.
const callbackStyleLambda = callbackify(asyncFunctionLambda);

// This lambda is equaivalent to an original lambda.
const callbackStyleLambda2 = callbackify(callbackStyleLambda);
```

## callbackify(lambda)

Transform a lambda of an async function to a callback style lambda.

This function is different to [util.callbackify](https://nodejs.org/api/util.html#util_util_callbackify_original) with following:

- Support lambda only.
- If the transformation is not needed, an original lambda is returned.

## License

MIT
