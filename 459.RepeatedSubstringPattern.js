/**
 * @param {string} str
 * @return {boolean}
 */
var repeatedSubstringPattern = function(str) {
      if(str.length==1)return false;
      var newstr=str+str;
      newstr=newstr.substring(1,str.length*2-1);
      return newstr.indexOf(str)!=-1;
};