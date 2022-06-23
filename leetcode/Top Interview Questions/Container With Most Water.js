// https://leetcode.com/problems/container-with-most-water/
// Container With Most Water

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    if (!height || height.length < 2) {
        return 0;
    }
    
    let L = 0;
    let R = height.length - 1;
    let ans = (R - L) * Math.min(height[L], height[R]);
    while (L < R) {
        ans = Math.max(
            ans,
            (R - L) * Math.min(height[L], height[R])
        );
        if (height[L] <= height[R]) {
            L++;
        } else {
            R--;
        }
    }
    
    return ans;
};
