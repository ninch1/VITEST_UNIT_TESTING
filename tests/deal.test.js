import { describe, it, expect } from 'vitest';
import { createCards } from '../src/createCards';
import { deal } from '../src/deal';

describe('deal', () => {
  const suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
  const values = [
    'Ace',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    'Jack',
    'Queen',
    'King',
  ];

  it('deals the correct number of hands', () => {
    const cards = createCards({ suits, values });
    const hands = deal(cards, 5, 3);

    expect(hands).toHaveLength(3);
  });

  it('deals each hand the correct number of cards', () => {
    const cards = createCards({ suits, values });
    const hands = deal(cards, 7, 4);

    expect(hands[0]).toHaveLength(7);
    expect(hands[1]).toHaveLength(7);
    expect(hands[2]).toHaveLength(7);
    expect(hands[3]).toHaveLength(7);
  });
});
