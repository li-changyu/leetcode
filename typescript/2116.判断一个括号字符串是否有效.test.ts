import { describe, expect, test } from "bun:test";
import { canBeValid } from "./2116.判断一个括号字符串是否有效";

describe("2116.判断一个括号字符串是否有效", () => {
  test("case 1", () => {
    const s = '))()))'
    const locked = '010100'
    const expected = true

    expect(canBeValid(s, locked)).toEqual(expected);
  });
});
