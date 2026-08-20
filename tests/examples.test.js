import { describe, it, expect, test } from 'vitest';
import { longestString, isPrime } from '../src/examples.js';

describe('examples.longestString', () => {
  test('returns the longest string', () => {
    const longest = longestString('pikachu', 'snorlax');

    expect(longest).toBe('pikachu');
  });

  it('returns the first string when both are of equal length', () => {
    expect(longestString('ditto', 'pidgy')).toBe('ditto');
  });

  it('it handles empty strings', () => {
    expect(longestString('', 'mario')).toBe('mario');
    expect(longestString('luigi', '')).toBe('luigi');
    expect(longestString('', '')).toBe('');
  });

  it('ignores leading/trailing whitespace', () => {
    expect(longestString('   ash  ', 'misty')).toBe('misty');
  });
});

describe('examples.isPrime', () => {
  it('returns true/truthy for small prime numbers', () => {
    expect(isPrime(2)).toBe(true);
    expect(isPrime(3)).toBe(true);
    expect(isPrime(5)).toBeTruthy();
  });

  it('returns false/falsy for non-prime numbers', () => {
    expect(isPrime(1)).toBe(false);
    expect(isPrime(0)).toBe(false);
    expect(isPrime(4)).toBeFalsy();
  });

  it('matches results in an array using toEqual', () => {
    const numbers = [2, 3, 4, 5];
    const results = numbers.map(isPrime);

    expect(results).toEqual([true, true, false, true]);
  });

  it('detects primes within a filtered list', () => {
    const nums = [1, 2, 3, 4, 5, 6, 7];
    const primes = nums.filter(isPrime);

    expect(primes).toContain(7);
    expect(primes).not.toContain(4);
  });

  it('throws an error for non-numbers', () => {
    const badCall = () => isPrime('pikachu');

    expect(badCall).toThrow();
    expect(badCall).toThrow('Input must be a number');
  });

  it('has correct type for result', () => {
    expect(isPrime(7)).toBeTypeOf('boolean');
    expect(typeof isPrime(8)).toBe('boolean');
  });
});
