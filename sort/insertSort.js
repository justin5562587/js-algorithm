// 插入排序
// 复习次数1

const insertSort = arr => {
    if (!arr || arr.length <= 1) {
        return arr;
    }

    for (let end = 1; end < arr.length; end++) {
        for (let pre = end - 1; pre >= 0 && arr[pre] > arr[pre + 1]; pre--) {
            swap(arr, pre, pre + 1);
        }
    }

    return arr;
};

const swap = (arr, i, j) => {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
};

// 计算数字有多少位为1
const bit1Counts = num => {
    let count = 0;

    while (num != 0) {
        let rightestOne = num & (~num + 1);
        count++;
        num = num ^ rightestOne;
    }

    return count;
};

// 默写
const isnertSort = arr => {
    if (!arr || arr.length <= 1) {
        return arr;
    }

    for (let i = 1; i < arr.length; i++) {
        for (let j = i - 1; j >= 0; j--) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j - 1);
            }
        }
    }

    return arr;
};
