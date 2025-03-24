/*
 * @lc app=leetcode.cn id=2116 lang=typescript
 *
 * [2116] 判断一个括号字符串是否有效
 */

// @lc code=start
function canBeValid(s: string, locked: string): boolean {
  const len = s.length;
  if (len % 2 != 0) return false

  let expectedFlagSet = new Set<number>()
  expectedFlagSet.add(0)
  
  for (let i = 0; i < len; i++) {
    if (locked[i] === '1') {
      const newSet = new Set<number>()
      if (s[i] === '(') {
        expectedFlagSet.forEach((v) => newSet.add(v + 1))
      }
      
      if (s[i] === ')') {
        expectedFlagSet.forEach((v) => {
          if (v - 1 < 0) return
          newSet.add(v - 1)
        })
      }
      expectedFlagSet = newSet
    } else {
      const newSet = new Set<number>()
      expectedFlagSet.forEach((v) => {
        newSet.add(v + 1)
        if (v - 1 < 0) return
        newSet.add(v - 1)
      })
      expectedFlagSet = newSet
    }
  }

  return expectedFlagSet.has(0)
};
// @lc code=end

canBeValid(
  '))()))',
  '010100'
)

export { canBeValid }
