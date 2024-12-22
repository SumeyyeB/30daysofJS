//! 💻 Exercises
//? Exercises: Level 1

// 1. Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.

// let age = Number(prompt("Enter your age:"));
// if (age >= 18) {
//   console.log("You are old enough to drive.");
// } else {
//   let yearsLeft = 18 - age;
//   console.log(`You are left with ${yearsLeft} years to drive.`);
// }

// 2. Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.

// let myAge = 25;
// let yourAge = Number(prompt("Enter your age:"));

// if (yourAge > myAge) {
//   let difference = yourAge - myAge;
//   console.log(`You are ${difference} years older than me.`);
// }else if(yourAge < myAge){
//     let difference = myAge - yourAge;
//     console.log(`I am ${difference} years older than you.`);
// }else {
//     console.log("We are same age.");
// }

// 3. If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways

let a = 5;
let b = 5;

// if (a > b) {
//   console.log("a is greater than b.");
// } else if (a < b) {
//   console.log("a is less than b.");
// } else {
//   console.log("a equal to b.");
// }

console.log(
  a > b ? "a is greater than b." : a < b ? "a is less than b." : "a equal to b."
);

// 4. Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?

// let number = Number(prompt("Enter number:"));
// if (number % 2 === 0) {
//   console.log(`${number} is an even number.`);
// } else {
//   console.log(`${number} is a odd number.`);
// }

//? Exercises: Level 2
// 1. Write a code which can give grades to students according to theirs scores:

// let grade = Number(prompt("Enter your student mark:"));
// if (grade >= 80) {
//   console.log("A");
// } else if (grade >= 70) {
//   console.log("B");
// } else if (grade >= 60) {
//   console.log("C");
// } else if (grade >= 50) {
//   console.log("D");
// } else {
//   console.log("F");
// }

// 2. Check if the season is Autumn, Winter, Spring or Summer. If the user input is :

// let month = prompt("Enter a month:").toLowerCase();

// if (month === "september" || month === "october" || month === "november") {
//   console.log("The season is Autumn.");
// } else if (
//   month === "december" ||
//   month === "january" ||
//   month === "february"
// ) {
//   console.log("The season is Winter.");
// } else if (month === "march" || month === "april" || month === "may") {
//   console.log("The season is Spring.");
// } else if (month === "june" || month === "july" || month === "august") {
//   console.log("The season is Summer.");
// } else {
//   console.log("Invalid month entered. Please try again.");
// }

// 3. Check if a day is weekend day or a working day. Your script will take day as an input.

// let day = prompt(" What is the day  today?").toLowerCase();

// if (
//   day === "monday" ||
//   day === "tuesday" ||
//   day === "wednesday" ||
//   day === "thursday" ||
//   day === "friday"
// ) {
//   console.log(`${day} is a working day`);
// } else if (day === "saturday" || day === "sunday") {
//   console.log(`${day} is a weekend.`);
// } else {
//   console.log("Not a day. Try again.");
// }

//!!!!!!!!!!!!!!! Exercises: Level 3
// 1. Write a program which tells the number of days in a month.
// 2. Write a program which tells the number of days in a month, now consider leap year.

