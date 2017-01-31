/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
     var arr=[];
   var i=0;
   var j=0;
   var judge=false;
    while(i<nums1.length){
        
        while(j<nums2.length){
            if(nums1[i]==nums2[j]){
                arr.push(nums1[i]);
                nums1.splice(i,1);
                nums2.splice(j,1);
                judge=false;break;
            }else{
                j++;
                judge=true;
            }
        }

        if(judge||nums2.length===0)i++;j=0;
    }
    return arr;
};