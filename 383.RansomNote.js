/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
     if (ransomNote.length > magazine.length) {
            return false;
        }
    var r= new Array(26);
    var m= new Array(26);
    for (var i = 0; i < r.length; i++) {
     r[i]=0;m[i]=0;
     }
    for( i=0;i<ransomNote.length;i++){
        r[ransomNote.charAt(i).charCodeAt()-'a'.charCodeAt()]++;
    }
    for(var j=0;j<magazine.length;j++){
        m[magazine.charAt(j).charCodeAt()-'a'.charCodeAt()]++;
    }
     for ( i = 0; i < r.length; i++) {
            if (r[i] > m[i]) {// 判断第一个数组中的每一个是否有大于第二个数组的值
                return false;
            }
           
 }
 return true;
};