/**
 * @param {number} n
 * @return {boolean}
 */
var ifInclude=[];
var isHappy = function(n) {
    var num=0;
    while(n>=1)
            {
                var  r = n%10;
                num += r*r;
                n =  Math.floor(n/10);
            }
    if(num==1)return true
    else if(ifInclude.indexOf(num)!=-1)return false
    else {
        ifInclude.push(num);
        return isHappy(num);
        }
};