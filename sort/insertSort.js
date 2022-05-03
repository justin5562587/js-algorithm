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
