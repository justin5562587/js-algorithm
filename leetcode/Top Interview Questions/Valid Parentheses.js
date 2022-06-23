// https://leetcode.com/problems/valid-parentheses/
// Valid Parentheses

// 用Stack去记录括号的右半部分，然后依次取出对比
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let arr = [];
    for (let c of s) {
        if (c === '(') { 
            arr.push(')');
        } else if (c === '{') {
            arr.push('}');
        } else if (c === '[') {
            arr.push(']');
        } else if (arr.length === 0 || arr.pop() !== c) {
            return false;
        }
    }

    return arr.length === 0;
}

// ----

var isValid = function(s) {
    let stack = new Stack();
    for (let c of s) {
        if (c === '(') {
            stack.push(')');
        } else if (c === '[') {
            stack.push(']');
        } else if (c === '{') {
            stack.push('}');
        } else if (stack.isEmpty() || stack.pop() !== c) {
            return false;
        }
    }

    return stack.isEmpty();
};

class Stack {
    constructor() {
        this.content = [];
    }

    isEmpty() {
        return this.content.length === 0;
    }

    push(element) {
         this.content.push(element);
    }

    pop() { 
        if (this.content.length > 0) {
            return this.content.pop();
        }
        return null;
    }
}
