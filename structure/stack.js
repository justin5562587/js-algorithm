// 栈的实现
class Stack {
    constructor( ) {
        this.content = [];
    }

    // 往栈中压入元素
    push(element) {
        this.content.push(element);
    }

    // 查看当前栈顶元素
    peek() {
        if (!this.isEmpty()) {
            return this.content[this.content.length - 1];
        }
        return null;
    }

    // 从栈顶弹出一个元素
    pop() {
        if (!this.isEmpty()) {
            return this.content.pop();
        }
        return null;
    }
    
    // 是否为空
    isEmpty() {
        return this.content.length === 0;
    }

    // 查看栈中元素数量
    size() {
        return this.content.length;
    }
}


// for test
let stack = new Stack();
console.log(stack.isEmpty());

stack.push("justin001");
stack.push("justin002");
stack.push("justin003");

console.log(stack.pop());
console.log(stack.size())

console.log(stack.peek());
console.log(stack.size());

console.log(stack.pop());
console.log(stack.size())

console.log(stack.pop());
console.log(stack.size());

console.log(stack.pop());




