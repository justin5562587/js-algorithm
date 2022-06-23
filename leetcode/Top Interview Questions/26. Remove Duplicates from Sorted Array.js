// https://leetcode.com/problems/remove-duplicates-from-sorted-array/
// 26. Remove Duplicates from Sorted Array

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if (!nums || nums.length < 2) {
        return nums;
    }

    let i = 0;
    for (let j = 0; j < nums.length; j++) {
        if (nums[j] !== nums[i]) {
            nums[i + 1] = nums[j];
            i += 1;
        }
    }
    return i + 1;
};

// test
// removeDuplicates([1,1,2,2,4,5]);
removeDuplicates([2,2,3,4,4,5])
