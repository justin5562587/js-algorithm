// 字符串全排列问题
// string permutation

const swap = (i, j) => {
    let temp = i;
    i = j;
    j = temp;
};

const swapArr = (arr, i, j) => {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
};

const getAllStringPermutation = (str) => {
    let ans = [];
    let charArr = str.split('');
    process(charArr, 0, ans);
    return ans;
};

const process = (charArr, index, ans) => {
    if (index === charArr.length) {
        ans.push(charArr.join(''));
    } else {
        for (let i = index; i < charArr.length; i++) {
            swap(charArr, index, i);
            process(charArr, index + 1, ans);
            swap(charArr, index, i);
        }
    }
};
