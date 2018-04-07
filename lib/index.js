const callbackify = lambda => {
  if (lambda.length === 3) {
    return lambda;
  } else {
    return (event, context, callback) =>
      lambda(event, context)
        .then(result => callback(null, result), callback);
  }
};

/*
 * Exports.
 */
exports.callbackify = callbackify;
