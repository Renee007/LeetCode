<!DOCTYPE html >
<html>
<head>
</head>
<body>

<div id="demo1">
        <p>innerHTML Demo</p>
/**
 * @param {number} num
 * @return {boolean}
 */
var isPowerOfFour = function(num) {
    if(num<0||num===0)return false;
    if((num&(num-1))!==0)return false;
    num=num.toString(2);
    if(num.length%2===0)return false;
    return true;
   
};