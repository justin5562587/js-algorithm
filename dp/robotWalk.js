// 机器人运动问题

// 有一排位置 1~N
// 如果当前在位置1 下一次只能移动到2
// 如果当前在位置N 下一次只能移动到N-1
// 初始位置在startPos
// 目标位置在targetPos
// 请问有多少方法

// --------------------暴力递归
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

    if (currentPos === 1) {
        return walk(N, restStep - 1, 2, targetPos);
    }

    if (currentPos === N) {
        return walk(N, restStep - 1, N - 1, targetPos);
    }

    return walk(N, restStep - 1, currentPos - 1, targetPos) + walk(N, restStep - 1, currentPos + 1, targetPos);
};
getRobotWalk(5, 4, 3, 3);



// --------------------暴力递归+缓存
const getRobotWalkWithCache = (N, restStep, startPos, targetPos) => {
    // 因为只有N restStep这两个可变参数，所以设置一个二维数组的缓存表，避免重复计算
    let cache = new Array(N + 1); // 位置的可变范围是1-N, 0位置可以忽略
    cache.fill(new Array(restStep + 1)); // 剩余步数的可变范围是0-restStep

    return walkWithCache(N, restStep, startPos, targetPos, cache);
};

const walkWithCache = (N, restStep, currentPos, targetPos, cache) => {
    if (cache[currentPos][restStep]) {
        return cache[currentPos][restStep];
    }

    let ans;
    if (restStep === 0) {
        ans = currentPos === targetPos ? 1 : 0;
    } else if (currentPos === 1) {
        ans = walkWithCache(N, restStep - 1, 2, targetPos, cache);
    } else if (currentPos === N) {
        ans = walkWithCache(N, restStep - 1, N - 1, targetPos, cache);
    } else {
        ans = walkWithCache(N, restStep - 1, currentPos - 1, targetPos, cache) + walkWithCache(N, restStep - 1, currentPos + 1, targetPos, cache);
    }

    cache[currentPos][restStep] = ans;
    return ans;
};

// --------------------动态规划
const getRobotWalkWithDP = (N, restStep, startPos, targetPos) => {
    let dp = new Array(N + 1); // 位置的可变范围是1-N, 0位置可以忽略
    for (let pos = 0; pos <= N; pos++) {
        dp[pos] = new Array(restStep + 1).fill(-1); // 剩余步数的可变范围是0-restStep
    }

    // restStep为0的时候，只有位置和targetPos相等才为1 其他都为0
    for (let pos = 1; pos <= N; pos++) {
        dp[pos][0] = pos === targetPos ? 1 : 0;
    }
    for (let step = 1; step <= restStep; step++) {
        for (let pos = 1; pos <= N; pos++) {
            if (pos === 1) {
                dp[pos][step] = dp[2][step - 1];
            } else if (pos === N) {
                dp[pos][step] = dp[N - 1][step - 1];
            } else {
                dp[pos][step] = dp[pos - 1][step - 1] + dp[pos + 1][step - 1];
            }
        }
    }

    return dp[startPos][restStep];
};
getRobotWalkWithDP(5, 4, 3, 3);

