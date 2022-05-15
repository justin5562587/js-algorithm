// 1表示A 2表示B 3表示C .... 26表示Z
// 所以111可以表示AAA AK KA
// 请问提供一个数字给你，有多少种转化方式

const convertStringToLetter = (numStr) => {
    let ans = [];
    return process(numStr, 0);
};

// 0...index已经被尝试过了
// index...numStr.length-1 还没有被尝试过
// 如果走到了index===numStr.length 说明所有index已经被尝试完成 有效解+1
const process = (numStr, index) => {
    // 超过numStr可用范围 无效解
    if (index > numStr.length) {
        return 0;
    }
    // 表示已经用完了所有字符 认为是一个转发方法
    if (index === numStr.length) {
        return 1;
    }

    // 下方表示还没有检查完毕所有numStr

    if (numStr.substr(index, 1) === '0') {
        return 0;
    }

    // 如果当前数字字符为1
    if (numStr.substr(index, 1) === '1') {
        return process(numStr, index + 1) + process(numStr, index + 2);
    }
 
    // 如果当前数字字符为2
    if (numStr.substr(index, 1) === '2') {        
        let nextIndexChar = numStr.substr(index + 1, 1);
        if (nextIndexChar && Number(nextIndexChar) <= 6) {
            return process(numStr, index + 1) + process(numStr, index + 2);
        }

        return process(numStr, index + 1);
    }

    // 如果当前数字字符不是1和2
    return process(numStr, index + 1);
};

convertStringToLetter('111')

const dp = () => {

};
