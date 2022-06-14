// https://leetcode.com/problems/reverse-nodes-in-k-group/
// 25. Reverse Nodes in k-Group

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
    // k<2，length<2不满足条件直接返回
    if (k < 2 || !head || !head.next) {
        return head;
    }

    let left = k;
    let dummy = new ListNode('dummy', head);
    let current = dummy;
    let preOfReverseList = null;
    let nextOfReverseList = null;
    while (current !== null) {
        preOfReverseList = current;
        while (left > 0) {
            if (current === null) {
                break;
            }

            current = current.next;
            left--;
        }
        // 先保存current.next的后续引用
        nextOfReverseList = current ? current.next : null;
        // 截断
        if (current) {
            current.next = null;
        }

        let reverseHead = preOfReverseList.next;
        let info = reverseSingleLinkedList(reverseHead);
        preOfReverseList.next = info[0];
        // info[1].next = nextOfReverseList; 
        if (reverseHead) {
            reverseHead.next = nextOfReverseList;
        }

        left = k;
        current = info[1];
    }

    return dummy.next;
};

// 反转单链表
// 返回反转后的head和tail
const reverseSingleLinkedList = (head) => {
    let tail = head;
    let pre = null;
    let next = null;
    while (head !== null) {
        next = head.next;
        head.next = pre;
        pre = head;
        head = next;
    }
    return [pre, tail];
};
