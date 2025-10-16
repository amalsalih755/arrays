// JavaScript Arrays – Practice Answers



// Q1: What is an array in JavaScript?
// An array is a special variable that can store multiple values in one place.
// Examples of real-life data that can be stored in arrays: student names, prices of products, and exam scores.


// Q2: How do you create an array?
let fruits = ["apple", "banana", "mango"]; // Using []
let numbers = new Array(10, 20, 30); // Using new Array()
let colors = []; // Empty array and adding values
colors[0] = "red";
colors[1] = "blue";
colors[2] = "green";

console.log("Arrays:", fruits, numbers, colors);


// Q3: What data types can you store inside an array?
let mixedArray = [23, "Hello", true, 45.6, "JavaScript"];
console.log("Mixed Array:", mixedArray);


// Q4: Difference between an array and a single variable
let name = "Amal"; // single variable
let names = ["Amal", "Sara", "Omar"]; // array
console.log("Q4 Single variable:", name);
console.log("Array:", names);


// Q5: How do you access specific items from an array?
let fruitsList = ["apple", "banana", "cherry"];
console.log("Q5 First element:", fruitsList[0]);
console.log("Last element:", fruitsList[fruitsList.length - 1]);


// Q6: How do you change a value in an array?
let colorList = ["red", "blue", "green"];
colorList[1] = "purple"; // change blue to purple
console.log("Changed Array:", colorList);


// Q7: What does .length do?
let numList = [10, 20, 30, 40];
console.log("Number of items:", numList.length);


// Q8: Add a new element to the end without using .push()
let animals = ["cat", "dog", "bird"];
animals[animals.length] = "elephant"; // add new item
console.log("Updated animals:", animals);


// Q9: Using loops with arrays
let fruitsArray = ["apple", "banana", "cherry"];

console.log("Q9 - for loop:");
for (let i = 0; i < fruitsArray.length; i++) {
  console.log(fruitsArray[i]);
}

console.log("for...of loop:");
for (let fruit of fruitsArray) {
  console.log(fruit);
}

console.log("while loop:");
let i = 0;
while (i < fruitsArray.length) {
  console.log(fruitsArray[i]);
  i++;
}


// Q10: Print all numbers multiplied by 2
let nums = [2, 4, 6, 8];
console.log("Numbers multiplied by 2:");
for (let i = 0; i < nums.length; i++) {
  console.log(nums[i] * 2);
}


// Q11: Print each name in uppercase
let studentNames = ["amal", "sara", "noor"];
console.log("Uppercase names:");
for (let i = 0; i < studentNames.length; i++) {
  console.log(studentNames[i].toUpperCase());
}


// Q12: Count items without using .length
let numberList = [5, 10, 15, 20];
let count = 0;
for (let item of numberList) {
  count++;
}
console.log("Number of items:", count);


// Q13: Find the largest and smallest numbers in an array
let values = [12, 45, 7, 89, 23];
let largest = values[0];
let smallest = values[0];

for (let i = 1; i < values.length; i++) {
  if (values[i] > largest) largest = values[i];
  if (values[i] < smallest) smallest = values[i];
}

console.log("Largest number:", largest);
console.log("Smallest number:", smallest);
