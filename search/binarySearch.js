const binarySerach = (arr, left, right, findValue) => {
    if (left > right) {
        return -1;
    }

    const middle = parseInt((left + right) / 2);
    const middleValue = arr[middle];

    if (findValue > middleValue) {
        return binarySerach(arr, middle + 1, right, findValue);
    } else if (findValue < middleValue) {
        return binarySerach(arr, left, middle - 1, findValue);
    } else {
        return middle;
    }
};

const binaryListSerach = (arr, left, right, findValue) => {
    if (left > right) {
        return -1;
    }

    // todo
};