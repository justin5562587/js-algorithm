// 46. Permutations
// https://leetcode.com/problems/permutations/

// permutations 排列的意思
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// 交换法处理
var permute = function(nums) {
    if (!nums) return [];
    if (nums.length === 1) return [nums];

    let ans = [];
    process(0, nums, ans);
    return ans;
};

const process = (index, nums, ans) => {
    console.log(index, nums)
    if (index === nums.length) {
        ans.push(nums.concat());
        return;
    }

    for (let i = index; i < nums.length; i++) {
        swap(nums, index, i);
        process(index + 1, nums, ans);
        swap(nums, index, i);
    }
};

const swap = (arr, a, b) => {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
};

// test
permute([1,2,3]);

// 字典序 处理
