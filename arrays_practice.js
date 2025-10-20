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


//.push() is add  one or more  element to the end of the array.
        
        let names3=["amal","mona","ali"];
        names3.push("magdi","amal");
        console.log(names3);

        //.pop()  remove the last elemnt from the array.
        let names1=["amal","mona","ali"];
        names1.pop("ali");
        console.log(names1);
        
        //.shift() remove the frst  element from an array.
        let num1=[1,2,3,5];
        num1.shift(1);
        console.log(num1);
        //.unshfit() adds one or more element at the biginning of the array.
        let clothes=["jeans","jekect","shirt"];
        clothes.unshift("scarf");
        console.log("the new array",clothes);
        //.indexOf() finds the index(postion) of an element.
        //.inclduce() checks if an element exists.
        let letters=["a","b","c"];
        console.log(letters.indexOf("b"));
        console.log(letters.includes("d"));
        //.slice (start,end) copice part of an array without changing the original array.
        //.splice (start,delete, new value) remove or adds element and change the original array.
        let numbe2=["amal","mona","ali","salih","moneiom"];
        let copy= numbe2.slice(1,4);
        console.log(copy);
        numbe2.splice(2,2,"omer");
        console.log("splice the Array:",numbe2);
        //.concat() and spread opertor(...) both are method join or combine two array togther.
        let lett1=["a","b","c",];
        let lett2=["d","f","g"];
        console.log(lett1.concat(lett2));
        console.log("",[...lett1,...lett2]);
        //Array.isAraay() uesd to check if varible is an array or not the answer will be true or false 
        let test = [1, 2, 3];
        console.log("Q18 - Is array?", Array.isArray(test));
        console.log("Q18 - Is 'hello' an array?", Array.isArray("hello"));
        let item=["book","pen"];
        console.log(Array.isArray(item));
        console.log( Array.isArray("hello"));
        //.reverse() flips the array from the end to star
        let a=["a","b","c","d"];
        a.reverse();
        console.log(a);
        //.sort() use to arrang string alphabeticlly
        //.sort() by default sort numbers as string ,so you need a compare function,always ues (a ,b)>= a-b for number
        let b=["orang","amal","book"]
        b.sort();
        console.log(b);
        let numer=[80,30,40,10];
        numer.sort((a,b)=>a-b);
        console.log(numer);
        //.toString() converts the whole array into sparated by commas.
        //.join() also connerts to astring but let us you choose the separator

        let fruits3=["apple","banana","mango"];
        console.log(fruits3.toString());
        console.log(fruits3.join("/"));
        // Q23: Remove a specific item from an array using indexOf() and splice()
        let colors2 = ["red", "green", "blue", "yellow"];
        let index = colors2.indexOf("blue");
        if (index !== -1) { colors2.splice(index, 1); }
        console.log("Q23 - After removing 'blue':", colors2);

         // Q24: Add multiple elements at once using push() or concat()
         let animals = ["dog", "cat"];
        animals.push("lion", "tiger");
        console.log("Q24 - After push():", animals);
        let birds = ["sparrow", "eagle"];
        console.log("Q24 - Using concat():", birds.concat(["parrot", "owl"]));
        // .fill() cerates or updates all element with the same value
        let mat=[1,2,3,5];
        mat.fill("a");
        console.log(mat);
        //.lastIndex() for find the last element 
        let numm=[3,6,8,9,10];
        ;
        console.log(numm.LastIndex());

          

