
// 快速排序
const quickSort = (arr, left, right) => {
    let l = left; // 左边下标
    let r = right; // 右边下标
    let pivot = arr[parseInt((right + left) / 2)];
    console.log(pivot)
    let temp;

    while (l < r) {
        
        // 直到找到一个在左边 且 大于等于pivot的数据
        while (arr[l] < pivot) {
            l += 1;
        }
        // 直到找到一个在右边 且 小于等于pivot的数据
        while (arr[r] > pivot) {
            r -= 1;
        }

        // 如果上述while过后，l大于等于r的话，说明数据已经超过了pivot所在的index
        // 左边数据满足全部都小于等于pivot
        // 右边数据满足全部都大于等于pivot
        if (l >= r) {
            break;
        }

        // 交换
        temp = arr[l];
        arr[l] = arr[r];
        arr[r] = temp;

        console.log(`l=${l} r=${r}`);

        // 如果交换完成后，发现arr[l] == pivot
        if (arr[l] == pivot) {
            r -= 1;
        }
        if (arr[r] == pivot) {
            l += 1;
        }
    }

    if (l == r) {
        l += 1;
        r -= 1;
    }
    
    if (left < r) {
        quickSort(arr, left, r);
    }
    if (right > l) {
        quickSort(arr, l, right);
    }

};

export default quickSort;