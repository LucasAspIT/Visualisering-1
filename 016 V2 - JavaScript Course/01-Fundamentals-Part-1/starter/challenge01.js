// Coding Challenge #1

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).

Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a Boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

Test data:
Data 1: Marks weighs 78 kg and is 1.69 m tall. John weighs 92 kg and is 1.95m tall.
Data 2: Marks weighs 95 kg and is 1.88 m tall. John weighs 85 kg and is 1.76m tall.

GOOD LUCK 😀
*/

// Initial declaration
let weightMark = 78, heightMark = 1.69;
let weightJohn = 92, heightJohn = 1.95;

// BMI calculation
let BMIMark = weightMark / heightMark ** 2;
let BMIJohn = weightJohn / (heightJohn * heightJohn);
let markHigherBMI = BMIMark > BMIJohn;

// Data 1 output
console.log("Data 1:");
console.log("Mark's BMI is: " + BMIMark);
console.log("John's BMI is: " + BMIJohn);
console.log("Mark has a higher BMI: " + markHigherBMI);


// Weight and height change
weightMark = 95, heightMark = 1.88;
weightJohn = 85, heightJohn = 1.76;

// BMI (re)calculation
BMIMark = weightMark / heightMark ** 2;
BMIJohn = weightJohn / (heightJohn * heightJohn);
markHigherBMI = BMIMark > BMIJohn;

// Data 2 output
console.log("Data 2:");
console.log("Mark's BMI is: " + BMIMark);
console.log("John's BMI is: " + BMIJohn);
console.log("Mark has a higher BMI: " + markHigherBMI);