

// 分治算法 处理汉诺塔问题
const divideConquer = arr => {
    
};

const hannouTower = (num, a, b, c) => {
    if (num == 1) {
        console.log(`从${a}->${c}`);
    } else {
        // 如果存在的塔房数量大于，则进行分治 1，将最底下一个看作一体 2.将除了最底下一个的其他所有看成一个

        // a移动到b 中间需要借助c
        hannouTower(num - 1, a, c, b);
        // 把最底下一体的一部分从a移动到c
        console.log(`从${a}->${c}`);
        // b移动到c,中间需要接触a
        hannouTower(num - 1, b, a, c);
    }
};


hannouTower(3, "a", "b", "c");