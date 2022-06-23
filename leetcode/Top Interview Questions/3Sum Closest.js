// https://leetcode.com/problems/3sum-closest/
// 3Sum Closest

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    if (!nums || nums.length < 3) {
        return -1;
    }

    // 从小大大排列
    let arr = nums.sort((a, b) => a - b);
    let N = arr.length;
    let start;
    let end;
    let ans = Number.MAX_VALUE;
    let calcRes;
    for (let i = 0; i < N - 2; i++) {
        start = i + 1;
        end = N - 1;
        while (start < end) {
            calcRes = arr[start] + arr[end] + arr[i];
            if (calcRes < target) {
                start++; // 当前计算结果小于target，为了下次更趋紧target，用更大的数值进行计算
            } else if (calcRes > target) {
                end--; // 当前计算结果大于target，为了下次更趋紧target，用更小的数值进行计算
            } else {
                return target;
            }

            // 每次计算绝对数值差
            if (Math.abs(target - calcRes) < Math.abs(target - ans)) {
                ans = calcRes;
            }
        }
    }

    return ans;
};

// test
threeSumClosest([-1,2,1,-4], 1);
