// 二分查找
// 寻找有序数组中"小于等于"value的最右边的index
const binaryFind = (sortedArr, target) => {
    if (!sortedArr) return -1;

    let L = 0;
    let R = sortedArr.length - 1;
    let mostRightIndex = -1;
    while (L <= R) {
        let mid = L + ((R - L) >> 1);
        if (arr[mid] <= target) {
            mostRightIndex = mid;
            L = mid + 1;
        } else {
            R = mid - 1;
        }
    }

    return mostRightIndex;
};

// 复习代码
const binaryFind2 = (sortedArr, target) => {
    if (!sortedArr) {
        return -1;
    }

    let L = 0;
    let R = sortedArr.length - 1;
    let mostRightIndex = -1;
    let mid;
    while (L <= R) {
        mid = L + ((R - L) >> 1);
        if (sortedArr[mid] <= target) {
            mostRightIndex = mid;
            L = mid + 1;
        } else {
            R = mid - 1;
        }
    }

    return mostRightIndex;
};

// 寻找小于等于target的最右边的index
// 没找到返回 Number.MIN_VALUE
// 初始值设置成什么，才能保证只要找到一个数就能是当前最大？
const binaryFindRecurse = (sortedArr, target) => {
    if (!sortedArr) {
        return Number.MIN_VALUE;
    }

    return process(sortedArr, 0, sortedArr.length - 1, target);
};
const process = (arr, L, R, target) => {
    if (L > R) {
        return Number.MIN_VALUE;
    }

    let mostRightIndex = Number.MIN_VALUE;
    let mid = L + ((R - L) >> 1);
    if (arr[mid] <= target) {
        mostRightIndex = Math.max(mid, process(arr, mid + 1, R, target));
    } else {
        mostRightIndex = process(arr, L, mid - 1, target);
    }

    return mostRightIndex;
};
const arr = [1,1,2,3,3,3,3,5,6,7,8,11];
binaryFindRecurse(arr, 3);