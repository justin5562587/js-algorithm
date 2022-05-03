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

    let N = arr.length;
    for (let end = N - 1; end >=0; end--) {
        for (let second = 1; second <= end; second++) {
            if (arr[second - 1] > arr[second]) {
                swap(arr, second - 1, second);
            }
        }
    }
};

const swap = (arr, i, j) => {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
};