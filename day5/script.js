//! Arrays [], mutable(modifiable)

const numbers = [0, 3.14, 9.81, 37, 98.6, 100];
const webTechs = ["HTML", "CSS", "JS", "React", "Redux", "Node", "MongDB"];

console.log("Numbers:", numbers);
console.log("Number of numbers:", numbers.length);

console.log("Web technologies:", webTechs);
console.log("Number of web technologies:", webTechs.length);

// **************************************************************************

const arr = [
  "Sumeyye",

  23,

  true,

  { country: "Turkiye", city: "Kocaeli" }, // Object

  { skills: ["HTML", "CSS", "JS", "React", "Python"] },
]; // arr containing different data types

console.log(arr);

// *****************************************************************************

//? Creating an array using split

let js = "JavaScript";
const charsInJavaScript = js.split("");
console.log(charsInJavaScript);

let companiesString = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
const companies = companiesString.split(",");
console.log(companies);

let txt =
  "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";
const words = txt.split(" ");
console.log(words);

//? Accessing array items using index

const fruits = ["banana", "orange", "mango", "lemon"];
let firstFruit = fruits[3];
console.log(firstFruit);

let lastIndex = fruits.length - 1;
lastFruit = fruits[lastIndex];
console.log(lastFruit);

// ************************************************************

const numbers1 = [0, 3.14, 9.81, 37, 98.6, 100];
console.log(numbers1.length);
console.log(numbers1);
console.log(numbers1[0]);

//? Modifying array element

const numbers2 = [1, 2, 3, 4, 5];
numbers2[0] = 10;
numbers2[1] = 20;
console.log(numbers2);
// ********************************************************
const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];

countries[0] = "Afghanistan";
let lastIndex2 = countries.length - 1;
countries[lastIndex2] = "Korea";
console.log(countries);

//? Methods to manipulate array
// These are some of the available methods to deal with arrays: Array, length, concat, indexOf, slice, splice, join, toString, includes, lastIndexOf, isArray, fill, push, pop, shift, unshift

//* Array Constructor
// **Array

const arr1 = Array(); // creates an an empty array
console.log(arr1);

const eightEmptyValues = Array(8); // it creates eight empty values
console.log(eightEmptyValues); // [empty x 8]

//** Creating static values with fill

const eightXvalues = Array(8).fill("X"); // it creates eight element values filled with 'X'
console.log(eightXvalues); // ['X', 'X','X','X','X','X','X','X']

const four4values = Array(4).fill(4); // it creates 4 element values filled with '4'
console.log(four4values); // [4, 4, 4, 4]

//** Concatenating array using concat

const firstList = [1, 2, 3];
const secondList = [4, 5, 6];
const thirdList = [7, 8, 9];
const result = firstList.concat(secondList, thirdList, 10, 11, 12);
console.log(result);

//** Getting array length

const numbers3 = [1, 2, 3, 4, 5];
console.log(numbers3.length);

//**  Getting index an element in arr array (indexOf)
const numbers4 = [1, 2, 3, 4, 5];

console.log(numbers4.indexOf(5));
console.log(numbers4.indexOf(0));

// let us check if a banana exist in the array

const fruits1 = ["banana", "orange", "mango", "lemon"];
let index = fruits1.indexOf("banana"); // 0

if (index === -1) {
  console.log("This fruit does not exist in the array");
} else {
  console.log("This fruit does exist in the array");
}

// we can use also ternary here
index === -1
  ? console.log("This fruit does not exist in the array")
  : console.log("This fruit does exist in the array");

// let us check if an avocado exist in the array
let indexOfAvocado = fruits1.indexOf("avocado");
if (indexOfAvocado === -1) {
  console.log("This fruit does not exist in the array");
} else {
  console.log("This fruit does exist in the array");
}
// This fruit does not exist in the array

const numbers5 = [1, 2, 3, 4, 5, 3, 1, 2];

console.log(numbers5.lastIndexOf(2)); // 7
console.log(numbers5.lastIndexOf(6)); // -1

//** includes

const webTechs1 = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];

console.log(webTechs1.includes("Node")); // true
console.log(webTechs1.includes("C")); // false

//** Checking array (Array.isArray:To check if the data type is an array)
const numbers6 = [1, 2, 3, 4, 5];
console.log(Array.isArray(numbers6)); // true

const number = 100;
console.log(Array.isArray(number)); // false

//** Converting array to string (toString:Converts array to string)

