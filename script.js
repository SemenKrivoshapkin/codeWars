Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

  function descendingOrder(n){
    const x = String(n).split('').sort((a,b)=>b-a).join('');
    return Number(x)
  }


You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

  const i = Math.floor(s.length / 2);
  let result = s[i];  
  if(s.length % 2 === 0 && i > 0) {
    result = s[i-1] + result;
  }
  return result;


This time no story, no theory. The examples below show you how to write function accum:

  function accum(s) {
    const result = []
    const lowerStr = s.toLowerCase()
  
    for(let i = 0; i < lowerStr.length; i++) {
      let str = lowerStr[i].toUpperCase()
      for(let j = 0; j < i; j++) {
        str += lowerStr[i]
      }
      result.push(str)
    }
  
    return result.join("-")
  }


You like building blocks. You especially like building blocks that are squares. And what you even like more, is to arrange them into a square of square building blocks!
However, sometimes, you can't arrange them into a square. Instead, you end up with an ordinary rectangle! Those blasted things! If you just had a way to know, whether you're currently working in vain… Wait! That's it! You just have to check if your number of building blocks is a perfect square.

var isSquare = function(n){
  let numchk;
  for(let i = 0; i < n+1; i++){
    numchk = n/i;
    if(i === numchk){
    return true;
    }
  }
  if(n<0){
  return false
  } else if(numchk==1) {
  return false
  } else {
  return true
  }

}


In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

  function filter_list(l) {
    return l.filter(x => typeof x === 'number');
  }


An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.


function isIsogram(str){
  var i, j;
    str = str.toLowerCase();
    for(i = 0; i < str.length; ++i) {
      for(j = i + 1; j < str.length; ++j) {
        if(str[i] === str[j]) {
          return false;
        }
      }
    }
    return true;
 }