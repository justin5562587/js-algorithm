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
    let index = dummy;
    let pairFirst = null; // 需要交换的两个节点的前一个
    let pairSecond = null; // 需要交换的两个节点的后一个
    let pairHead = null; // 需进行交换的两个节点的再前面一个
    let pairTail = null; // 需进行交换的两个节点的再后面一个

    let time = 0;
    while (index !== null) {
        console.log(`${++time} index=${index.val}`);
        // 走第一步
        if (index.next === null) {
            break;
        }
        pairHead = index;
        index = index.next;
        pairFirst = index;

        // 走第二步
        if (index.next === null) {
            break;
        }
        index = index.next;
        pairSecond = index;
        pairTail = index.next;

        // 交换逻辑
        // l1 l2 l3 l4
        // l1.next = l3
        // l2.next = l4
        // l3.next = l2
        // 走完了两步，进行交换
        pairHead.next = pairSecond;
        pairFirst.next = pairTail;
        pairSecond.next = pairFirst;

        index = pairFirst;
    }

    return dummy.next;
};
