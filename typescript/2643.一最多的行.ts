/*
 * @lc app=leetcode.cn id=2643 lang=typescript
 *
 * [2643] 一最多的行
 */

// @lc code=start
function rowAndMaximumOnes(mat: number[][]): number[] {
  if (mat.length === 0) {
    return [0, 0];
  }
  
  let column = 0
  let number = 0
  for (let i = 0; i < mat.length; i++) {
      const currNumber = mat[i].reduce((pre, cur) => pre + cur, 0)
      if (currNumber > number) {
          column = i
          number = currNumber
      }
  }
  return [column, number]
};
// @lc code=end

export { rowAndMaximumOnes };

