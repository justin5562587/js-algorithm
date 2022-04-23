// 冒泡排序

const arr = [9, 100, -10, 490, 78, 6];

const bubbleSort = (arr) => {
    console.log('原始数组', arr)
    if (arr.length <= 1) {
        return arr;
    }
    
    for (let i = 1; i < arr.length; i++) {
        let insertValue = arr[i];
        let insertIndex = i - 1;
    
        while (insertIndex >= 0 && insertValue < arr[insertIndex]) {
            arr[insertIndex + 1] = arr[insertIndex];
            insertIndex--; 
        }
        arr[insertIndex + 1] = insertValue;
    
        console.log(`第${i}轮结果`, arr);
    }

    return arr;
}

const main = () => {
    bubbleSort(arr);
};

export default main;
