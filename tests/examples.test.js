import { describe, it, test, expect } from 'vitest';
import { longestString, isPrime, shippingCost } from '../src/examples.js';

// describe a test suite (groups related tests)
describe('examples.longestString', () => {
  // 'it' defines a single test case
  it('returns the longer string', () => {
    // const longest = longestString('pikachu', 'snorlax')
    // expect(longest).toBe('pikachu')

    expect(longestString('pikachu', 'snorlax')).toBe('pikachu');
  });

  // 'test' is an alias of 'it'
  test('returns the first string when both are of equal length', () => {
    expect(longestString('ditto', 'pidgy')).toBe('ditto');
  });

  // testing edge cases
  it('handles empty strings', () => {
    expect(longestString('', 'mario')).toBe('mario');
    expect(longestString('luigi', '')).toBe('luigi');
    expect(longestString('', '')).toBe('');
  });

  // other edge cases (a chance to refactor the function)
  it('ignores leading/trailing whitespace', () => {
    expect(longestString('  ash  ', 'misty')).toBe('misty');
  });
});

// test suite for isPrime
describe('examples.isPrime', () => {
  // 0 and 1 are not prime and 2 is the only even prime
  it('treats 0 and 1 as non-prime, and 2 as prime', () => {
    expect(isPrime(0)).toBe(false);
    expect(isPrime(1)).toBe(false);
    expect(isPrime(2)).toBe(true);
  });

  // even numbers greater than 2 are not prime
  it('retruns false all even numbers > 2', () => {
    expect(isPrime(4)).toBe(false);
    expect(isPrime(10)).toBe(false);
    expect(isPrime(100)).toBe(false);
  });

  // test some common primes
  it('identifies common primes', () => {
    expect(isPrime(3)).toBe(true);
    expect(isPrime(5)).toBe(true);
  });

  // perfect-squares are not prime (tests loop logic)
  it('returns false for perfect squares reliably', () => {
    expect(isPrime(49)).toBe(false);
    expect(isPrime(121)).toBe(false);
  });

  // check for non-integers
  it('returns false for non-integers', () => {
    expect(isPrime(2.5)).toBe(false);
  });

  // throw error for non-number input
  it('throws an error for non-number inputs', () => {
    const badCall = () => isPrime('pikachu');

    expect(badCall).toThrow();
  });
});

describe('examples.shippingCost', () => {
  // too loose example: passes for wrong prices
  it('returns a number', () => {
    expect(shippingCost(2)).toBeTypeOf('number');
  });

  // better: test exact prices for interior weights
  it('charges correct prices for interior weights', () => {
    expect(shippingCost(0.5)).toBe(3.99);
    expect(shippingCost(3)).toBe(5.99);
    expect(shippingCost(10)).toBe(8.99);
    expect(shippingCost(50)).toBe(14.99);
  });

  // boundary testing: test boundaries of each tier
  it('charges correct prices at boundaries', () => {
    expect(shippingCost(1)).toBe(3.99); // upper bound of first tier
    expect(shippingCost(5)).toBe(5.99); // upper bound of second tier
    expect(shippingCost(20)).toBe(8.99); // upper bound of third tier
    expect(shippingCost(21)).toBe(14.99); // above third tier
  });

  // test valid coupon behavior
  it('applies FREESHIPPING coupon exactly', () => {
    expect(shippingCost(1, 'FREESHIPPING')).toBe(0);
    expect(shippingCost(21, 'FREESHIPPING')).toBe(0);
  });

  // test non-matching coupon behavior
  it('ignores non-matching coupons', () => {
    expect(shippingCost(1, 'freeshipping')).toBe(3.99);
    expect(shippingCost(1, 'NOTHING')).toBe(3.99);
    expect(shippingCost(1)).toBe(3.99);
  });

  // test invalid weight inputs
  it('throws an error for invalid weights', () => {
    // too tight
    // expect(() => shippingCost(0)).toThrow(/the weight must be greater than 0/i)

    // better: flexible error message matching
    expect(() => shippingCost(0)).toThrow(/(?=.*weight)(?=.*0)/i);
    expect(() => shippingCost(-5)).toThrow(/(?=.*weight)(?=.*0)/i);
    expect(() => shippingCost('2')).toThrow(/(?=.*weight)(?=.*number)/i);
  });

  // test invalid coupon inputs
  it('throws when coupon is not a string', () => {
    expect(() => shippingCost(1, 123)).toThrow(/coupon/i);
    expect(() => shippingCost(1, null)).toThrow(/coupon/i);
  });
});
