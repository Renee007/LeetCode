/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    var arr=[];
    for(var i=0;i<nums.length;i++){
        arr[nums[i]]=1;
    }
    for(i=0;i<arr.length;i++){
        if(arr[i]===undefined)break;
    }
    return i
};