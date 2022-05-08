// 二分查找
// 寻找"大于等于"value的最左边的index
const binaryFind = (sortedArr, value) => {
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