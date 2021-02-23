// Coding Challenge #1

/*
Given an array of forecasted maximum temperatures, the thermometer displays a string with the given temperatures.
Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

Your tasks:
1. Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console. Try it with both test datasets.

2. Use the problem-solving framework: Understand the problem and break it up into sub-problems!

Test data:
§ Data 1: [17, 21, 23]
§ Data 2: [12, 5, -5, 0, 4]

GOOD LUCK 😀
*/

"use strict";

// Create function (printForecast) with parameter (arr)
// Use a for loop to go through the array and save each value that needs to be printed

const printForecast = function (arr) {
  // Create an empty string to concatenate values to later
  let forecast = "";

  // Run the loop for the entire inputted array
  for (let i = 0; i < arr.length; i++) {
    // For each iteration, concatenate the string with the array value, and the index +1
    forecast += `${arr[i]}ºC in ${i + 1} days ... `;
  }
  // Output the fully concatenated string
  console.log("... " + forecast);
};

// Test data arrays
const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

// Run the function with the selected test array
printForecast(data1);
