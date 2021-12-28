// 1. Write a JavaScript function that reverse a number. 
// Example x = 32243;
// Expected Output : 34223


// var reverse=(num)=> String(num).split("").reverse().join("");
// console.log(reverse(32243))

const reverse1=function(num)
{
    var a;
    a=String(num).split("").reverse().join("")
    return a;
};
console.log(reverse1(32243))