// 问题：
// 1表示A 2表示B 3表示C .... 26表示Z
// 所以111可以表示AAA AK KA
// 请问提供一个数字给你，有多少种转化方式

const convertStringToLetter = (numStr) => {
    return process(numStr, 0);
};

// 0...index-1已经被尝试过了
// index...numStr.length-1 还没有被尝试过
// 如果走到了index===numStr.length 说明所有index已经被尝试完成 有效解+1
const process = (numStr, index) => {
    // 表示已经用完了所有字符 认为是一个转发方法
    if (index === numStr.length) {
        return 1;
    }

    // 单个位置的0无法自我解析
    if (numStr[index] === '0') {
        return 0;
    }

    let ways = process(numStr, index + 1);
    if (index + 1 < numStr.length && parseInt(numStr.substr(index, 2)) < 27) {
        ways += process(numStr, index + 2);
    }
    
    return ways;
};

convertStringToLetter('111')

const dp = (numStr) => {
    if (numStr == null || numStr == '') {
        return 0;
    }

    return dpProcess(0);
};

const dpProcess = () => {

};
