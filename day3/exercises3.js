// 💻 Day 3: Exercises
//? Exercises: Level 1

// 1. Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.
let firstName = "Sümeyye";
let lastName = "BALKAYA";
let country = "Turkiye";
let city = "Kocaeli";
let age = 25;
let isMarried = false;
let year = 2024;

console.log(typeof firstName);
console.log(typeof age);
console.log(typeof isMarried);
console.log(typeof year);

// 2. Check if type of '10' is equal to 10
let checkNumber = "10" === 10;
console.log(checkNumber);

console.log("10" === 10);

// 3. Check if parseInt('9.8') is equal to 10
console.log(parseInt("9.8") === 10);

// 4. Boolean value is either true or false.

console.log(true);
console.log(false);

console.log(5 > 4);
console.log(4 < 4);

console.log(Boolean(1));
console.log(Boolean(0));

console.log(Boolean({})); // true (boş bir obje)

// 5. Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()

console.log(4 > 3);
console.log(4 >= 3);
console.log(4 < 3);
console.log(4 <= 3);
console.log(4 == 4);
console.log(4 === 4);
console.log(4 != 4);
console.log(4 !== 4);
console.log(4 != "4");
console.log(4 == "4");
console.log(4 === "4");

let pyt = "python".length;
let jrg = "jargon".length;
console.log(pyt !== jrg);

//6. Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()

console.log(4 > 3 && 10 < 12);
console.log(4 > 3 && 10 > 12);
console.log(4 > 3 || 10 < 12);
console.log(4 > 3 || 10 > 12);
console.log(!(4 > 3));
console.log(!(4 < 3));
console.log(!false);
console.log(!(4 > 3 && 10 < 12));
console.log(!(4 > 3 && 10 > 12));
console.log(!(4 === "4"));

console.log("dragon".includes("on"));
console.log("python".includes("on"));

// 7. Use the Date object to do the following activities
let now = new Date();
// What is the year today?
console.log("Year:", now.getFullYear());
// What is the month today as a number?
console.log("Month:", now.getMonth() + 1);
// What is the date today?
console.log("Date:", now.getDate());
// What is the day today as a number?
console.log("Today:", now.getDay());
// What is the hours now?
console.log("Hour:", now.getHours());
// What is the minutes now?
console.log("Minutes:", now.getMinutes());
// Find out the numbers of seconds elapsed from January 1, 1970 to now.
console.log(
  "Seconds elapsed from January 1, 1970:",
  Math.floor(now.getTime() / 1000)
); // Seconds since Jan 1, 1970

//? Exercises: Level 2
// 1. Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).

//? let base = prompt("Enter base:");
//? let height = prompt("Enter height:");

//? base = parseFloat(base);
//? height = parseFloat(height);

//? const area = 0.5 * base * height;

//? console.log("The area of the triangle is " + area);

// 2. Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)

//? let sideA = prompt("Enter side a:");
// ?let sideB = prompt("Enter side b:");
//? let sideC = prompt("Enter side c:");

//? sideA = parseFloat(sideA);
//? sideB = parseFloat(sideB);
//? sideC = parseFloat(sideC);

//? const perimeter = sideA + sideB + sideC;
//? console.log("The perimeter of the triangle is " + perimeter);

// 3. Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))

//? let recLength = prompt("Enter length");
//? let recWidth = prompt("Enter width");

//? recWidth = parseFloat(recWidth);
//? recLength = parseFloat(recLength);

//? const area = recLength * recWidth;
//? const perimeter = 2 * (recLength + recWidth);

//? console.log("The area of the rectangle is " + area);
//? console.log("The perimeter of the rectangle is " + perimeter);

// 4. Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.

// let radius = prompt("Enter radius:");
// radius = parseFloat(radius);

// const PI = 3.14;
// const areaOfCircle = PI * radius * radius;
// const circumferenceCircle = 2 * PI * radius;

// console.log("Area of a Circle: " + areaOfCircle);
// console.log("Circumference of a Circle: " + circumferenceCircle);

