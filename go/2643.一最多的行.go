/*
 * @lc app=leetcode.cn id=2643 lang=golang
 *
 * [2643] 一最多的行
 */

package main

// @lc code=start
func rowAndMaximumOnes(mat [][]int) []int {
	if len(mat) == 0 {
		return []int{0, 0}
	}

	max := 0
	maxIndex := 0
	for i, row := range mat {
		count := 0
		for _, val := range row {
			if val == 1 {
				count++
			}
		}
		if count > max {
			max = count
			maxIndex = i
		}
	}
	return []int{maxIndex, max}
}

// @lc code=end
