/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    var i=0;
    var j=0;
    var count=0;
    g.sort(function(a,b){return a - b});
    s.sort(function(a,b){return a - b});
    while(i<g.length&&j<s.length){
        if(g[i]<=s[j]){
            count+=1;
            i++;
            j++;
        }
        else{
            j++;
        }
    }
    return count;
};