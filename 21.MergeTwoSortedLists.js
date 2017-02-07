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
    var newl=new ListNode();
        if(l1===null&l2===null)return newl=null;
        if(l2===null||l1!==null&&l1.val<=l2.val){
            newl.val=l1.val;
            l1=l1.next;
        }else if(l1===null||l1.val>l2.val){
            newl.val=l2.val;
            l2=l2.next;
        }
        if(l1===null&l2===null) { newl.next=null;return newl;}
        else if(l2===null||l1!==null&&l1.val<=l2.val){
            newl.next=l1;
            newl.next.val=l1.val;
            l1=l1.next;
        }else if(l1===null||l1.val>l2.val){
            newl.next=l2;
            newl.next.val=l2.val;
            l2=l2.next;
        }
    var head=newl;
    newl=newl.next;
    while(l1||l2){
        if(l2===null||l1!==null&&l1.val<=l2.val){
            newl.next=l1;
            newl.next.val=l1.val;
            l1=l1.next;
            newl=newl.next;
        }else if(l1===null||l1.val>l2.val){
            newl.next=l2;
            newl.next.val=l2.val;
            l2=l2.next;
            newl=newl.next;
        }
    }
    newl.next=null;
    return head;
};