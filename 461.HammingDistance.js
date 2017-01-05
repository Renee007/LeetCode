/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
      
        
            var num=0;
            var arrMin=Math.min(x,y).toString(2).split("");
            var arrMax=Math.max(x,y).toString(2).split("");
            var zeroNum=arrMax.length-arrMin.length;
            if (arrMax.length!=arrMin.length){
                for(var j=0;j<zeroNum;j++){arrMin.unshift(0)}
            }
                for(var i=0;i<arrMax.length;i++)
                {
                if(arrMin[i]!=arrMax[i]){num+=1}
            }
            return num;
            
};  