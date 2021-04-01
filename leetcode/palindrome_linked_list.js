/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    const arr = [];
    
    let currentNode = head;
    
    while (currentNode) {
        arr.push(currentNode.val);
        currentNode = currentNode.next;
    }
    
    for (let i = 0; i < Math.floor(arr.length / 2); i++) {
        const first = arr[i];
        const last = arr[arr.length - 1 - i];
        
        if (first !== last) {
            return false;
        }
    }
    
    return true;
};
