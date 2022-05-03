const selectSort = arr => {
    if (!arr || arr.length <= 1) {
        return arr;
    }

    let minIndex;
    for (let i = 0; i < arr.length; i++) {
        minIndex = i;
        for (let j = i + 1; j < arr.length - 1; j++) {
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

const excludeBoundaryCase = arr => {
    if (!arr || arr.length <= 1) {
        return arr;
    }
};
