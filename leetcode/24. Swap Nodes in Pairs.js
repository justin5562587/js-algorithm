// https://leetcode.com/problems/swap-nodes-in-pairs/
// Swap Nodes in Pairs

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    if (!head) {
        return null;
    }

    let dummy = new ListNode('dummy', head);
    let slow = dummy;
    let fast = dummy;
    while (fast != null) {

    }

    return dummy.next;
};

const swapNode = (node1, node2) => {
    // l1 l2 l3 l4
    // l1.next = l3
    // l2.next = l4
    // l3.next = l2

    // 
};
