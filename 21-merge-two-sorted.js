/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

// arraye cevir, sirala, teze arrayi linked liste cevir
//
//

var mergeTwoLists = function (list1, list2) {
    const array = []
    let current = list1
    while (current !== null) {
        array.push(current.val)
        current = current.next
    }
    current = list2
    while (current !== null) {
        array.push(current.val)
        current = current.next
    }

    if (array.length == 0) {
        return null
    } 
    array.sort((a, b) => a - b)
    let dummy = new ListNode(array[0])
    console.log(dummy)
    current = dummy
    for (let i = 1; i < array.length; i++) {
        current.next = new ListNode(array[i])
        current = current.next
    }
    return dummy

};