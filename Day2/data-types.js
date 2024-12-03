// ! ****** DATA TYPES ********
//? 1.Primitive Data types (Immutable (non-modifiable))
// - Numbers    => integers, floats
// - Strings    => Any data under single quote, double quote or backtick quote
// - Booleans   => true or false value
// - Null       => empty or no value
// - Undefined  => a declared varieble without a value

//? 2.Non-primitive data types (Mutable (modifiable))
// - Objects
// - Functions
// - Arrays     => []

// Immutable (non-modifiable veri türüne örnek:
let word = "Javascript";
word[0] = "Y";

// Let us compare different data values. See the example below:
let numOne = 3;
let numTwo = 3;
console.log(numOne == numTwo);

let js = "Javascript";
let py = "Python";
console.log(js == py);

// An array is a list of data values in a square bracket.
// Array values are referenced by their index.
//  In JavaScript array index starts at zero.

let nums = [1, 2, 3];
nums[0] = 10;
console.log(nums);

// Arrays can contain the same or different data types.
let values = [1, "sumeyye", true, null, undefined, []];
values[0] = 10;
console.log(values);

let nums01 = [1, 2, 3];
let nums2 = [1, 2, 3];
console.log(nums01 == nums2);

// Non-primitive data types cannot be compared by value.
// Even if two non-primitive data types have the same properties and values, they are not strictly equal.

let nums1 = [1, 2, 3];
let numbers = nums1;
console.log(nums1 == numbers);

let userOne = {
  name: "Sumeyye",
  role: "student",
  country: "Turkiye",
};

let userTwo = userOne;

console.log(userOne == userTwo);

// Rule of thumb, we do not compare non-primitive data types.
// Do not compare arrays, functions, or objects.

// Non-primitive values are referred to as reference types,
// because they are being compared by reference instead of value.
// Two objects are only strictly equal if they refer to the same underlying object.

let userThree = {
  name: "Selen",
  role: "teacher",
  country: "Turkiye",
};

let userFour = {
  name: "Selen",
  role: "teacher",
  country: "Turkiye",
};

console.log(userThree == userFour);

// console.clear();

// ! *********** NUMBERS *******************
//? Declaring Number Data Types

let age = 35;
const gravity = 9.81; // we use const for non-changing values, gravitational constant in  m/s2
let mass = 72; // mass in Kilogram
const PI = 3.14; // pi a geometrical constant
const boilingPoint = 100; // temperature in oC, boiling point of water which is a constant
const bodyTemp = 37; // oC average human body temperature, which is a constant

console.log(age, gravity, mass, PI, boilingPoint, bodyTemp);

console.clear();

//? Math Object

console.log(Math.round(5.49));
console.log(Math.ceil(5.01)); // tavan => rounding up
console.log(Math.floor(5.99)); // taban => rounding down

console.log(Math.min(-5, 3, 20, 4, 5, 10)); // minimum value
console.log(Math.max(-5, 3, 20, 4, 5, 10)); // maximum value

const randNum = Math.random(); // creates random number between 0 to 0.999999
console.log(randNum);

const num = Math.floor(Math.random() * 11); // creates random number between 0 and 10
console.log(num);

const num1 = Math.floor(Math.random() * 100);
console.log(num1);

// console.clear();

console.log(Math.abs(-10)); //Absolute value (Mutlak değer => Bir sayının 0'a olan uzaklığıdır.)

console.log(Math.sqrt(100)); //Square root (Karekök => Bir sayının karesini (kendisiyle çarpımını) veren sayıdır.)

console.log(Math.sqrt(2));

console.log(Math.pow(3, 2)); // Power

console.log(Math.E); // Euler Sayısıdır (yaklaşık 2.718).

console.log(Math.log(2)); // Logarithm => Math.log(x) => e üssü (2.718) kaçtır ki sonucu 2 eder?

console.log(Math.LN2); // sabit değerlerdir. => 2 sayısının doğal logaritması.
console.log(Math.LN10);

Math.sin(0); // Trigonometry
Math.cos(0);

console.clear();

// ? Random Number Generator

let randomNum = Math.random(); // generates 0 to 0.999
let numBtnZeroAndTen = randomNum * 11;

console.log(numBtnZeroAndTen); // this gives: min 0 and max 10.99

let randomNumRoundToFloor = Math.floor(numBtnZeroAndTen);
console.log(randomNumRoundToFloor); // this gives between 0 and 10
console.clear();

// ! ********** STRING ************
// ? String Concatenation
// concatenation, merging two string together.
let firstName = "Sumeyye";
let lastName = "Balkaya";
let space = " ";
let fullName = firstName + space + lastName;
console.log(fullName);

// Declaring different variables of different data types
let space_ = " ";
let first_Name = "Sumeyye";
let last_Name = "BALKAYA";
let country = "Finland";
let city = "Helsinki";
let language = "JavaScript";
let job = "teacher";
let age_ = 25;

let full_Name = first_Name + space_ + last_Name;
let personInfoOne = full_Name + ". I am " + age_ + ". I live in " + country; // ES5 string addition

console.log(personInfoOne);

//? Long Literal Strings
const paragraph =
  "My name is Sumeyye BALKAYA. I live in Turkiye, Kocaeli. \
I am a teacher and I love teaching.";
console.log(paragraph);

// ? Escape Sequences in Strings

//  \n: new line
//  \t: Tab, means 8 spaces
//  \\: Back slash
//  \': Single quote (')
//  \": Double quote (")

