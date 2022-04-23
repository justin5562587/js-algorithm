// 选择排序

const arr = [9, 100, -10, 490, 78, 6];


const selectSort = (arr) => {
    console.log('原始数组', arr)
    if (arr.length <= 1) {
        return arr;
    }

    for (let i = 1; i < arr.length; i++) {
        let insertValue = arr[i];
        let insertIndex = i - 1;
    
        // insertValue < arr[insertIndex] 从小到大排列
        while (insertIndex >= 0 && insertValue < arr[insertIndex]) {
            arr[insertIndex + 1] = arr[insertIndex];
            insertIndex--; 
        }

        // 当退出while循环时候，说明插入为止已经找到 insertIndex + 1
        if (insertIndex + 1 != i) {
            arr[insertIndex + 1] = insertValue;
        }
    
        console.log(`第${i}轮结果`, arr);
    }

    return arr;
}

const main = () => {
    selectSort(arr);
};

export default main;
