package main

import (
	"reflect"
	"testing"
)

func TestRowAndMaximumOnes(t *testing.T) {
	tests := []struct {
		name     string
		matrix   [][]int
		expected []int
	}{
		{
			name: "case 1",
			matrix: [][]int{
				{0, 1},
				{1, 0},
			},
			expected: []int{0, 1},
		},
		{
			name: "case 2",
			matrix: [][]int{
				{0, 0, 0},
				{0, 1, 1},
				{0, 0, 0},
			},
			expected: []int{1, 2},
		},
		{
			name: "case 3",
			matrix: [][]int{
				{0, 0},
				{1, 1},
				{0, 0},
			},
			expected: []int{1, 2},
		},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			result := rowAndMaximumOnes(tt.matrix)
			if !reflect.DeepEqual(result, tt.expected) {
				t.Errorf("rowAndMaximumOnes() = %v, expected %v", result, tt.expected)
			}
		})
	}
}
