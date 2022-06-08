// 快速排序
const quickSort = (arr) => {
    if (!arr) {
        return false;
    }

    process(arr, 0, arr.length - 1);
    return arr;
};

const process = (arr, L, R) => {
    if (L >= R) {
        return;
    }

    // 选取随机数
    let randomIdx = L + parseInt(Math.random() * (R - L + 1));
    swap(arr, randomIdx, R);

    // 获取区间化后返回的左右边界，进一步递归处理下去，会再遇到L>=R时候停止
    let equalArea = partiton(arr, L, R);
    console.log(equalArea);
    process(arr, L, equalArea[0] - 1);
    process(arr, equalArea[1] + 1, R);
};

const swap = (arr, i, j) => {
    if (i !== j) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
};

// partition
// 使用arr[R]作为基准数，将arr拆分为小于，等于，大于三个区域
// 返回等于区域在arr中的左右边界（int[2]）
const partiton = (arr, L, R) => {
    if (L > R) {
        return [-1, -1];
    }
    
    if (L === R) {
        return [L, R];
    }

    let less = L - 1;
    let more = R;
    let index = L;
    while (index < more) {
        if (arr[index] === arr[R]) {
            index++;
        } else if (arr[index] < arr[R]) {
            swap(arr, index, less + 1);
            index++;
            less++;
        } else {
            swap(arr, index, more);
            more--;
        }
    }

    // arr[R]是基准数，属于等于区域，将它移动到等于区域
    swap(arr, more, R);
    return [less + 1, more];
};


// test
let arr = [-1, 9, 10, 8, 23, 11, -92, 5, 62];
quickSort(arr);
console.log(arr);