const test = require('tape');
const { callbackify } = require('..');

test('test callbackify for a normal function', t => {
  t.plan(3);

  const lambda = (event, context, callback) => callback(null, true);

  const transformed = callbackify(lambda);

  t.equal(transformed, lambda);

  transformed({}, {}, (err, result) => {
    t.error(err);
    t.ok(result);
  });
});

test('test callbackify for an async function', t => {
  t.plan(4);

  const lambda = async (event, context) => true;

  const transformed = callbackify(lambda);

  t.notEqual(transformed, lambda);
  t.equal(transformed.length, 3);

  transformed({}, {}, (err, result) => {
    t.error(err);
    t.ok(result);
  });
});
