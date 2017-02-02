/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if(prices.length===0)return 0;
    var max=prices[0];
    var min=prices[0];
    var tempMin=prices[0];
    for(var i=1;i<prices.length;i++){
        if((prices[i]-tempMin)>(max-min)){
           max=prices[i];
           min=tempMin;
        }
        else if((max-prices[i])>(max-tempMin)){
            tempMin=prices[i];
        }
        
    }
    return (max-min);
};