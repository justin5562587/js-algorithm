// https://leetcode.com/problems/merge-k-sorted-lists/
// Merge k Sorted Lists

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    if (!lists) {
        return lists;
    }

    if (lists.length === 1) {
        return lists[0];
    }

    let dummy = new ListNode('dummy');
    let head = dummy;
    for (let list of lists) {
        dummy = mergeTwoLists(list, dummy);
    }

    return head.next;
};

const mergeTwoLists = (l1, l2) => {
    let dummy = new ListNode('dummy');
    let head = dummy;
    
    while (l1 && l2) {
        if (l1.val <= l2.val) {
            dummy.next = l1;
            l1 = l1.next;
        } else {
            dummy.next = l2;
            l2 = l2.next;
        }
        dummy = dummy.next;
    }

    dummy.next = l1 || l2;

    return head.next;
};


