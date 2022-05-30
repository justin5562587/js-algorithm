// 有序数组中 使用二分查找寻找某个数字
const binaryIndexOf = (sortedArr, target) => {
    if (!sortedArr) {
        return -1;
    }

    let L = 0;
    let R = sortedArr.length - 1;
    let M;
    while (L <= R) {
        M = L + parseInt((R - L) >> 1);
        // M = L + ((R - L) >> 1);
        if (sortedArr[M] === target) {
            return M;
        }

        if (sortedArr[M] > target) {
            R = M - 1;
        } else {
            L = M + 1;
        }
    }

    return -1;
};
const arr = [1,2,4,5,7,8,9,11];
binaryIndexOf(arr, 4)

const func = (L, R) => L + ((R - L) >> 1);

const func1 = (L, R) => L + parseInt(((R - L) >> 1));

const test = (L, R) => {
    console.log(L + ((R - L) >> 1));
    console.log(L + parseInt(((R - L) >> 1)));
};


// 随机在L R中选择一个数字
const randomPivot = (L, R) => {
    return L + parseInt(Math.random() * (R - L + 1));
};
randomPivot(1,9);
randomPivot(2,5);
