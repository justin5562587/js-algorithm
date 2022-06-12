// https://leetcode.com/problems/palindrome-number/
// Palindrome Number

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    // 负数永远不满足回文状态
    if (x < 0) {
        return false;
    }

    // 正数个位数自身构成回文
    if (x >= 0 && x < 9) {
        return true;
    }

    let charArr = String(x).split('');
    let N = charArr.length;
    let L = (N - 1 - 0) >> 1; // 求出上中位索引
    let R = N % 2 === 0 ? L + 1 : L; // 如果char数组长度为偶数，则L R一样，否则R为L+1

    while (L >= 0 && R < N && charArr[L] === charArr[R]) {
        L--;
        R++;
    }

    // 如果因为越界退出while，则表示整体为回文
    return L === -1;
};

// 更加快速的答案(非自己实现)
var isPalindrome2 = function(x) {
    if (x < 0) return false
  
    let rev = 0
    for(let i = x; i >= 1; i = Math.floor(i/10)) {
        rev = rev*10 + i%10
    }
    return rev === x
};

// test
isPalindrome(10)