const numbers7 = [1, 2, 3, 4, 5];
console.log(numbers7.toString()); // 1,2,3,4,5

const names = ["Asabeneh", "Mathias", "Elias", "Brook"];
console.log(names.toString()); // Asabeneh,Mathias,Elias,Brook

//** Joining array elements (join)

const numbers8 = [1, 2, 3, 4, 5];
console.log(numbers8.join()); // 1,2,3,4,5

const names1 = ["Asabeneh", "Mathias", "Elias", "Brook"];
console.log(names1.join());
console.log(names1.join("")); //AsabenehMathiasEliasBrook
console.log(names1.join(" ")); //Asabeneh Mathias Elias Brook
console.log(names1.join(", ")); //Asabeneh, Mathias, Elias, Brook
console.log(names1.join(" # ")); //Asabeneh # Mathias # Elias # Brook

//**Slice array elements (Slice)

const numbers9 = [1, 2, 3, 4, 5];

console.log(numbers9.slice()); // -> Bütün öğeyi kopyalar
console.log(numbers9.slice(0)); // -> Bütün öğeyi kopyalar
console.log(numbers9.slice(0, numbers9.length)); // Bütün öğeyi kopyalar
console.log(numbers9.slice(1, 4)); // -> [2,3,4] // son elemanı dahil etmez

//** Splice method in array
/* Splice: It takes three parameters:
1. Starting position
2. number of times to be removed 
3. number of items to be added. */

const numbersOne = [1, 2, 3, 4, 5];
numbersOne.splice();
console.log(numbersOne); // -> remove all items

const numbersTwo = [1, 2, 3, 4, 5];
numbersTwo.splice(0, 1);
console.log(numbersTwo); // remove the first item

const numbersThree = [1, 2, 3, 4, 5, 6];
numbersThree.splice(3, 3, 7, 8, 9);
console.log(numbersThree.splice(3, 3, 7, 8, 9)); // -> [1, 2, 3, 7, 8, 9] //2 eleman kaldırdı ve yerine 3 eleman ekledi
console.log(numbersThree);

//** Adding item to an array using push (Push) => (adding item in the end.)

const numbersFour = [1, 2, 3, 4, 5];
numbersFour.push(6);
console.log(numbersFour); // -> [1,2,3,4,5,6]

//** Removing the end element using pop. (pop: Removing item in the end.)
numbersFour.pop(); // -> remove one item from the end
console.log(numbersFour); // -> [1,2,3,4,5]

//**Removing an element from the beginning. (shift)
const numbersFive = [1, 2, 3, 4, 5];
numbersFive.shift(); // -> remove one item from the beginning
console.log(numbersFive); // -> [2,3,4,5]

//** Add an element from the beginning.(unshift)
const numbersSix = [1, 2, 3, 4, 5];
numbersSix.unshift(0); // -> add one item from the beginning
console.log(numbersSix); // -> [0,1,2,3,4,5]

//** Reversing array order (reverse)
const numbersSeven = [1, 2, 3, 4, 5];
numbersSeven.reverse(); // -> reverse array order
console.log(numbersSeven); // [5, 4, 3, 2, 1]

numbersSeven.reverse();
console.log(numbersSeven); // [1, 2, 3, 4, 5]

//** Sorting elements in array (sort) => Callback function ile kullanılır. İlerleyen bölümde 👌
const webTechs3 = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];

webTechs3.sort();
console.log(webTechs3); // ["CSS", "HTML", "JavaScript", "MongoDB", "Node", "React", "Redux"]

webTechs3.reverse(); // after sorting we can reverse it
console.log(webTechs3); // ["Redux", "React", "Node", "MongoDB", "JavaScript", "HTML", "CSS"]

//** Array of arrays
const firstNums = [1, 2, 3];
const secondNums = [1, 4, 9];

const arrayOfArray = [
  [1, 2, 3],
  [3, 4, 5],
];
console.log(arrayOfArray[0]); // [1, 2, 3]

const frontEnd = ["HTML", "CSS", "JS", "React", "Redux"];
const backEnd = ["Node", "Express", "MongoDB"];
const fullStack = [frontEnd, backEnd];
console.log(fullStack); // [["HTML", "CSS", "JS", "React", "Redux"], ["Node", "Express", "MongoDB"]]
console.log(fullStack.length); // 2
console.log(fullStack[0]); // ["HTML", "CSS", "JS", "React", "Redux"]
console.log(fullStack[1]); // ["Node", "Express", "MongoDB"]
