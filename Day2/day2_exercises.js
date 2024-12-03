//! Exercise: Level 1
// 1. Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'.

let variable = "30 Days Of JavaScript";
console.log(variable);

// 2. Print the string on the browser console using console.log()

// 3. Print the length of the string on the browser console using console.log()
console.log(variable.length);

// 4. Change all the string characters to capital letters using toUpperCase() method
console.log(variable.toUpperCase());

// 5. Change all the string characters to lowercase letters using toLowerCase() method
console.log(variable.toLowerCase());

// 6. Cut (slice) out the first word of the string using substr() or substring() method
console.log(variable.substring(1, 21));

// 7. Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.
console.log(variable.slice(2, 21));

// 8. Check if the string contains a word Script using includes() method
console.log(variable.includes("4"));
console.log(variable.includes("Script"));

// 9. Split the string into an array using split() method
console.log(variable.split()); // Ayırıcı belirtilmediği için tüm dize tek bir eleman olur.

// 10. Split the string 30 Days Of JavaScript at the space using split() method
console.log(variable.split(" "));

// 11. 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.
let variables = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
console.log(variables.split(","));

// 12. Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.
console.log(variable.replace("JavaScript", "Python"));

// 13. What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.
console.log(variable.charAt(15));

// 14. What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()
console.log(variable.charCodeAt("J"));

// 15. Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript
console.log(variable.indexOf("Of"));

// 16. Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.
console.log(variable.lastIndexOf("Of"));

// 17. Use indexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
let text1 =
  "You cannot end a sentence with because because because is a conjunction";
console.log(text1.indexOf("because"));

// 18. Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log(text1.lastIndexOf("because"));

// 19. Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log(text1.search("because"));

// 20. Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '.
let text2 = " 30 Days Of JavaScript ";
console.log(text2.trim(" "));
// 21. Use startsWith() method with the string 30 Days Of JavaScript and make the result true
console.log(variable.startsWith("30"));

// 22. Use endsWith() method with the string 30 Days Of JavaScript and make the result true
console.log(variable.endsWith("Script"));

// 23. Use match() method to find all the a’s in 30 Days Of JavaScript
console.log(variable.match(/a/gi));
//?   /a/: Bu bir düzenli ifade.
//?   g:   Küresel arama anlamına gelir, yani dizedeki tüm eşleşmeleri bulur.
//?   i => Büyük/küçük harfe duyarsız arama.

// 24. Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'
console.log(variable.concat(" and Python"));

// 25. Use repeat() method to print 30 Days Of JavaScript 2 times
console.log(variable.repeat(2));

console.clear();

//!  Exercise: Level 2

// 1. Using console.log() print out the following statement:
//? The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.
let text3 =
  "The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.";
console.log(text3);

// 2. Using console.log() print out the following quote by Mother Teresa:
//? "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
let text4 =
  "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.";
console.log(text4);

// 3. Check if typeof '10' is exactly equal to 10. If not make it exactly equal.
let value = "10";
let number = 10;

if (typeof value !== typeof number) {
  value = Number(value); // String'den Number'a dönüştür
}

console.log(value === number);

// 4. Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.

let val = parseFloat("9.8");
if (typeof val !== 10) {
  val = 10;
}

console.log(val);

// 5. Check if 'on' is found in both python and jargon

let val1 = "python";
let val2 = "jargon";

// console.log(val1.includes("on"));    //? 1.yöntem
// console.log(val2.includes("on"));

let isFoundInBoth = val1.includes("on") && val2.includes("on");
console.log(isFoundInBoth);

// 6. I hope this course is not full of jargon. Check if jargon is in the sentence.
let text5 = "I hope this course is not full of jargon.";
console.log(text5.includes("jargon"));

// 7. Generate a random number between 0 and 100 inclusively.

const num = Math.floor(Math.random() * 101);
console.log(num);

// 8. Generate a random number between 50 and 100 inclusively.
const num1 = Math.floor(Math.random() * 51) + 50; //? +50 =>  sayıyı 50 ile başlatıyorum.
console.log(num1);
// 9. Generate a random number between 0 and 255 inclusively.
const num2 = Math.floor(Math.random() * 256);
console.log(num2);
// 10. Access the 'JavaScript' string characters using a random number.
let str = "JavaScript";
let random_i = Math.floor(Math.random() * str.length);
let random_c = str[random_i];
console.log(random_c);

// 11. Use console.log() and escape characters to print the following pattern.
/* 1 1 1 1 1
2 1 2 4 8
3 1 3 9 27
4 1 4 16 64
5 1 5 25 125*/

console.log("1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125");

// 12. Use substr to slice out the phrase because because because from the following sentence:'You cannot end a sentence with because because because is a conjunction'
// !YAPAMADIM*******************************

//!  Exercises: Level 3

// 1. 'Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word love in this sentence.

let sentence =
  "Love is the best thing in this world. Some found their love and some are still looking for their love.";
let loveCount = (sentence.match(/love/gi) || []).length;
console.log(loveCount);

// 2. Use match() to count the number of all because in the following sentence:'You cannot end a sentence with because because because is a conjunction'

// 3. Clean the following text and find the most frequent word (hint, use replace and regular expressions).
//? const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
//! YAPAMADIM
// 4. Calculate the total annual income of the person by extracting the numbers from the following text. 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
//!YAPAMADIM
