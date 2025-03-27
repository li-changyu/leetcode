/*
 * @lc app=leetcode.cn id=290 lang=typescript
 *
 * [290] 单词规律
 */

// @lc code=start
function wordPattern(pattern: string, s: string): boolean {
  const sArr = s.split(' ')
  if (pattern.length !== sArr.length) return false
  const map = new Map<string, string>()
  const mapR = new Map<string, string>()

  for (let i = 0; i < pattern.length; i++) {
    const p = pattern[i]
    const s = sArr[i]

    if (!mapR.has(s)) {
      mapR.set(s, p)
    } else {
      if (mapR.get(s) !== p) return false
    }

    if (!map.has(p)) {
      map.set(p, s)
    } else {
      if (map.get(p) !== s) return false
    }
  }

  return true
};
// @lc code=end

wordPattern(
  "abba",
  "dog dog dog dog"
)
