/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  if(n==1)return 1;
  if(n==2)return 2;
  var arr=[];
  arr[0]=1;arr[1]=2;
  for(var i=2;i<n;i++){
      arr[i]=arr[i-1]+arr[i-2];
  }  return arr[i-1];
};