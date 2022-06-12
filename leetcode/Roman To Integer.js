// https://leetcode.com/problems/roman-to-integer/
// Roman to Integer
/**
 * @param {string} s
 * @return {number}
 */
 var romanToInt = function (s) {
    let map = {
        "M": 1000,
        "CM": 900,
        "D": 500,
        "CD": 400,
        "C": 100,
        "XC": 90,
        "L": 50,
        "XL": 40,
        "X": 10,
        "IX": 9,
        "V": 5,
        "IV": 4,
        "I": 1
    };
    let ans = 0;

    let i = 0;
    let part;

    while (i < s.length) {
        if (i + 2 <= s.length) {
            part = s.substring(i, i + 2);
            if (map[part]) {
                ans += map[part];
                console.log(`i=${i} ans=${ans}`)
                i += 2;

                continue;
            }
        }

        part = s.substring(i, i + 1);
        ans += map[part];
        console.log(`i=${i} ans=${ans}`)
        i += 1;
    }

    return ans;
};

// test
romanToInt("MCMXCIV");
