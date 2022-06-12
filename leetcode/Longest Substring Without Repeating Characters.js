// https://leetcode.com/problems/longest-substring-without-repeating-characters/
// Longest Substring Without Repeating Characters

/**
 * @param {string} s
 * @return {number}
 */
// 使用arr来处理，因为使用Map常数时间较大
 var lengthOfLongestSubstring = function(s) {
    if (!s) {
        return 0;
    }

    // 用char对应的ASCII数值作为arr的索引，存储每个char上一次在字符串中出现的位置索引
    // 理论上int[128]也够用
    let arr = new Array(256).fill(-1);
    arr[s[0].charCodeAt()] = 0;
    let ans = 1;
    let pre = 1; // 用于记录i-1位置最长能够推多远，初始状态表示0位置的值最长距离只有1
    let current;
    let preIdxOfCurrentChar;

    for (let i = 1; i < s.length; i++) {
        let charCode = s[i].charCodeAt();
        preIdxOfCurrentChar = arr[charCode];
        current = Math.min(pre + 1, i - preIdxOfCurrentChar);
        ans = Math.max(current, ans);
        pre = current;
        arr[charCode] = i;
    }

    return ans;
};


// 使用Map数据结构
var lengthOfLongestSubstringWithMap = function(s) {
    if (!s) {
        return 0;
    }

    let map = new Map(); // 用于记录每个字符串上次出现的位置
    map.set(s[0], 0);
    let ans = 1;
    let pre = 1; // 用于记录i-1位置最长能够推多远，初始状态表示0位置的值最长距离只有1
    let current;
    let preIdxOfCurrentChar;

    for (let i = 1; i < s.length; i++) {
        preIdxOfCurrentChar = map.has(s[i]) ? map.get(s[i]) : -1;
        current = Math.min(pre + 1, i - preIdxOfCurrentChar);
        ans = Math.max(current, ans);
        pre = current;
        map.set(s[i], i);
    }

    return ans;
};

// test
lengthOfLongestSubstring("abcabcbb")
