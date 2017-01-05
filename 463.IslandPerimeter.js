/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
  var count=0;
        var sum=0;
        for(var i=0;i<grid.length;i++){
            for(var j=0;j<grid[i].length;j++){
                sum+=grid[i][j];
                if(j<(grid[i].length-1)){if(grid[i][j]==1&&grid[i][j+1]==1){
                    count+=1;
                }}
                if(i<(grid.length-1)){if(grid[i][j]==1&&grid[i+1][j]==1){
                    count+=1;
                }}
                
            }
        }
        return (sum*4-count*2);
};