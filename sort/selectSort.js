// 选择排序
// 复习次数1

const selectSort = arr => {
    if (!arr || arr.length <= 1) {
        return arr;
    }

    let minIndex;

    // 0~n-1
    // 1~n-1
    for (let i = 0; i < arr.length - 1; i++) {
        minIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            minIndex = arr[j] < arr[minIndex] ? j : minIndex;
        }
        swap(arr, i, minIndex);
    }

    return arr;
};

const swap = (arr, i, j) => {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
};
