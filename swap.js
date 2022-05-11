export const swap = (arr, i, j) => {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
};

export const swapEOR = (a, b) => {
    a = a ^ b;
    b = a ^ b;
    a = a ^ b;
};
