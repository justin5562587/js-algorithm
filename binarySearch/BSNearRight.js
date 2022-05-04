// 二分查找
// 寻找有序数组中"小于等于"value的最右边的index
const binaryFind = (sortedArr, value) => {
    if (!sortedArr) return -1;

    let L = 0;
    let R = sortedArr.length - 1;
    let mostRightIndex = -1;
    while (L <= R) {
        let mid = Math.floor((L + R) / 2);
        if (arr[mid] <= value) {
            mostRightIndex = mid;
            L = mid + 1;
        } else {
            R = mid - 1;
        }
    }

    return mostRightIndex;
};