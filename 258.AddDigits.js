/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
  var a="";
  if(num===0){
      a=0;
  }
  else if(num%9===0){
      a=9;
  }
  else{
      a=num%9;
  }
  return a;
};