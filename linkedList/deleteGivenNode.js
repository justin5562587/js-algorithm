// 删除单链表中所有value为nodeValue的节点
const deleteSingleLinkedListNode = (head, nodeValue) => {
    if (head === null) {
        return;
    }
 
    // head来到第一个不需要删的位置
    while (head !== null) {
        if (head.value !== nodeValue) {
            break;
        }
        head = head.next;
    }

    let pre = head;
    let cur = head;
    while (cur.value !== null) {
        if (cur.value === nodeValue) {
            pre.next = cur.next;
        } else {
            pre = cur;
        }
        cur = cur.next;
    }

    return head;
};

// 删除双链表中所有value为nodeValue的节点
const deleteDoubleLinkedListNode = (head, nodeValue) => {
    if (head === null) {
        return;
    }

    // 找到第一个不被删除的节点，将它作为头部，并设置他的last为null
    while (head !== null) {
        if (head.value !== nodeValue) {
            break;
        }
        head = head.next;
    }
    head.last = null;

    let pre = head;
    let cur = head;
    while (cur !== null) {
        if (cur.value === nodeValue) {
            if (cur.next !== null) {
                pre.next = cur.next;
                cur.next.prev = pre;
            } else {
                pre.next = null;
            }
        } else {
            pre = cur;
        }

        cur = cur.next;
    }

    return head;
};
