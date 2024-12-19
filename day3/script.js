//! Boolean Values
// let isLightOn = true
// let isRaining = false
// let isHungry = false
// let isMarried = true
// let trueValue = 4 > 3
// let falseValue = 4 < 3

//! Falsy values
// 0
// 0n
// null
// undefined
// NaN
// the boolean false
// '', "", ``, empty string

//! Undefined
let firstName;
console.log(firstName); //not defined, because it is not assigned to a value yet

let empty = null;
console.log(empty); // -> null , means no value

//! Operators
// Assignment operators

let first_Name = "Sumeyye";
let country = "TURKIYE";
console.log((first_Name += " " + country));

//! Arithmetic Operators
// Addition(+): a + b
// Subtraction(-): a - b
// Multiplication(*): a * b
// Division(/): a / b
// Modulus(%): a % b
// Exponential(**): a ** b

let numOne = 4;
let numTwo = 3;
let sum = numOne + numTwo;
let diff = numOne - numTwo;
let mult = numOne * numTwo;
let div = numOne / numTwo;
let remainder = numOne % numTwo;
let powerOf = numOne ** numTwo;

console.log(sum, diff, mult, div, remainder, powerOf); // 7,1,12,1.33,1, 64

const PI = 3.14;
let radius = 100; // length in meter

//Let us calculate area of a circle
const areaOfCircle = PI * radius * radius;
console.log(areaOfCircle); //  314 m

const gravity = 9.81; // in m/s2
let mass = 72; // in Kilogram

// Let us calculate weight of an object
const weight = mass * gravity;
console.log(weight); // 706.32 N(Newton)

const boilingPoint = 100; // temperature in oC, boiling point of water
const bodyTemp = 37; // body temperature in oC

// Concatenating string with numbers using string interpolation
/*
 The boiling point of water is 100 oC.
 Human body temperature is 37 oC.
 The gravity of earth is 9.81 m/s2.
 */
console.log(
  `The boiling point of water is ${boilingPoint} oC.\nHuman body temperature is ${bodyTemp} oC.\nThe gravity of earth is ${gravity} m / s2.`
);

//! Comparison Operators

console.log(3 > 2); // true, because 3 is greater than 2
console.log(3 >= 2); // true, because 3 is greater than 2
console.log(3 < 2); // false,  because 3 is greater than 2
console.log(2 < 3); // true, because 2 is less than 3
console.log(2 <= 3); // true, because 2 is less than 3
console.log(3 == 2); // false, because 3 is not equal to 2
console.log(3 != 2); // true, because 3 is not equal to 2
console.log(3 == "3"); // true, compare only value
console.log(3 === "3"); //? false, compare both value and data type
console.log(3 !== "3"); // true, compare both value and data type
console.log(3 != 3); // false, compare only value
console.log(3 !== 3); // false, compare both value and data type
console.log(0 == false); // true, equivalent
console.log(0 === false); // false, not exactly the same
console.log(0 == ""); // true, equivalent
console.log(0 == " "); // true, equivalent
console.log(0 === ""); // false, not exactly the same
console.log(1 == true); // true, equivalent
console.log(1 === true); // false, not exactly the same
console.log(undefined == null); // true
console.log(undefined === null); // false
console.log(NaN == NaN); // false, not equal
console.log(NaN === NaN); // false
console.log(typeof NaN); // number

console.log("mango".length == "avocado".length); // false
console.log("mango".length != "avocado".length); // true
console.log("mango".length < "avocado".length); // true
console.log("milk".length == "meat".length); // true
console.log("milk".length != "meat".length); // false
console.log("tomato".length == "potato".length); // true
console.log("python".length > "dragon".length); // false

//? Logical Operators
// && ampersand operator example

const check1 = 4 > 3 && 10 > 5; // true && true -> true
const check2 = 4 > 3 && 10 < 5; // true && false -> false
const check3 = 4 < 3 && 10 < 5; // false && false -> false

// || pipe or operator, example

const check4 = 4 > 3 || 10 > 5; // true  || true -> true
const check5 = 4 > 3 || 10 < 5; // true  || false -> true
const check6 = 4 < 3 || 10 < 5; // false || false -> false

//? Negation examples  (! => negation)

let check7 = 4 > 3; // true
let check8 = !(4 > 3); //  false
let isLightOn = true;
let isLightOff = !isLightOn; // false
let isMarried = !false; // true

//! Increment Operator
//? 1.Pre-increment
let count = 0;
console.log(++count); // 1
console.log(count); // 1