//! Calculate the slope, x-intercept and y-intercept of y = 2x -2

//! Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)

//! Compare the slope of above two questions.

//! Calculate the value of y (y = x2 + 6x + 9). Try to use different x values and figure out at what x value y is 0.

// 9. Writ a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?

// Enter hours: 40
// Enter rate per hour: 28
// Your weekly earning is 1120
// If the length of your name is greater than 7 say, your name is long else say your name is short.

// let hours = prompt("Enter hours:");
// let ratePerhour = prompt("Enter rate per hour:");

// hours = parseFloat(hours);
// ratePerhour = parseFloat(ratePerhour);

// const weeklyEarning = hours * ratePerhour;
// console.log("Your weekly earning is:" + weeklyEarning);

// 12. If the length of your name is greater than 7 say, your name is long else say your name is short.

// let userName = prompt("Enter your name:");
// userName.length <= 7
//   ? console.log(`${userName} name is short. `)
//   : console.log(`${userName} name is long.`);

// 11. Compare your first name length and your family name length and you should get this output.

// let firstName1 = prompt("Enter your first name:");
// let lastName1 = prompt("Enter your family name:");

// firstName1.length > lastName1.length
//   ? console.log(
//       `Your first name, ${firstName1} is longer than your family name, ${lastName1}`
//     )
//   : console.log(
//       `Your last name, ${lastName1} is longer than your first name, ${firstName1}`
//     );

// 12. Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.

// let myAge = prompt("Enter my age:");
// let yourAge = prompt("Enter your age:");
// let ageDifference = Math.abs(myAge - yourAge);
// myAge > yourAge
//   ? console.log(`I am ${ageDifference} years older than you.`)
//   : console.log(`You are ${ageDifference} years older than me.`);

// 13. Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.

// let birthYear = Number(prompt("Enter birth year:"));
// let currentYear = new Date().getFullYear();
// let age1 = currentYear - birthYear; // Kullanıcının yaşını hesaplıyoruz.
// age1 >= 18
//   ? console.log(`You are ${age1}. You are old enough to drive`)
//   : console.log(
//       `You are ${age1}. You will be allowed to drive after ${18 - age1} years.`
//     );

// 14. Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years

// let years = prompt("Enter number of years you live:");
// let totalSeconds = years * 31536000; // 1 yıl = 31,536,000 saniye

// console.log(`You lived ${totalSeconds} seconds.`);

// 15. Create a human readable time format using the Date time object

let currentDate = new Date();

let year3 = currentDate.getFullYear();
let month = String(currentDate.getMonth() + 1).padStart(2, "0"); // Months are 0-indexed
let day = String(currentDate.getDate()).padStart(2, "0");
let hours = String(currentDate.getHours()).padStart(2, "0");
let minutes = String(currentDate.getMinutes()).padStart(2, "0");

let format1 = `${year3}-${month}-${day} ${hours}:${minutes}`; // YYYY-MM-DD HH:mm
let format2 = `${day}-${month}-${year3} ${hours}:${minutes}`; // DD-MM-YYYY HH:mm
let format3 = `${day}/${month}/${year3} ${hours}:${minutes}`; // DD/MM/YYYY HH:mm

console.log(format1);
console.log(format2);
console.log(format3);

//? Exercises: Level 3
// Create a human readable time format using the Date time object. The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05 )

// Mevcut tarihi al
let currentDate1 = new Date();

let year2 = currentDate1.getFullYear();
let month2 = String(currentDate1.getMonth() + 1).padStart(2, "0"); // Aylar 0'dan başlar, o yüzden +1 ekliyoruz
let day2 = String(currentDate1.getDate()).padStart(2, "0"); // Gün değeri
let hours2 = String(currentDate1.getHours()).padStart(2, "0"); // Saat değeri
let minutes2 = String(currentDate1.getMinutes()).padStart(2, "0"); // Dakika değeri

let formattedDate = `${year2}-${month2}-${day2} ${hours2}:${minutes2}`;

console.log(formattedDate);
