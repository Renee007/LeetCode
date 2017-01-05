/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
    
     var count=0;
    for(var i=0;i<s.length;i++){
        
        count=count+Math.pow(26,(s.length-i-1))*(1+s.charAt(i).toLowerCase().charCodeAt()-"a".charCodeAt());
       
    }
    return count;
};