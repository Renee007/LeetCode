/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length!=t.length)return false;
    var arr=new Array(26);
    for(var i=0;i<arr.length;i++){
        arr[i]=0;
    }
    for( i=0;i<s.length;i++){
        arr[s.charAt(i).charCodeAt()-"a".charCodeAt()]++;
        arr[t.charAt(i).charCodeAt()-"a".charCodeAt()]--;
    }
    for( i=0;i<arr.length;i++){
        if(arr[i]!==0)return false;
    }
    return true;
};