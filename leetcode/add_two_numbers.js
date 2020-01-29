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

// more proper solution

function addTwoNumbers(l1, l2) {

  return addTwoLists(l1, l2)

  function addTwoLists(l1, l2, remainer = 0) {
    if (!l1 && !l2 && !remainer) {
      return null
    };

    const sum = (l1 && l1.val || 0) + (l2 && l2.val || 0) + remainer;
    const newRemainer = Math.floor(sum / 10);
    const newVal = sum % 10;

    const nextL1 = l1 ? l1.next : null;
    const nextL2 = l2 ? l2.next : null;

    return {
      val: newVal,
      next: addTwoLists(nextL1, nextL2, newRemainer)
    }

  }  
}
