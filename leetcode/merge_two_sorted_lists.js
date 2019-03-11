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
var mergeTwoLists = function(l1, l2) {
  const lists = [];

  if (!l1 && !l2) {
    return null;
  } else if (!l1) {
    openList(l2, lists);
  } else if (!l2) {
    openList(l1, lists);
  } else {
    openList(l1, lists);
    openList(l2, lists);
  }


  return lists.sort((a, b) => a - b);

  function openList(list, container) {
    container.push(list.val);

    if (!list.next) {
      return container;
    } else {
      return openList(list.next, container);
    }
  }
