// https://leetcode.com/problems/4sum/
// 4Sum

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    if (!nums || nums.length < 4) {
        return [];
    }

    let ans = [];
    let arr = nums.sort((a, b) => a - b);
    let N = arr.length;
    let start;
    let minorEnd;
    let calcRes;
    for (let i = 0, end = N - 1; i < N - 3 && end > 2; i++, end--) {
        start = i + 1;
        minorEnd = end - 1;
        while (start < minorEnd) {
            calcRes = arr[i] + arr[start] + arr[minorEnd] + arr[end];
            if (calcRes === target) {
                ans.push([arr[i], arr[start], arr[minorEnd], arr[end]]);
                start++;
                while (start < minorEnd && arr[start] === arr[start - 1]) {
                    start++;
                }
                minorEnd--;
                while (start < minorEnd && arr[minorEnd] === arr[minorEnd + 1]) {
                    minorEnd--;
                }
            } else if (calcRes < target) {
                start++;
            } else {
                minorEnd--;
            }
        }
    }

    return ans;
};
fourSum([1,0,-1,0,-2,2], 0);
