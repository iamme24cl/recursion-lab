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

// Given an array and an index, write a recursive function to add up the elements of an array.

 function addUpTo(array, idx) {
  return idx ? array[idx] + addUpTo(array, idx - 1) : array[idx]
 }


// Write a recursive function to find the largest integer in an array.

function maxOf(array) {
  if (array.length === 1) {
    return array[0]
  } else {
    return Math.max(array.pop(), maxOf(array))
  }
}

// Write out a function to see if an array includes a given element

function includesNumber(array, element) {
  if (array.length > 0) {
    if (array[0] === element) {
      return true;
    } else {
      return includesNumber(array.slice(1), element)
    }
  }
  return false;
} 