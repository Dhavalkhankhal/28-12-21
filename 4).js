// 4. Write a JavaScript function that returns a passed string with letters in alphabetical order. 
// Example string : 'webmaster'
// Expected Output : 'abeemrstw'
// Assume punctuation and numbers symbols are not included in the passed string.

// anonymous function
var sorting=function(str)
{
    console.log(str.split('').sort().join(''));
}
console.log(sorting('webmaster'))

// arrow function
var sorting=(str)=>str.split('').sort().join('');
console.log(sorting('webmaster'))
