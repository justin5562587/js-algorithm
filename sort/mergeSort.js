// 归并排序
// 复习次数1

const mergeSort = arr => {
    if (!arr) return arr;
    process(arr, 0, arr.length - 1);

    return arr;
};

// 拆分
const process = (arr, L, R) => {
    if (L == R) {
        return;
    }

    let mid = L + ((R - L) >> 1);
    // console.log('mid', mid)
    process(arr, L, mid);
    process(arr, mid + 1, R);
    merge(arr, L, mid, R);
};

// 合并
const merge = (arr, L, M, R) => {
    console.log('发生merge', L, R)
    let help = new Array(R - L + 1);
    let i = 0;
    let p1 = L;
    let p2 = M + 1;
    while (p1 <= M && p2 <= R) {
        help[i++] = arr[p1] <= arr[p2] ? arr[p1++] : arr[p2++];
    }

    while (p1 <= M) {
        help[i++] = arr[p1++];
    }

    while (p2 <= R) {
        help[i++] = arr[p2++];
    }

    for (i = 0; i < help.length; i++) {
        arr[L + i] = help[i];
    }
};

// 归并排序-非递归实现
const mergeSort2 = arr => {
    if (!arr) {
        return arr;
    }

    let N = arr.length;
    let mergeSize = 1;
    while (mergeSize < N) {
        let L = 0;
        while (L < N) {
            // L ... M 左组（mergeSize）
            let M = L + mergeSize - 1;

            // 凑不齐左组 直接退出
            if (M >= N) {
                break;
            }

            let R = Math.min(M + mergeSize, N - 1);
            merge(arr, L, M, R);
            L = R + 1;
        }

        // *防止溢出*
        // 如果N非常接近于最大数值范围，mergeSize也非常接近N了
        // 所以mergeSize在下次乘以二的时候，很容易出现溢出的问题
        if (mergeSize > N / 2) {
            break;
        }
        
        // mergeSize乘以二
        mergeSize <<= 1;
    }

    return arr;
};

let testArr = [4,9,-1,110, 48,91,-98,-71,5,8,1];
console.log(mergeSort(testArr))
console.log(mergeSort2(testArr))