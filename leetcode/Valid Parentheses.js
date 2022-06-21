// https://leetcode.com/problems/valid-parentheses/
// Valid Parentheses

/**
 * @param {string} s
 * @return {boolean}
 */
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
