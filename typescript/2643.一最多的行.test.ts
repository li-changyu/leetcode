import { describe, expect, test } from "bun:test";
import { rowAndMaximumOnes } from "./2643.一最多的行";

describe("2643.一最多的行", () => {
  test("case 1", () => {
    const mat = [
      [0, 1],
      [1, 0]
    ];
    const expected = [0, 1];
    expect(rowAndMaximumOnes(mat)).toEqual(expected);
  });

  test("case 2", () => {
    const mat = [
      [0, 0, 0],
      [0, 1, 1],
      [0, 0, 0]
    ];
    const expected = [1, 2];
    expect(rowAndMaximumOnes(mat)).toEqual(expected);
  });

  test("case 3", () => {
    const mat = [
      [0, 0],
      [1, 1],
      [0, 0]
    ];
    const expected = [1, 2];
    expect(rowAndMaximumOnes(mat)).toEqual(expected);
  });
});
