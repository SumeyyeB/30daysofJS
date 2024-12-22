//! 💻 Exercise
//? Exercise: Level 1
// 1. Declare an empty array;
const arr = Array();
console.log(arr);

const arr2 = [];
console.log(arr2);

let arr1 = new Array();
console.log(arr1);

// 2. Declare an array with more than 5 number of elements
let familyMembers = [
  "Sebiha",
  "Mustafa",
  "Selen",
  "Oguzhan",
  "Sumeyye",
  "Nisa",
  "Asel",
];
console.log(familyMembers);

// 3. Find the length of your array
console.log("Members of my family:", familyMembers.length);

// 4. Get the first item, the middle item and the last item of the array
let firstItem = familyMembers[0];
console.log(firstItem);

let lastItem = familyMembers[familyMembers.length - 1];
console.log(lastItem);

let middleIndex = Math.floor(familyMembers.length / 2);
let middleItem = familyMembers[middleIndex];
console.log(middleItem);

// 5. Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
const mixedDataTypes = [true, 0, "", " ", NaN, false, "Hallo!", 2, undefined];
console.log(mixedDataTypes.length);

// 6. Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
const itCompanies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];

// 7. Print the array using console.log()
console.log("IT Companies:", itCompanies);

// 8. Print the number of companies in the array
console.log("Number of companies:", itCompanies.length);

// 9. Print the first company, middle and last company
let firstCompany = itCompanies[0];
console.log("First Company:", firstCompany);

let lastCompany = itCompanies[itCompanies.length - 1];
console.log("Last Company:", lastCompany);

let middleCompany = itCompanies[Math.floor(itCompanies.length / 2)];
console.log("Middle Company:", middleCompany);

// 10. Print out each company
itCompanies.forEach((company) => console.log(company));

// 11. Change each company name to uppercase one by one and print them out
itCompanies.forEach((company) => console.log(company.toUpperCase()));

// 12. Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
let sentence =
  itCompanies.slice(0, -1).join(", ") +
  " and " +
  itCompanies[itCompanies.length - 1] +
  " are big IT companies.";
console.log(sentence);

// 13. Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
let index = itCompanies.indexOf("IBM");
if (index === -1) {
  console.log("a company is not found");
} else {
  console.log(`Company ${itCompanies[index]} is found`);
}

//!!!!! 14. Filter out companies which have more than one 'o' without the filter method

// 15. Sort the array using sort() method
itCompanies.sort();
console.log(itCompanies);

// 16. Reverse the array using reverse() method
itCompanies.reverse();
console.log(itCompanies);
// 17. Slice out the first 3 companies from the array
console.log(itCompanies.slice(0, 3));

// 18. Slice out the last 3 companies from the array
console.log(itCompanies.slice(-3));

// 19. Slice out the middle IT company or companies from the array
console.log(itCompanies.slice(3, 4));
// console.clear();
// console.log(itCompanies);
// 20. Remove the first IT company from the array
itCompanies.shift();
console.log(itCompanies);
// 21. Remove the middle IT company or companies from the array
itCompanies.splice(3, 4);
console.log(itCompanies);
// 22. Remove the last IT company from the array
itCompanies.pop();
console.log(itCompanies);
// 23. Remove all IT companies
itCompanies.splice(0, itCompanies.length);
console.log(itCompanies);

console.clear();
//? Exercise: Level 2
// 1. Create a separate countries.js file and store the countries array in to this file, create a separate file web_techs.js and store the webTechs array in to this file. Access both file in main.js file
//! Bazı egzersizler main dosyası içerisinde.

// 2. First remove all the punctuations and change the string to array and count the number of words in the array

let  text =

'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'

console.log(words)

console.log(words.length)

// 3. In the following shopping cart add, remove, edit items

// 4. In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.

// 5. In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.

// 6. Concatenate the following two variables and store it in a fullStack variable.

//? Exercise: Level 3
// 1. The following is an array of 10 students ages:
// 2. Find the middle country(ies) in the countries array

// 3. Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.
