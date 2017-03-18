/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var arr=[];
    for(var i=0;i<nums.length;i++){
        if(arr.indexOf(nums[i])!=-1){
        	return [arr.indexOf(nums[i]),i]
        }
        var newnum=target-nums[i];
        arr.push(newnum);
    }
};	
