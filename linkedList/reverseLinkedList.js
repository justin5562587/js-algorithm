class SNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

// 反转单链表
const reverseSingleLinkedList = (head) => {
    let pre = null;
    let next = null;
    while (head !== null) {
        next = head.next;
        head.next = pre;
        pre = head;
        head = next;
    }
    return pre;
}
const reverse = (head) => {
    let pre = null;   
    let next = null;
    while (head !== null) {
        next = head.next;
        head.next = pre;
        pre = head;
        head = next;
    }
    return pre;
};

class DNode {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.last = null;
    }
}

// 反转双链表
const reverseDoubleLinkedList = (head) => {
    let pre = null;
    let next = null;
    while (head !== null) {
        next = head.next;
        head.next = pre;
        head.last = next;
        pre = head;
        head = next;
    }
    return pre;
};
const reverse2 = (head) => {
    let pre = null;
    let next = null;
    while (head !== null) {
        next = head.next;
        head.next = pre;
        head.last = next;
        pre = head;
        head = next;
    }
    return pre;
};