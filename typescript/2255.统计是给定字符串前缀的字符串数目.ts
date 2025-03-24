/*
 * @lc app=leetcode.cn id=2255 lang=typescript
 *
 * [2255] 统计是给定字符串前缀的字符串数目
 */

// @lc code=start
function countPrefixes(words: string[], s: string): number {
  return words.filter(w => s.startsWith(w)).length
};
// @lc code=end

