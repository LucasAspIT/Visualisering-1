// Coding Challenge #3

/*
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter)

Your tasks:
1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)

2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). Store the BMI value to a property, and also return it from the method

3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Millers's (23.9)!"

Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.

GOOD LUCK 😀
*/

`use strict`;

// Create profileMark object
const profileMark = {
    firstName: `Mark`,
    lastName: `Miller`,
    weight: 78,
    height: 1.69,

    calcBMI: function () {
        // Create new property (this.BMI) that stores BMI calculation result
        this.BMI = this.weight / this.height ** 2;
        // Round the BMI result to at most 2 decimals
        this.BMI = this.BMI = Math.round((this.BMI + Number.EPSILON) * 100) / 100;
        return this.BMI;
    }
}

// Create profileJohn object
const profileJohn = {
    firstName: `John`,
    lastName: `Smith`,
    weight: 92,
    height: 1.95,

    calcBMI: function () {
        // Create new property (this.BMI) that stores BMI calculation result
        this.BMI = this.weight / this.height ** 2;
        // Round the BMI result to at most 2 decimals
        this.BMI = this.BMI = Math.round((this.BMI + Number.EPSILON) * 100) / 100;
        return this.BMI;
    }
}

// If Marks BMI is higher than John's
if (profileMark.calcBMI() > profileJohn.calcBMI()) {
    console.log(`${profileMark.firstName} ${profileMark.lastName}'s BMI (${profileMark.BMI}) is higher than ${profileJohn.firstName} ${profileJohn.lastName}'s (${profileJohn.BMI})!`);
}
// If John's BMI is higher than Mark's
else if (profileJohn.calcBMI() > profileMark.calcBMI()) {
    console.log(`${profileJohn.firstName} ${profileJohn.lastName}'s BMI (${profileJohn.BMI}) is higher than ${profileMark.firstName} ${profileMark.lastName}'s (${profileMark.BMI})!`);
}
// If they have the same BMI
else {
    console.log(`${profileMark.firstName} ${profileMark.lastName} and ${profileJohn.firstName} ${profileJohn.lastName} have the exact same BMI (${profileMark.BMI})!`);
}

