import { deepEqual } from 'assert';
import m from '../src/merge'

describe('merge', () => {
  it('merges two arrays of equal length', () => {
    const collection1 = [1, 3, 5];
    const collection2 = [2, 4, 6];
    const expected = [1, 2, 3, 4, 5, 6];
    deepEqual(m.merge(collection1, collection2), expected);
  });

  it('merges two arrays of different lengths', () => {
    const collection1 = [1, 3, 5, 7, 9];
    const collection2 = [2, 4, 6];
    const expected = [1, 2, 3, 4, 5, 6, 7, 9];
    deepEqual(m.merge(collection1, collection2), expected);
  });

  it('merges an empty array with a non-empty array', () => {
    const collection1: number[] = [];
    const collection2 = [1, 2, 3];
    const expected = [1, 2, 3];
    deepEqual(m.merge(collection1, collection2), expected);
  });

  it('merges two empty arrays', () => {
    const collection1: number[] = [];
    const collection2: number[] = [];
    const expected: number[] = [];
    deepEqual(m.merge(collection1, collection2), expected);
  });
});
