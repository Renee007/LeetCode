/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    if(n<=0)return false;
    if(n==1)return true;
    if(n%2==1)return false;
    else{
        var text=1;
        while(text<n){
        text*=2;
        if(text==n)return true;
        if(text>n)return false;
    }
    }
    
    
};