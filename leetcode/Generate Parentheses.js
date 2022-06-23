// https://leetcode.com/problems/generate-parentheses/
// Generate Parentheses

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    if (n < 1) return [];

    let ans = [];
    process(0, '', n * 2, ans);
    return ans;
};

const process = (index, current, n, ans) => {
    if (index === n) {
        if (isValid(current)) {
            ans.push(current);
        }
        return;
    }

    process(index + 1, current + '(', n, ans);
    process(index + 1, current + ')', n, ans);
};

const isValid = (str) => {
    let arr = [];
    for (let c of str) {
        if (c === '(') {
            arr.push(')');
        } else if (arr.length === 0 || arr.pop() !== c) {
            return false;
        }
    }

    return arr.length === 0;
};
