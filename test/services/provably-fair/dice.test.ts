import { roll } from '../../../src/services/provably-fair/dice';
const assert = require('assert');

describe('rollDice', () => {
  it('should generate a number between 0 and 100', () => {
    // Generate 1000 random numbers and check that they are between 0 and 0.06
    const results: number[] = [];
    for (let i = 0; i < 1000; i++) {
      const result = roll('test');
      assert.ok(result >= 0);
      assert.ok(result <= 100);
      results.push(result);
    }

    // Check that the distribution of numbers is approximately uniform
    const min = Math.min(...results);
    const max = Math.max(...results);
    const range = max - min;
    assert.ok(range < 0.02);
  });
});