//? 2.Post-increment
let count1 = 0;
console.log(count1++); // 0
console.log(count1); // 1

//! Decrement Operator
//? 1.Pre-decrement
let count2 = 0;
console.log(--count2); // -1
console.log(count2); // -1

//? 2.Post-decrement
let count3 = 0;
console.log(count3--); // 0
console.log(count3); // -1

//! Ternary Operators

let isRaining = true;
isRaining
  ? console.log("You need a rain coat.")
  : console.log("No need for a rain coat.");
isRaining = false;

isRaining
  ? console.log("You need a rain coat.")
  : console.log("No need for a rain coat.");

//   You need a rain coat.
// No need for a rain coat.

let number = 5;
number > 0
  ? console.log(`${number} is a positive number`)
  : console.log(`${number} is a negative number`);
number = -5;

number > 0
  ? console.log(`${number} is a positive number`)
  : console.log(`${number} is a negative number`);

//   5 is a positive number
// -5 is a negative number

//? ÖRNEK 1
const age = 15;
const result = age <= 12 ? "Çocuk" : age <= 19 ? "Genç" : "Yetişkin";
console.log(result);

//? ÖRNEK 2
const score = 85;
const mark =
  score >= 90
    ? "A"
    : score >= 80
    ? "B"
    : score >= 70
    ? "C"
    : score >= 60
    ? "D"
    : "F";
console.log(mark);

//! Window Methods
//? Window alert() method
// alert("Merhaba");

// let message= "selam"
// alert(message)

//? Window prompt() method
// prompt("Bir sayı giriniz", "Pozitif olmalı")

// let number1 = prompt("Enter number", "number goes here");
// console.log(number1);

//? Window confirm() method

// const agree = confirm("Are you sure you like to delete? ");
// console.log(agree); // true||false döner.

// let message1 = confirm("Kırmızı kabloyu kesmek istediğine emin misin?");
// let result1= message1 ? "Bumm" : "Doğru tercih";
// console.log(result1);

//! Date Object
// getFullYear()
// getMonth()
// getDate()
// getDay()
// getHours()
// getMinutes
// getSeconds()
// getMilliseconds()
// getTime()
// getDay()

const now = new Date();
console.log(now);

//? Getting full year
const year = new Date();
console.log(year.getFullYear());

//? Getting month
const month = new Date();
console.log(month.getMonth());

//? Getting date
const date = new Date();
console.log(date.getDate());

//? Getting day
const day = new Date();
console.log(day.getDay()); // Sunday is 0, Monday is 1 and Saturday is 6

//? Getting hours
const hours = new Date();
console.log(hours.getHours());

//? Getting minutes
const minutes = new Date();
console.log(minutes.getMinutes());

//? Getting seconds
const seconds = new Date();
console.log(seconds.getSeconds());

//? Getting time
// 1. Using getTime()
const time = new Date(); //
console.log(time.getTime());
// 2. Using Date.now()
const allSeconds = Date.now(); //
console.log(allSeconds); // 1578092201341, this is the number of seconds passed from January 1, 1970 to January 4, 2020 00:56:41

const timeInSeconds = new Date().getTime();
console.log(allSeconds == timeInSeconds); // true

const date1 = new Date();
let year1 = date.getFullYear(),
  month1 = date.getMonth(),
  day1 = date.getDay(),
  minute1 = date.getMinutes(),
  second = date.getSeconds();
dayName = date.getDay();

let months = [
  "Ocak",
  "Şubat",
  "Mart",
  "Nisan",
  "Mayıs",
  "Haziran",
  "Temmuz",
  "Ağustos",
  "Eylül",
  "Ekim",
  "Kasım",
  "Aralık",
];

console.log(months.length);
console.log(months[0]);
let days = [
  "pazar",
  "pazartesi",
  "Salı",
  "Çarşamba",
  "Perşembe",
  "Cuma",
  "Cumartesi",
];

const now2 = new Date();
const year2 = now.getFullYear(); // yılı döndürür
const month2 = now.getMonth() + 1; // ayı döndürür (0 - 11) olduğu için +1 ekliyor
const date2 = now.getDate(); // günü döndürür (1 - 31)
const hours2 = now.getHours(); // sayıyı döndürür (0 - 23)
const minutes2 = now.getMinutes(); // sayıyı döndürür (0 -59)

console.log(`${date2}/${month2}/${year2} ${hours2}:${minutes2}`); // çıktı farklı olacaktır
