// 2. Write a JavaScript function that checks whether a passed string is palindrome or not? 
// A palindrome is a word, phrase, or sequence that reads the same backward as forward, e.g.,
//  madam or nurses run.

// anonymous function
var palindrome=function(xyz)
{
    console.log(b=xyz.split('').reverse().join('') )
}
var a='skill qode'
console.log(palindrome(a))
if (a=b)
{
    console.log("palindrome")
}
else
{
    console.log("not palindrome")
}

// arrow function
var palindrome=(xyz)=>
{
    console.log(b=xyz.split('').reverse().join('') )
}
var a='skill qode'
console.log(palindrome(a))
if (a=b)
{
    console.log("palindrome")
}
else
{
    console.log("not palindrome")
}
