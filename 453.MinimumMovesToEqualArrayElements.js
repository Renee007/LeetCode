/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function(nums) {
     var result=0;
     var min=Math.min.apply(null,nums);
  for(var i=0;i<nums.length;i++){
    result+=(nums[i]-min);
  }
  return result;
};