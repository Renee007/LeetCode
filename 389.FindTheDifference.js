/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    var result=false;
    var ss=s.split("").sort();
    var ts=t.split("").sort();
    for(var i=0;i<ss.length;i++){
        if(ss[i]!==ts[i])
            {result= ts[i];break;}
    }
    if(result){return result;}
    else{return ts[ss.length];}
};