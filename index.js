// Code your solution here!

// Write a recursive function to print out all of the characters in a string

function  printString(string) {
  console.log(string[0]);

  if (string.length > 1) {
    let subString = string.substring(1, string.length);
    printString(subString);
  } else {
    return true;
  }
}

// Write out a recursive function to reverse a string

function reverseString(string) {
  return string ? reverseString(string.substr(1)) + string[0] : string;
}

// Write out a recursive fucntion to see if a word is a Palindrome

function isPalindrome(string) {
  // string = string.replace(/[^a-z0-9]/i, '').toLowerCase();

  if (string.length <= 1) return true;
  if (string[0] !== string[string.length -1]) return false;

  return isPalindrome(string.slice(1, -1));
}