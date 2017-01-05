/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumOfLeftLeaves = function(root) {
     if (root === null)  
            return 0;  
     else if (root.left === null && root.left.right === null  ) {  
            return root.val ;  
        } 
     else if(root.left!==null)
      
};