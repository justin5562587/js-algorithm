// https://leetcode.com/problems/add-two-numbers/
// Add Two Numbers

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let head = null;
    let current = null;
    let carry = 0;
    let sum;
    let node;

    while (l1 || l2) {
        let val1 = l1 ? l1.val : 0;
        let val2 = l2 ? l2.val : 0;
        sum = val1 + val2 + carry;
        // 加完进位后进位清零
        carry = 0;
        if (sum >= 10) {
            carry = 1;
            sum = sum % 10;
        }
        if (head === null) {
            head = new ListNode(sum);
            current = head;
        } else {
            node = new ListNode(sum);
            current.next = node;
            current = node;
        }

        l1 = l1 ? l1.next : null;
        l2 = l2 ? l2.next : null;
    }

    if (carry !== 0) {
        current.next = new ListNode(1);
    }

    return head;
};
