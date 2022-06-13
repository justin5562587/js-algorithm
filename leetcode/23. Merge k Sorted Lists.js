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
// 递归进行partition
var mergeKLists = function(lists) {
    if (!lists) {
        return lists;
    }

    if (lists.length === 1) {
        return lists[0];
    }

    return process(lists, 0, lists.length - 1);
};

const process = (lists, L, R) => {
    if (L > R) return null;
    if (L === R) return lists[L];

    // L < R
    let mid = L + ((R - L) >> 1);
    let a = process(lists, L, mid);
    let b = process(lists, mid + 1, R);
    let dummy = new ListNode('dummy');
    let current = dummy;
    while (a && b) {
        if (a.val < b.val) {
            current.next = a;
            a = a.next;
        } else {
            current.next = b;
            b = b.next;
        }
        current = current.next;
    }
    current.next = a || b;
    
    return dummy.next;
};

// 常规迭代
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

