

// 非递归方式创建斐波那契数列
const createFabonacciArr = () => {
    let arr = new Array(20);
    arr[0] = 1;
    arr[1] = 1;
    for (let i = 2; i < arr.length; i++) {
        arr[i] = arr[i - 1] + arr[i - 2];
    }

    return arr;
};