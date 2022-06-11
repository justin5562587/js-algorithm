// https://leetcode.com/problems/integer-to-roman/
// Integer to Roman

// 个人感觉没有特别的技巧，就是纯粹的进行转换
/**
 * @param {number} num
 * @return {string}
 */
// 1 <= num <= 3999
var intToRoman = function (num) {
    let M = ["", "M", "MM", "MMM"];
    let C = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
    let X = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
    let I = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
    return M[Math.floor(num / 1000)] +
        C[Math.floor(num / 100) % 10] +
        X[Math.floor(num / 10) % 10] +
        I[num % 10];
};
