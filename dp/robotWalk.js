// 机器人运动问题

// 有一排位置 1~N
// 如果当前在位置1 下一次只能移动到2
// 如果当前在位置N 下一次只能移动到N-1
// 初始位置在startPos
// 目标位置在targetPos
// 请问有多少方法
const getRobotWalk = (N, restStep, startPos, targetPos) => {
    let ans = 0;
    ans = walk(N, restStep, startPos, targetPos, ans);
    return ans;
};

const walk = (N, restStep, currentPos, targetPos) => {
    // 如果没有剩余步数了
    if (restStep === 0) {
        return (currentPos === targetPos) ? 1 : 0;
    }

    restStep -= 1;

    if (currentPos === 1) {
        return walk(N, restStep, 2, targetPos);
    }

    if (currentPos === N) {
        return walk(N, restStep, N - 1, targetPos);
    }

    return walk(N, restStep, currentPos - 1, targetPos) + walk(N, restStep, currentPos + 1, targetPos);
};

// --------------------使用缓存避免重复计算
const getRobotWalkWithCache = (N, restStep, startPos, targetPos) => {
    // 因为只有N restStep这两个可变参数，所以设置一个二维数组的缓存表，避免重复计算
    let cache = new Array(N + 1);
    cache.fill(new Array(restStep + 1));
};

const walkWithCache = (N, restStep,currentPos, targetPos, cache) => {
    if (cache[restStep][currentPos] !== -1) {
        return cache[restStep][currentPos];
    }
};

// --------------------使用动态缓存法直接推算出并填充所有缓存表的方法
const getRobotWalkWithDP = (N, restStep, startPos, targetPos) => {
    let cache = new Array(N + 1);
    cache.fill(new Array(restStep + 1));

    

};

const dp = () => {

};

getRobotWalk(5, 4, 3, 3);



