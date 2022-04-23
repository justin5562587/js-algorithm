// 从小到大排列

// 选择方法
const selectShellSort = arr => {
    if (arr.length <= 1) {
        return arr;
    }

    let gap = 0;
    let temp = 0;
    let count = 0;
    for (gap = parseInt(arr.length / 2); gap >= 1; gap = parseInt(gap / 2)) {
        for (let i = gap; i < arr.length; i++) {
            for (let j = i - gap; j >= 0; j -= gap) {
                if (arr[j] > arr[j + gap]) {
                    temp = arr[j];
                    arr[j] = arr[j + gap];
                    arr[j + gap] = temp;
                }
            }
        };
        // console.log(`第${++count}轮排序`);
    }

    // console.log(arr);
};

// 位移方法 和插入排序结合
const shellInsertSort = arr => {
    if (arr.length <= 1) {
        return arr;
    }

    let gap = 0;
    let temp = 0;
    let count = 0;
    for (gap = parseInt(arr.length / 2); gap >= 1; gap = parseInt(gap / 2)) {
        for (let i = gap; i < arr.length; i++) {
            let j = i;
            let temp = arr[j];
            if (arr[j] < arr[j - gap]) {
                while (j - gap >= 0 && temp < arr[j - gap]) {
                    // 移动
                    arr[j] = arr[j - gap];
                    j -= gap;
                }
    
                arr[j] = temp;
            }
        };
        // console.log(`第${++count}轮排序`);
    }
};

export default selectShellSort;
// export default shellBitMoveSort;