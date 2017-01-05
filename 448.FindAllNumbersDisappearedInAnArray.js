/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    var list=[];
        
        
        for(var i=0;i<nums.length;i++){
          nums[Math.abs(nums[i])-1]=-Math.abs(nums[Math.abs(nums[i])-1]);
        }
        for(var j=0;j<nums.length;j++){
            if(nums[j]>0){
                list.push(j+1);
            }
            
        }
        
        return list;
    
};