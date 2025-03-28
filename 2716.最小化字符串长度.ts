/*
 * @lc app=leetcode.cn id=2716 lang=typescript
 *
 * [2716] 最小化字符串长度
 */

// @lc code=start
function minimizedStringLength(s: string): number {
  return new Set(s.split('')).size
};
// @lc code=end

minimizedStringLength("aaabc")
