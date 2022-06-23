// https://leetcode.com/problems/two-sum/
// Two Sum

// 解决方案1：使用Map
var twoSum = function(nums, target) {
    if (!nums || nums.length < 2) {
        return [-1, -1];
    }

    let ans = [];
    let map = new Map();
    // 向map中先插入第一个元素，并从第二数开始遍历
    map.set(nums[0], 0);
    for (let i = 1; i < nums.length; i++) {
        if (map.has(target - nums[i])) {
            ans = [i, map.get(target - nums[i])];
            break;
        }
        map.set(nums[i], i);
    }
    
    return ans;
};
