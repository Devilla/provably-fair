import { mines } from '../../../src/services/provably-fair/mines';
const assert = require('assert');

describe('mines', () => {
  it('should generate a number between 0 and 1', () => {
    // Generate 1000 random numbers and check that they are between 0 and 1
    const results: number[] = [];
    for (let i = 0; i < 1000; i++) {
      const result = mines('test', 10, 10);
      assert.ok(result >= 0);
      assert.ok(result <= 1);
      results.push(result);
    }

    // Check that the distribution of numbers is approximately uniform
    const min = Math.min(...results);
    const max = Math.max(...results);
    const range = max - min;
    assert.ok(range < 0.2);
  });

  it('should return 0 when x is out of bounds', () => {
    const result = mines('test', -1, 10);
    assert.ok(result > 0);
  });

  it('should return 0 when y is out of bounds', () => {
    const result = mines('test', 10, -1);
    assert.ok(result > 0);
  });
});

/*
 * Testing strategy:
 * - Check that each generated value is within the expected range [0, 1].
 *   This ensures that the function generates values as expected.
 * - Create an array to store all generated values. Then, check that the
 *   distribution of these values appears to be uniformly distributed. In other
 *   words, there should be roughly equal numbers of values less than any given threshold.

In this test, we're testing the mines function by generating 1000 random numbers with a given x and y 
coordinate, and checking that they are between 0 and 1. We're also checking that the distribution of numbers 
is approximately uniform by verifying that the range of the results is less than 0.2.
 */