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
    if (!head || (head && head.next === null)) {
        return head;
    }

    let dummy = new ListNode('dummy', head);
    let current = dummy;
    let pairFirst = null; // 需要交换的两个节点的前一个
    let pairSecond = null; // 需要交换的两个节点的后一个
    let pairHead = null; // 需进行交换的两个节点的再前面一个
    let pairTail = null; // 需进行交换的两个节点的再后面一个

    while (current !== null) {
        // console.log(`${++time} current=${current.val}`);
        // 走第一步
        if (current.next === null) {
            break;
        }
        pairHead = current;
        current = current.next;
        pairFirst = current;

        // 走第二步
        if (current.next === null) {
            break;
        }
        current = current.next;
        pairSecond = current;
        pairTail = current.next;

        // 交换逻辑
        // l1 l2 l3 l4
        // l1.next = l3
        // l2.next = l4
        // l3.next = l2
        // 走完了两步，进行交换
        pairHead.next = pairSecond;
        pairFirst.next = pairTail;
        pairSecond.next = pairFirst;

        // 因为交换后，第一个节点变成了第二个节点，重新设置current
        current = pairFirst;
    }

    return dummy.next;
};
