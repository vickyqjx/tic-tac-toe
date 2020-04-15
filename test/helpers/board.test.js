import { calculateWinner } from '../../src/helpers/board.js';

test('calculateWinner not started', () => {
  expect(calculateWinner(Array(9).fill(null))).toBe(null);

  expect(calculateWinner(['X', 'O', 'X', 'O', 'X', 'O', 'X', null, null])).toStrictEqual({ name: 'X', highlights: [2, 4, 6] });
});

test('calculateWinner X wins', () => {
  expect(calculateWinner(['X', 'O', 'X', 'O', 'X', 'O', 'X', null, null]))
  .toStrictEqual({ name: 'X', highlights: [2, 4, 6] });
});

test('calculateWinner no one wins', () => {
  expect(calculateWinner(['X', 'O', 'X', 'X', 'O', 'O', 'O', 'X', 'X'])).toBe(null);
});
