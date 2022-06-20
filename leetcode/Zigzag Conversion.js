// https://leetcode.com/problems/zigzag-conversion/
// Zigzag Conversion

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if (numRows < 2) return s;

    let rows = new Array(numRows).fill('');

    let i = 0;
    let flag = -1;
    for (let c of s) {
        rows[i] += c;
        if (i === 0 || i === numRows - 1) {
            flag = -flag;
        }
        i += flag;
    }

    let ans = '';
    for (let substr of rows) {
        ans += substr;
    }
    return ans;
};

// test
convert('sfasdfas', 3);

// class Solution {
//     public String convert(String s, int numRows) {
//         if(numRows < 2) return s;
//         List<StringBuilder> rows = new ArrayList<StringBuilder>();
//         for(int i = 0; i < numRows; i++) rows.add(new StringBuilder());
//         int i = 0, flag = -1;
//         for(char c : s.toCharArray()) {
//             rows.get(i).append(c);
//             if(i == 0 || i == numRows -1) flag = - flag;
//             i += flag;
//         }
//         StringBuilder res = new StringBuilder();
//         for(StringBuilder row : rows) res.append(row);
//         return res.toString();
//     }
// }

// 作者：jyd
// 链接：https://leetcode.cn/problems/zigzag-conversion/solution/zzi-xing-bian-huan-by-jyd/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。