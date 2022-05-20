// 问题：
// 给定一个整型数组arr来表示所有扑克牌
// 玩家a 和 玩家b 每次只能从数组的左右两边拿走一张牌
// 两个玩家都绝顶聪明，问先手和后手的人 谁能获取最后的胜利

const win1 = (arr) => {
    if (!arr) {
        return -1;
    }

    return Math.max(
        first(arr, 0, arr.length - 1),
        second(arr, 0, arr.length - 1)
    );
};

const first = (arr, L, R) => {
    if (L === R) {
        return arr[L];
    }

    let score1 = arr[L] + second(arr, L + 1, R);
    let score2 = arr[R] + second(arr, L, R - 1);
    return Math.max(score1, score2);
};

const second = (arr, L, R) => {
    if (L === R) {
        return 0;
    }

    let score1 = first(arr, L + 1, R);
    let score2 = first(arr, L, R  - 1);
    return Math.min(score1, score2);
};
win1([1,100,89,45,71])