// 从小到大排列
// 只能处理整数
const radixSort = arr => {
    if (arr.length <= 1) {
        return arr;
    }

    // 找出最大的数字
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        };
    }
    // 找出最大的位数
    let maxLength = (max + "").length;

    // 初始化存放数据的桶
    // 每次子数字的长度其实为arr.length 由于js是动态数组 所以不特殊申明
    let buckets = [];
    for (let i = 0; i < 10; i++) {
        buckets[i] = new Array(arr.length).fill(0);
    }
    // 申明一个数组 标识每个bucket中子数组的个数
    let bucketElementCounts = new Array(10).fill(0);

    for (let len = 0, n =1; len < maxLength; len += 1, n *= 10) {
        for (let i = 0; i < arr.length; i++) {
            // 获取当前个位数
            let bucketIndex = parseInt(arr[i] / n % 10);
            // 从buckets中找到对应的桶并插入
            buckets[bucketIndex][bucketElementCounts[bucketIndex]] = arr[i];
            // 对应桶的数量+1
            bucketElementCounts[bucketIndex]++;
        }
    
        // 将所有桶里头的数据还原到arr中去
        let insertIndex = 0;
        for (let i = 0; i < 10; i++) {
            if (bucketElementCounts[i] > 0) {
                for (let k = 0; k < bucketElementCounts[i];  k++) {
                    arr[insertIndex] = buckets[i][k];
                    buckets[i][k] = 0;
                    insertIndex++;
                }
                // 取完所有数据后清零
                bucketElementCounts[i] = 0;
            }
        }
        console.log(`第${len+1}轮处理后`, arr);
    }

};

export default radixSort;