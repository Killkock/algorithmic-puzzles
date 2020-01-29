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
 
// the solution doesnt work with long numbers (>30 digits)
var addTwoNumbers = function(l1, l2) {
    return generateListFromValue(getValueFromList(l1) + getValueFromList(l2));
    
    
    function getValueFromList(list) {
        console.log(recursive(list).split("").reverse().join(""))
        return Number(recursive(list).split("").reverse().join(""));
        
        
        function recursive(l) {
            if (!l) {
                return '';
            }
            
            return l.val + recursive(l.next);
        }
    }
    
    function generateListFromValue(value) {
        const str = String(value).split("").reverse().join("");
        return generateList(str);
        
        function generateList(str) {
            if (!str) {
                return null;
            }
            
            return {
                val: str[0],
                next: generateList(str.slice(1))
            }
        }
    }
};
