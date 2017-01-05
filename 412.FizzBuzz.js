/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    var list=[];
        for(var i=1;i<n+1;i++){
            if(i%3!==0&&i%5!==0){
                list[i-1]=i.toString();
            }
            else if(i%3===0&&i%5!==0){
                list[i-1]="Fizz";
            }
            else if(i%3!==0&&i%5===0){
                list[i-1]="Buzz";
            }
            else if(i%3===0&&i%5===0){
                list[i-1]="FizzBuzz";
            }
        }
        return list;
};