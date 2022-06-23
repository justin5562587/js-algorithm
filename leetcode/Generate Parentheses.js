// https://leetcode.com/problems/generate-parentheses/
// Generate Parentheses

/**
 * @param {number} n
 * @return {string[]}
 */
// 暴力递归
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

// 方法二 增加了递归中的限制条件，减少无效递归
var generateParenthesis2 = function(n) {
    if (n < 1) return [];

    let ans = [];
    processWithCondition('', 0, 0, n, ans);
    return ans;
};

const processWithCondition = (str, open, close, n, ans) => {
    if (str.length === 2 * n) {
        console.log(str)
        ans.push(str);
        return;
    }

    if (open < n) {
        processWithCondition(str + '(', open + 1, close, n, ans);
    }
    if (close < open) {
        processWithCondition(str + ')', open, close + 1, n, ans);
    }
};

generateParenthesis2(3)