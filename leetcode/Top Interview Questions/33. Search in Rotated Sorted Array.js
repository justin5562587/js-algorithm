// https://leetcode.com/problems/search-in-rotated-sorted-array/
// 33. Search in Rotated Sorted Array

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    if (!nums) return -1;

    let L = 0;
    let R = nums.length - 1;
    let mid;
    while (L <= R) {
        mid = L + ((R - L) >> 1);
        if (nums[mid] === target) {
            return mid;
        }

        if (nums[L] <= nums[mid]) {
            if (nums[L] <= target && target < nums[mid]) {
                R = mid - 1;
            } else {
                L = mid + 1;
            }
        } else {
            if (nums[R] >= target && target > nums[mid]) {
                L = mid + 1;
            } else {
                R = mid - 1;
            }
        }
    }

    return -1;
};

search([3,1], 1);

const getMid = ( arr) => {
    let L = 0;
    let R = arr.length - 1;
    return L + ((R - L) >> 1);
};
getMid([1,1,1,1,1,1]);