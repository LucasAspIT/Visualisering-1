// Coding Challenge #2

/*
Use the BMI example from Challenge #1, and the code you already wrote, and improve it.

Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"

2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"

Hint: Use an if/else statement 😉

GOOD LUCK 😀
*/

// Initial declaration
let weightMark = 78, heightMark = 1.69;
let weightJohn = 92, heightJohn = 1.95;

// BMI calculation
let BMIMark = weightMark / heightMark ** 2;
let BMIJohn = weightJohn / (heightJohn * heightJohn);

if (BMIMark > BMIJohn) {
    console.log(`Mark's BMI is higher than John's!`);
}
else {
    console.log(`John's BMI is higher than Mark's!`);
}


// Weight and height change
weightMark = 95, heightMark = 1.88;
weightJohn = 85, heightJohn = 1.76;

// BMI (re)calculation
BMIMark = weightMark / heightMark ** 2;
BMIJohn = weightJohn / (heightJohn * heightJohn);

// Round the BMI results to at most 2 decimals
BMIMark = Math.round((BMIMark + Number.EPSILON) * 100) / 100;
BMIJohn = Math.round((BMIJohn + Number.EPSILON) * 100) / 100;

if (BMIMark > BMIJohn) {
    console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`);
}
else {
    console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`);
}