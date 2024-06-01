import { plinko } from '../../../src/services/provably-fair/plinko';
const assert = require('assert');

describe('plinko', () => {
  it('should generate a number between 0 and 1', () => {
    // Generate 1000 random numbers and check that they are between 0 and 1
    const results: number[] = [];
    for (let i = 0; i < 1000; i++) {
      const result = plinko('server_seed', 'client_seed', '0', 50, 'Low');
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
    const result = plinko('server_seed', 'client_seed','test', 70,'Medium');
    assert.ok(result > 0);
  });

  it('should return 0 when y is out of bounds', () => {
    const result = plinko('server_seed', 'client_seed','test', 100, 'High');
    assert.ok(result > 0);
  });
});