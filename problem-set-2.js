/*
PROBLEM SET 2:
You are given an collection based on your language, write a few functions that perform operations on this collection. Determine with the time complexity is for each solution.

Based on your language, the collection will be in this format:
JavaScript: Array
Java: ArrayList
Python: List
Ruby: Array
Other: Dynamic Array

1) indexOf: given a collection and a target value, return the index in
which the value at the index matches the target value. If there is no
match, return -1.

2) evens: given a collection of integers, return only the even
values in a new copy of the collection

3) split: given a string of characters, return a collection with
each character separated into its own separate item.

4) sum: given a collection of integers, return the sum of them
*/

let maxLen = 20,
    len = Math.ceil(Math.random() * maxLen),
    myArr = generateRandomArray(len, maxLen);

console.log(myArr);

testIndexOf(myArr);
testEvens(myArr);

testSplit(`OwO what's this?`);

testSum(myArr);

function testIndexOf(arr) {
  let target = Math.ceil(Math.random() * 10),
      res = indexOf(arr, target);

  console.log(`index of '${target}' in 'myArr': ${
    (res > 0) ? res : 'Target does not exist in array'
  }`);
}

function testEvens(arr) {
  console.log(`evens in 'myArr': ${
    evens(arr)
  }`);
}

function testSplit(str) {
  console.log(`char array of '${str}': ${split(str)}`);
}

function testSum(arr) {
  console.log(`sum of all nums in 'myArr': ${sum(arr)}`);
}

function generateArray(length) {
  let arr = [];
  for (let i = 0; i < length; i++) arr.push(i);

  return arr;
}

function generateRandomArray(length, numMax) {
  let arr = [];
  for (let i = 0; i < length; i++) arr.push(Math.ceil(Math.random() * numMax));  
  
  return arr;
}

function indexOf(arr, trgt) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === trgt) return i;
  }

  return -1;
}

function evens(arr) {
  let newArr = [];
  for (let i of arr) {
    if (i % 2 === 0) newArr.push(i);
  }

  return (newArr.length) ? newArr : 'No evens found';
}

function split(str, excludeWhitespace) {
  let arr = [];

  for (let i of str) {
    if (excludeWhitespace) {
      if (i !== " ") arr.push(i);
    } else arr.push(i);
  }

  return arr;
}

function sum(arr) {
  let sum = 0;

  for (let i of arr) sum += i;

  return sum;
}