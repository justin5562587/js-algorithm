// 有序数据中 使用二分查找寻找某个数字
const binaryFind = (sortedArr, num) => {
    if (!sortedArr) return -1;

    let L = 0;
    let R = sortedArr.length - 1;
    while (L <= R) {
        let mid = Math.floor((L + R) / 2);
        if (sortedArr[mid] === num) {
            return mid;
        } else if (sortedArr[mid] > num) {
            R = mid - 1;
        } else {
            L = mid + 1;
        }
    }

    return -1;
};
