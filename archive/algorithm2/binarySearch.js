const arr = [1, 4, 10, 90, 108, 111, 945];

const bianrySerach = (left, right, target) => {
    if (arr.length == 0) {
        return -1;
    }

    let left = 0;
    let right = arr.length - 1;
    let mid = parseInt((left + right) / 2);
    if (arr[mid] == target) {
        return mid;
    } else if (arr[mid] > target) {
        return bianrySerach();
    }
};

const binarySearchNoRecur = (arr, target) => {
    if (arr.length == 0) {
        return -1;
    }

    let left = 0;
    let right = arr.length - 1;
    
    while (left <= right) {
        let mid = parseInt((left + right) / 2);
        if (arr[mid] == target) {
            return mid;
        } else if (arr[mid] > target) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return -1;
};

const idx = binarySearchNoRecur(arr, 111);
console.log(idx);