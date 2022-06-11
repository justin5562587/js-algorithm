// https://leetcode.com/problems/longest-palindromic-substring/
// Longest Palindromic Substring

/**
 * @param {string} s
 * @return {string}
 */
// 中心扩散法
var longestPalindrome = function(s) {
    if (s.length < 2) {
        return s;
    }    

    let info = {
        maxStartIdx: 0,
        max: 1,
    }
    for (let i = 0; i < s.length - 1; i++) {
        process(info, s, i, i); // 以i自己为中心
        process(info, s, i, i + 1); // 以i, i+ 1中间的虚拟位置为中心
    }

    console.log('info', info)

    return s.substring(info.maxStartIdx, info.maxStartIdx + info.max);
    // return s.substr(info.maxStartIdx, info.max); // String.prototype.substr 接口为弃用状态
};

var process = (info, str, L, R) => {
    // while (L >= 0 && R < str.length) {
    //     if (str[L] === str[R]) {
    //         if (info.max < R - L + 1) {
    //             info.max = R - L + 1;
    //             info.maxStartIdx = L;
    //         }
    //         L--;
    //         R++;
    //     } else {
    //         break;
    //     }
    // }

    // 每次while都要重新调整max maxStartIndex开销大
    // 改为while退出后结算一次

    while (L >= 0 && R < str.length && str[L] === str[R]) {
        L--;
        R++;
    }

    // 退出while的时候，就是第一个L R不满足条件的情况，所以满足条件的区域是 [L+1,R-1]之间
    // 所以满足条件的长度为 R - L + 1 - 2 = R - L - 1
    // -2是因为要将L R两个边界删除
    if (info.max < R - L - 1) {
        info.max = R - L - 1;
        info.maxStartIdx = L + 1;
    }
};

// test
longestPalindrome('babad');
