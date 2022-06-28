// https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/
// 34. Find First and Last Position of Element in Sorted Array

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    if (!nums) {
        return [-1, -1];
    }
    let L = 0;
    let R = nums.length - 1;
    let mostLeft = -1; // >=target 最左的位置
    let mostRight = -1; // <=target 最右的位置
    mostLeft = findMostLeft(nums, target);
    mostRight = findMostRight(nums, target);

    return [mostLeft, mostRight];
};

// 找到大于等于target的最左边index
const findMostLeft = (arr, target) => {
    let L = 0;
    let R = arr.length - 1;
    let ans = -1;
    let mid;
    while (L <= R) {
        mid = L + ((R - L) >> 1);
        if (arr[mid] >= target) {
            if (arr[mid] === target) ans = mid;
            R = mid - 1;
        } else {
            L = mid + 1;
        }
    }

    return ans;
};

// 找到小于等于target的最右边的index
const findMostRight = (arr, target) => {
    let L = 0;
    let R = arr.length - 1;
    let ans = -1;
    let mid;
    while (L <= R) {
        mid = L + ((R - L) >> 1);
        if (arr[mid] <= target) {
            if (arr[mid] === target) ans = mid;
            L = mid + 1;
        } else {
            R = mid - 1;
        }
    }

    return ans;
};

// test
searchRange([5,7,7,8,8,10], 8);
findMostLeft([5,7,7,8,8,10], 8);
findMostRight([5,7,7,8,8,10], 8);
