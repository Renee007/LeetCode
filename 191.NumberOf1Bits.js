/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    var arr=n.toString(2);
    var num=0;
    for(var i=0;i<arr.length;i++){
        num+=parseInt(arr.charAt(i));
    }return num;
};