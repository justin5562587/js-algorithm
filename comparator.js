// 生成随机数组
// 数组长度是[0, maxSize - 1]
// 数组所有数值的范围是[0, maxValue - 1]
const generateRandomArr = (maxSize, maxValue) => {
    // 使用异或将浮点数转化为整数
    let len = (0 ^ Math.random() * maxSize);
    let arr = new Array(len);
    for (let i = 0; i < len; i++) {
        arr[i] = (0 ^ Math.random() * maxValue);
    }

    return arr;
};

// 拷贝新数组
const copyArr = arr => {
    return arr.concat();
};

// 测试两个数组是否长度和所有数据全等
const isSameArr = (arr1, arr2) => {
    let len1 = arr1.length;
    let len2 = arr2.length;
    if (len1 !== len2) {
        return false;
    }

    for (let i = 0; i < len1; i++) {
        let index = len1[i];
        if (arr1[index] !== arr2[index]) {
            return false;
        }
    }

    return true;
};

// 判断数组是否升序
const isAscendingArr = arr => {
    if (!arr) return false;
    if (arr.length <= 1) return true;

    for (let i = 0; i < arr.length - 1; i++) {
        // 如果前一个大于后一个 则违反升序规则
        if (arr[i] > arr[i + 1]) {
            return false;
        }
    }

    return true;
};

// 判断数组是否降序
const isDescendingArr = arr => {
    if (!arr) return false;
    if (arr.length <= 1) return true;

    for (let i = 0; i < arr.length - 1; i++) {
        // 如果前一个小于后一个 则违反降序规则
        if (arr[i] < arr[j + 1]) {
            return false;
        }
    }

    return true;
};

// 测试排序结果是否正确
/*
    @param sortFun
*/
const validateSortWay = (sortFun, isAscending = true, testTimes = 10, maxSize = 100, maxValue = 100) => {
    for (let i = 0; i < testTimes; i++) {
        let randomArr = generateRandomArr(maxSize, maxValue);
        let copiedArr = copyArr(randomArr);
        let sortedArr = sortFun(randomArr);
        let isValid;
        if (isAscending) {
            isValid = isAscendingArr(sortFun);
        } else {
            isValid = isDescendingArr(sortFun);
        }

        if (!isValid) {
            console.log("排序验证错误-------------");
            if (sortedArr.length <= 50) {
                console.log("排序前", copiedArr);
                console.log("排序后", sortedArr);
            }
            return false;
        }
    }

    return true;
};

// 测试两种排序方法后的结果是否保持一致
const testSortedArr = () => {

};