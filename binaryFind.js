// 有序数列-二分查找
// arr有序 返回===num的第一个找到的index
const binaryFind = (arr, num) => {
    if (!arr) return false;

    let L = 0;
    let R = arr.length - 1;
    while (L <= R) {
        let mid = 0 ^ ((L + R) / 2);
        if (arr[mid] === num) {
            return true;
        } else if (arr[mid] > num) {
            R = mid - 1;
        } else {
            L = mid + 1;
        }
    }

    return false;
};

// 有序数列-寻找大于等于num的最左边的数字
// arr有序 返回>=num 最左边的index
const binaryFindMostLeftNoLessNum = (arr, num) => {
    if (!arr) return -1;

    let L = 0;
    let R = arr.length - 1;
    let ans = -1;
    while (L <= R) {
        let mid = 0 ^ ((L + R) / 2);
        if (arr[mid] >= num) {
            ans = mid;
            R = mid - 1;
        } else {
            L = mid + 1;
        }
    }

    return ans;    
};

// 有序数列-寻找小于等于num的最右边的数字
// arr有序 返回<=num 最右边的index
const binaryFindMostRightNoMoreNum = (arr, num) => {
    if (!arr) return -1;

    let L = 0;
    let R = arr.length - 1;
    let ans = -1;
    while (L <= R) {
        let mid = 0 ^ ((L + R) / 2);
        if (arr[mid] <= num) {
            ans = mid;
            L = mid + 1;
        } else {
            R = mid - 1;
        }
    }

    return ans;    
};