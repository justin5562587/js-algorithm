// https://leetcode.com/problems/rotate-array/
// 189. Rotate Array


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    let doubleNums = nums.concat(nums);
    // console.log(doubleNums)
    doubleNums.splice(0, nums.length - k);
    // console.log(doubleNums)
    for (let i = 0; i < k; i++) {
        doubleNums.pop();
    }
    return doubleNums;
};

rotate([1,2,3,4,5,6,7], 3)