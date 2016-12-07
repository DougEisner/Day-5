// // EXERCISE 1 ------------------

function addNumbers(numberA, numberB) {
  var twoPlusTwo = numberA + numberB
// RETURN NEEDED TO SPECIFY WHAT DATA FUNCTION WILL RETURN
  return twoPlusTwo;
}
console.log(addNumbers(50, 60))


// EXERCISE 2 --------------------
// Write a function called yell that logs out an uppercase version of a string.

function yell (str) {
  return str.toUpperCase ()
}
var x = "my yell function converted this sentence to uppercase!"
console.log (yell(x));

// Write a function called yell10 that uses your yell function to log out an uppercase version of a string 10 times.

function yell10 (ten) {
  return ten.repeat(10);
}
var timesByTen = (yell(x))
console.log(yell10(timesByTen));

// EXERCISE 3 --------------------
// Write a function called longest that returns the longest of two input strings or arrays.
//
function longest (str1, str2) {
  var x = str1.length;
  var y = str2.length;
  if (x > y) {
    return str1 }
  else {
    return str2}
}
//
// console.log(longest("pea", "peanut butter"));

// // EXERCISE 4 -------------------------
// // Write a function called isVowel that takes a character (i.e. a string of length 1) and returns true
// if it is a vowel, uppercase or lowercase. The function should return false if the character is not a vowel.

function isVowel (check) {
  var vowels = "aeiouAEIOU";
  var isVowel = vowels.indexOf(check) >= 0? true: false;

  return isVowel;
}

console.log(isVowel("b"));
