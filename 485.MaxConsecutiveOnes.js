/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    var max=0;
    var count=0;
    for(var i=0;i<nums.length;i++){
        if(nums[i]==1){
            count+=1;
            
        }else{
            if(max<count)max=count;
            count=0;
        }
    }
    if(max<count)max=count;
    return max
};