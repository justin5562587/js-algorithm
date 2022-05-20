// 
// 怪兽一共有hp点血量
// 一共可以砍cutTimes次
// 每次砍造成0-damage点血量的伤害
// 返回看似怪兽的概率

// -------------------暴力递归
const killMonster = (hp, cutTimes, damage) => {
    let all = Math.pow(damage + 1, cutTimes);
    let times = process(hp, cutTimes, damage);
    return times / all;
};

const process = (leftHp, leftCutTimes, damage) => {
    if (leftCutTimes === 0) {
        return leftHp <= 0 ? 1 : 0;
    }

    let ans = 0;
    for (let d = 0; d <= damage; d++) {
        ans += process(leftHp - d, leftCutTimes - 1, damage);
    }

    return ans;
};



// --------------------动态规划
const killMonsterDP = (hp, cutTimes, damage) => {
    let dp = new Array(cutTimes + 1);
    for (let i = 0; i <= cutTimes; i++) {
        dp[i] = new Array(hp + 1).fill(0);
    }

    // cutTimes === 0
    dp[0][0] = 1;

    for (let c = 1; c <= cutTimes; c++) {
        for (let h = 0; h <= hp; h++) {
            let total = 0;
            for (let d = 0; d <= damage; d++) {
                if (h - d >= 0) {
                    total += dp[c - 1][h - d];
                }
            }
            dp[c][h] = total;
        }
    }

    console.log(dp)

    let total = dp[cutTimes][hp];
    let all = Math.pow(damage + 1, cutTimes);
    return total / all;
};
killMonsterDP(3, 3, 3);
