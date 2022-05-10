// 队列的实现
// FIFO(first in first out)先进先出
class Queue {
    constructor() {
        this.content = [];
    }

    // 向队列尾部添加元素
    add(element) {
        this.content.push(element);
    }

    // 查看队列的首部元素
    peek() {
        if (!this.isEmpty()) {
            return this.content[0];
        }
        return null;
    }

    // 查看队列尾部元素
    peekTail() {
        if (!this.isEmpty()) {
            return this.content[this.content.length - 1];
        }
        return null;
    }

    // 弹出队列的首部元素
    poll() {
        if (!this.isEmpty()) {
            return this.content.shift();
        }
        return null;
    }

    isEmpty() {
        return this.content.length === 0;
    }
}