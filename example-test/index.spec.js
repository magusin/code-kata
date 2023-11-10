const index = require('./index.js');

test('compute returns minus one', () => {
    expect(index.compute(2)).toBe(1);
  });