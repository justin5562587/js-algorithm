// 二分查找
// 寻找"大于等于"value的最左边的index
const binaryFind = (sortedArr, target) => {
    if (sortedArr) return -1;

    let L = 0;
    let R = sortedArr.length - 1;
    let mostLeftIndex = -1;
    while (L <= R) {
        let mid = L + ((R - L) >> 1);
        if (arr[mid] >= value) {
            mostLeftIndex = mid;
            R = mid - 1
        } else {
            L = mid + 1;
        }
    }

    return mostLeftIndex;
};

// 寻找"大于等于"target的最左边的index 递归版本
// 没找到返回 Number.MAX_VALUE;
const binaryFindRecurse = (sortedArr, target) => {
    if (!sortedArr) {
        return Number.MAX_VALUE;
    }

    return process(sortedArr, 0, sortedArr.length - 1, target);
};
const process = (arr, L, R, target) => {
    if (L > R) {
        return Number.MAX_VALUE;
    }

    let mostLeftIndex = Number.MAX_VALUE;
    let mid = L + ((R - L) >> 1);
    if (arr[mid] >= target) {
        mostLeftIndex = Math.min(mid, process(arr, L, mid - 1, target));
    } else {
        mostLeftIndex = process(arr, mid + 1, R, target);
    }

    return mostLeftIndex;
};
const arr = [1,2,3,3,5,7,8,9,11];
binaryFindRecurse(arr, 3);
