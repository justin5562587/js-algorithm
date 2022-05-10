// 哈诺塔问题

// 经典实现
class Hanoi {
    constructor() {}

    doHanoi(n) {
        if (n > 0) {
            this.leftToRight(n);
        }
    }

    leftToRight(n) {
        if (n == 1) {
            console.log("Move 1: left to right");
            return;
        }
        this.leftToMid(n - 1);
        console.log(`Move ${n}: left to right`);
        this.midToRight(n - 1);
    }

    leftToMid(n) {
        if (n == 1) {
            console.log("Move 1: left to mid");
            return;
        }
        this.leftToRight(n - 1);
        console.log(`Move ${n}: left to mid`);
        this.rightToMid(n - 1);
    }

    rightToMid(n) {
        if (n == 1) {
            console.log("Move 1: right to mid");
            return;
        }
        this.rightToLeft(n - 1);
        console.log(`Move ${n}: right to mid`);
        this.leftToMid(n - 1);
    }

    rightToLeft(n) {
        if (n == 1) {
            console.log("Move 1: right to left");
            return;
        }
        this.rightToMid(n - 1);
        console.log(`Move ${n}: right to left`);
        this.midToLeft(n - 1);
    }

    midToLeft(n) {
        if (n == 1) {
            console.log("Move 1: mid to left");
            return;
        }
        this.midToRight(n - 1);
        console.log(`Move ${n}: mid to left`);
        this.rightToLeft(n - 1);
    }

    midToRight(n) {
        if (n == 1) {
            console.log("Move 1: mid to right");
            return;
        }
        this.midToLeft(n - 1);
        console.log(`Move ${n}: mid to right`);
        this.leftToRight(n - 1);
    }

}

// 抽线实现
class Hanoi2 {
    constructor() {}

    doHanoi2(n) {
        if (n > 0) {
            this.process(n, "Left", "Right", "Middle");
        }
    }

    // 最终目标是from to
    // 第一步先把0-N-1 从from移动到other
    // 第二步再把N从from移动到to
    // 第三步再把N-1 从other移动到to
    process(n, from, to, other) {
        if (n == 1) {
            console.log(`Move ${n}: ${from}->${to}`);
        } else {
            this.process(n - 1, from, other, to);
            // console.log(`Move ${n}: ${from}->${other}`);
            console.log(`Move ${n}: ${from}->${to}`);
            this.process(n - 1, other, to, from);
        }
    }
}

let hh = new Hanoi();
hh.doHanoi(3);

console.log();

let hhh = new Hanoi2();
hhh.doHanoi2(3);