console.log(
  "I hope everyone is enjoying the 30 Days Of JavaScript challenge.\nDo you ?"
); // line break
console.log("Days\tTopics\tExercises");
console.log("This is a backslash  symbol (\\)");
console.log("The saying 'Seeing is Believing' isn't correct in 2020");

//? Template Literals (Template Strings)

let a = 2;
let b = 3;
console.log(`${a} is greater than ${b}: ${a > b}`);

//? String Methods

//  1.length:

let name = "Sumeyye";
console.log(name.length);

//  2.Accessing characters in a string:
let string = "Javascript";
let firstLetter = string[0];
console.log(firstLetter);

let lastIndex = string.length - 1;
console.log(lastIndex);
console.log(string[lastIndex]);

//  3.toUpperCase():

let school = "MuGla Sıtkı koçmaN UniVerSitesi";
console.log(school.toUpperCase());

//  4.toLowerCase():

let school_name = "MuGla Sıtkı koçmaN UniVerSitesi";
console.log(school_name.toLowerCase());

//  5.substr():

let youtube = "Developer";
console.log(youtube.substr(3, 2));

//  6.substring():
// it doesn't include the character at the stopping index.

let str_ing = "JavaScript";

console.log(str_ing.substring(0, 4)); // Java
console.log(str_ing.substring(4, 10)); // Script
console.log(str_ing.substring(4)); // Script

//  7.split():

let desserts = "Baklavaki, Pişmaniye";
console.log(desserts.split());
console.log(desserts.split(""));
console.log(desserts.split(","));

//  8.trim():
// Removes trailing space in the beginning or the end of a string.

let word_ = "   30 Days Of JavaScript   ";

console.log(word_);
console.log(word_.trim(" "));

let Name1 = "        Sumeyye   ";

console.log(Name1);
console.log(Name1.trim()); // still removes spaces at the beginning and the end of the string

//  9.includes():
// If a substring exist in a string, it returns true, otherwise it returns false.

let text = "30 Days Of JavaScript";

console.log(text.includes("Days")); // true
console.log(text.includes("days")); // false - it is case sensitive!

//  10.replace():
// string.replace(oldsubstring, newsubstring)

let text1 = "30 Days Of JavaScript";
console.log(text1.replace("JavaScript", "Python"));

let country2 = "Turkiye";
console.log(country2.replace("Turk", "Amel"));

//  11.charAt():
// string.charAt(index)

let text3 = "I know 3 languages.";
console.log(text3.charAt(0));

let lastIndex1 = text3.length - 1;
console.log(text3.charAt(lastIndex1));

//  12.charCodeAt():
// it returns char code (ASCII number)

let bla = "blajsdaskljdsklşslkjdsa";
console.log(bla.charCodeAt(2)); // 3.indeksin ASCII no: 97

//  13.indexOf():
// string.indexOf(substring)

let string4 = "30 Days Of JavaScript";

console.log(string4.indexOf("D")); // 3
console.log(string4.indexOf("Days")); // 3
console.log(string4.indexOf("days")); // -1 (if does not exist it returns -1 )

//  14.lastIndexOf():
// Takes a substring and if the substring exists in a string it returns the
//!last position of the substring if it does not exist it returns -1

let string5 =
  "I love JavaScript. If you do not love JavaScript what else can you love.";

console.log(string5.lastIndexOf("love")); // love ilk görüyor. Sonra cümlenin sonuna doğru gidiyor başka love var mı diye. Eğer var ise en son gördüğü love u çeviriyor.
console.log(string5.lastIndexOf("You"));

//  15.concat():
// string.concat(substring, substring, substring)

let country3 = "Fin";
console.log(country3.concat("land")); // Finland

//  16.startsWith:
let string6 = "Love is the best to in this world";

console.log(string6.startsWith("Love"));
console.log(string6.startsWith("love"));
console.log(string6.startsWith("world"));

//  17.endsWith:

let country7 = "Finland";

console.log(country7.endsWith("land"));
console.log(country7.endsWith("fin"));

//  18.search:
// string.search(substring)
let string7 =
  "I love JavaScript. If you do not love JavaScript what else can you love.";
console.log(string7.search("love"));
console.log(string7.search(/javascript/gi)); // g-means to search in the whole text, i - case insensitive

//  19.match: //! *****************
//  / sign and ends with /

let string8 = "love";
let patternOne = /love/; // with out any flag
let patternTwo = /love/gi; // g-means to search in the whole text, i - case insensitive

// syntax
// string.match(substring)

// 20.repeat():
// it returns the repeated version of the string.
let string9 = "love";
console.log(string9.repeat(10)); // lovelovelovelovelovelovelovelovelovelove

//! Checking Data Types and Casting
//? Checking Data Types
//  typeof method

//? Changing Data Type (Casting)

// Casting: Converting one data type to another data type.
// We use parseInt(), parseFloat(), Number(), + sign, str()
// When we do arithmetic operations string numbers should be first converted to integer or float if not it returns an error.

//? String to Int
//? String to Float
// *parseInt()
// *Number()
// *Plus sign(+)

//? Float to Int
// *parselnt()

// ***********************************************************************************************
// String to Int: parseInt(), Number(), + operatörü
// String to Float: parseFloat(), Number()
// Float to Int: parseInt(), yuvarlama fonksiyonları (Math.round(), Math.floor(), Math.ceil())
// ***********************************************************************************************
