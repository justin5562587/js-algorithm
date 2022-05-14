// 字符串子序列问题

// 子序列就是顺序按照原先字符串的顺序，但是每个位置的char可以选择加入或者不加入子序列

const getAllStringSequence = (str) => {
    let ans = [];
    process(str, 0, ans, '');
    return ans;
};

const process = (str, index, ans, path) => {
    if (index === str.length) {
        ans.push(path);
        return;
    }

    // 包含当前索引下的char
    process(str, index + 1, ans, path + str.substr(index, 1));

    // 不包含当前索引下的char
    process(str, index + 1, ans, path);
};

// 获取所有不重复的子序列
const getAllStringSequenceWithoutRepeat = (str) => {
    let set = new Set();
    process2(str, 0, set, '');
    return set;
};

const process2 = (str, index, set, path) => {
    if (index === str.length) {
        set.push(path);
        return;
    }

    // 包含当前子序列
    process2(str, index + 1, set, path + str.substr(index, 1));

    // 不包含当前子序列
    process2(str, index + 1, set, path);
};
