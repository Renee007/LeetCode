/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
   if(nums.length==1)return nums[0];
    var i=0;
    while((i+1)<nums.length){
        if(nums[i]!=nums[i+1]){
        nums.splice(i,2);   
        }
        else i++;
    }
    var main = nums[0]; // 用于记录主元素，假设第一个是主元素
    var count = 1; // 用于抵消数的个数

        for ( i = 1; i < nums.length; i++) { // 从第二个元素开始到最后一个元素
            if (main == nums[i]) { // 如果两个数相同就不能抵消
                count++; // 用于抵消的数据加1
            } else {
                if (count > 0) { // 如果不相同，并且有可以抵消的数
                    count--; // 进行数据抵消
                } else { // 如果不相同，并且没有可以抵消的数
                    main = nums[i]; // 记录最后不可以抵消的数
                }
            }
        }
        return main;
};