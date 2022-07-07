// 78. Subsets
// https://leetcode.com/problems/subsets/

// 这种题目都用常用的从左到右的递归套路解决，依次处理每个index
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    if (!nums) return [[]];

    let ans = [];
    process(0, [], nums, ans);
    return ans;
};

const process = (index, currentValue, nums, ans)=> {
    if (index === nums.length) {
        ans.push(currentValue);
        return;
    }

    process(index + 1, currentValue, nums, ans);

    currentValue = currentValue.concat();
    currentValue.push(nums[index]);
    process(index + 1, currentValue, nums, ans);
};

// test
subsets([1,2,3]);

// Input: nums = [1,2,3]
// Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
