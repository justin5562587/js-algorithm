// 冒泡排序
// 复习次数1

const bubbleSort = arr => {
    if (!arr || arr.length <= 1) {
        return arr;
    }

    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1);
            }
        }
    }

    return arr;
};

const bubbleSort2 = arr => {
    if (!arr || arr.length <= 1) {
        return arr;
    }

    for (let end = arr.length - 1; end > 0; end--) {
        for (let i = 0; i < end; i++) {
            if (arr[i] > arr[i + 1]) {
                swap(arr, i, i + 1);
            }
        }
    }

    return arr;
};

const swap = (arr, i, j) => {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
};