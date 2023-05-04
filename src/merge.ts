export default class merge {
  static merge(collection1: number[], collection2: number[]): number[] {
    const merged: number[] = [];
    let i = 0;
    let j = 0;

    while (i < collection1.length && j < collection2.length) {
      if (collection1[i] < collection2[j]) {
        merged.push(collection1[i]);
        i++;
      } else {
        merged.push(collection2[j]);
        j++;
      }
    }

    while (i < collection1.length) {
      merged.push(collection1[i]);
      i++;
    }

    while (j < collection2.length) {
      merged.push(collection2[j]);
      j++;
    }
    
    return merged;
  }
}