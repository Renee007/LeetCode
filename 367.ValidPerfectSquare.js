/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    num=(Math.sqrt(num)*10);
    if((num-parseInt(num))!==0)return false;
    return true;
};