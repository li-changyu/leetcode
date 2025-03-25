/*
 * @lc app=leetcode.cn id=191 lang=typescript
 *
 * [191] 位1的个数
 */

// @lc code=start
function hammingWeight(n: number): number {
    return n.toString(2).split('').filter(i => i === '1').length
};
// @lc code=end

