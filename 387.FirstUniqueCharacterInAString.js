/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    var arr=new Array(26);
    for( i=0;i<arr.length;i++){
        arr[i]=0;
    }
 
    for( i=0;i<s.length;i++){
        arr[s.charAt(i).charCodeAt()-"a".charCodeAt()]++;
    }
    for( i=0;i<s.length;i++){
        if( arr[s.charAt(i).charCodeAt()-"a".charCodeAt()]==1) return i;
    }
    return -1;
};