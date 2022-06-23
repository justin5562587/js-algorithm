// https://leetcode.com/problems/remove-element/
// 27. Remove Element

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    if (!nums) return 0;

    let ans = nums.length;
    let temp;
    let index = 0;
    let right = nums.length;
    while (index < right) {
        if (nums[index] === val) {
            ans--
            temp = nums[index];
            nums[index] = nums[right - 1];
            nums[right - 1] = temp;
            right--;
        } else {
            index++;
        }
    }

    return ans;
};

// test
removeElement([0,1,2,2,3,0,4,2], 2);
