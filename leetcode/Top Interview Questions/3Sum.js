// https://leetcode.com/problems/3sum/
// 3Sum

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    if (!nums || nums.length < 3) {
        return [];
    }

    let ans = [];
    // 对数组进行排序
    let arr = nums.sort((a, b) => a - b);
    let N = arr.length;
    let start;
    let end;
    let calcRes;
    for (let i = 0; i < N - 2; i++) {
        if (i - 1 >= 0 && arr[i] === arr[i - 1]) {
            continue;
        }

        start = i + 1;
        end = N - 1;
        while (start < end) {
            calcRes = arr[i] + arr[start] + arr[end];
            if (calcRes === 0) {
                ans.push([arr[i], arr[start], arr[end]]);
                start++;
                end--;
                while (start < end && arr[start] === arr[start - 1]) {
                    start++;
                }
                while (start < end && arr[end] === arr[end + 1]) {
                    end--;
                }
            } else if (calcRes < 0) {
                // 如果当前计算出来结果小于0，则希望下次计算结果增大便于更加趋近0
                // 因为数组从小打到排列，所以下次使用更大的start+1
                start++;
            } else {
                // 如果计算出来的结果大于0，则希望下次计算结果减少便于更加趋近0
                // 因为数组从小打到排列，所以下次使用更小的end-1
                end--;
            }
        }
    }

    return ans;
};

// test
threeSum([-1, 0, 1, 2, -1, -4]);
