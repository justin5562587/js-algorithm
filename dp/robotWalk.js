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

getRobotWalk(5, 4, 3, 3);
