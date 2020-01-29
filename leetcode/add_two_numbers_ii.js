/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    
    return generateListFromArray(sumTwoArrays(getArrayFromList(l1), getArrayFromList(l2)));
    
    function generateListFromArray(array) {
        return recursive(array);
        
        function recursive(arr) {
            if (!arr.length) {
                return null;
            }
            
            return {
                val: arr.shift(),
                next: recursive(arr)
            }
        }
    }
    
    function sumTwoArrays(a1, a2) {
        return recursive(a1, a2)
        
        function recursive(a1, a2, remainer = 0) {
            if (!a1.length && !a2.length && !remainer) {
                return [];
            }
            
            const sum = (a1.pop() || 0) + (a2.pop() || 0) + remainer;
            const newRemainer = Math.floor(sum / 10);
            const newVal = sum % 10;
            
            return [...recursive(a1, a2, newRemainer), newVal]
        }
    }
    
    function getArrayFromList(list) {
        return recursive(list);
        
        function recursive(l, array = []) {
            if (!l) {
                return array;
            }
            
            return recursive(l.next, [...array, l.val]);
        }
    }
};
