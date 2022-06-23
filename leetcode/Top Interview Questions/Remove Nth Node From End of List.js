// https://leetcode.com/problems/remove-nth-node-from-end-of-list/
// Remove Nth Node From End of List

// 单向链表一个比较基本的操作
// 1.在原始头部前面增加一个dummy的额外头部
// 2.设置fast,slow两个指针指向dummy
// 3.让fast指针移动n次
// 4.让fast，slow指针同时移动，并增加pre指针每次记录slow之前的节点，当fast移动到null的位置，则slow所在的位置就是要被删除的节点
// 5.slow的位置是要被删除的节点，则直接pre.next=slow.nexxt绕过slow极表示删除
// 6.如果pre为dummy节点位置，则表示要被删除的节点为头节点

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    if (!head) {
        return head;
    }

    let dummy = new ListNode('dummy', head);
    let fast = dummy;
    let slow = dummy;
    let pre = null;
    while (n > 0) {
        fast = fast.next;
        n--;
    }

    while (fast !== null) {
        fast = fast.next;
        pre = slow;
        slow = slow.next;
    }

    // 表示要删除头节点，则直接返回head.next
    if (pre.val === 'dummy') {
        return head.next;
    } else {
        pre.next = slow.next;
    }

    return head;
};

