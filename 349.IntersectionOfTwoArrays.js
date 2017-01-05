/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
   var nums1s=nums1.sort(function(a,b){return(a-b)});
    var nums2s=nums2.sort(function(a,b){return(a-b)});
    var result=[];
    var i=0;
    while(i<nums1s.length-1){
        if(nums1s[i]==nums1s[i+1]){
            nums1s.splice(i,1);
        }else{
            i++;
        }
    }
    i=0;
    while(i<nums2s.length-1){
        if(nums2s[i]==nums2s[i+1]){
            nums2s.splice(i,1);
        }else{
            i++;
        }
    }
    i=0;j=0;
    while(i<nums1s.length&&j<nums2s.length){
        if(nums1s[i]==nums2s[j]){
            result.push(nums1s[i]);
            i++;
            j++;
        }
        else if(nums1s[i]>nums2s[j]){
            j++;
        }
        else{
            i++;
        }
    }
    return result;
};