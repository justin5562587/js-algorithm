// https://leetcode.com/problems/letter-combinations-of-a-phone-number/
// Letter Combinations of a Phone Number

// 根据题意固定写死的映射关系
// 数组索引表示对应数字，0，1根据题意没有映射关系，只有2-9这八个数字有对应的英文映射关系
let digitMap = ['0', '1', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'];
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
    if (!digits) return []
    let ans = [];
    process(digits, 0, '', ans);

    return ans;
};

// digits：初始的数字字符串入参
// index：表示0到index-1位置已经做过了决定，当前需要判断index
// convertedPart：当前部分转换的状态
const process = (digits, index, convertedPart, ans) => {
    if (index === digits.length) {
        ans.push(convertedPart);
        return
    }

    let digitChar = digits.substring(index, index + 1);
    let enChars = digitMap[digitChar];
    for (let i = 0; i < enChars.length; i++) {
        process(digits, index + 1, convertedPart + enChars[i], ans)
    }
};

// test
letterCombinations("23");
