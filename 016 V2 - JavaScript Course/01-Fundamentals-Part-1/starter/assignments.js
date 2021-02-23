// LECTURE: Values and Variables

/*
let country = 'Denmark';
let continent = 'Europe';
let population = 5.8;

console.log(country);
console.log(continent);
console.log(population + ' million');
*/

//////////////////////////////////////////////////////////////////////
// LECTURE: Data Types

/*
let country = 'Denmark';
let continent = 'Europe';
let population = 5.8;
let isIsland = false;
let language;

console.log(isIsland);
console.log(population + ' million');
console.log(country);
console.log(language);
*/

//////////////////////////////////////////////////////////////////////
// LECTURE: let, const and var

/*
const country = 'Denmark';
const continent = 'Europe';
let population = 5.8;
const isIsland = false;
let language;

language = 'Danish';

console.log(isIsland);
console.log(population + ' million');
console.log(country);
console.log(language);
*/

//////////////////////////////////////////////////////////////////////
// LECTURE: Basic Operators

/*
let population = 5.8;


// Country population split in half
console.log(population / 2 + ' million');


// Country population increased by 1 million
population++;
console.log(population + ' million');
// Could also be written with just:
// console.log(population + ' million');


// Does our country have more people than Finland at 6 million?
population = 5.8; // Return to original
console.log(population > 6);


// Does our country have less people than the average 33 million?
console.log(population < 33);


// Create new variable
let description = 'Portugal is in Europe, and its 11 million people speak Portuguese';


//////////////////////////////////////////////////////////////////////
// LECTURE: Strings and Template Literals

const country = 'Portugal';
const continent = 'Europe';
const population = 11;
const language = 'Portuguese';

const description = `${country} is in ${continent}, and its ${population} million people speak ${language}`;
console.log(description);


//////////////////////////////////////////////////////////////////////
// LECTURE: Taking Decisions: if / else Statements

const country = 'Portugal';
const population = 11;

if (population > 33) {
    console.log(`${country}'s population is above average.`);
}
else {
    console.log(`${country}'s population is ${33 - population} million below average.`);
}


//////////////////////////////////////////////////////////////////////
// LECTURE: Type Conversion and Coercion


'9' - '5';  // Guess: 4 // Result: 4
'19' - '13' + '17'; // Guess: 617 // Result: 617
'19' - '13' + 17; // Guess: 23 // Result: 23
'123' < 57; // Guess: false // Result: false
5 + 6 + '4' + 9 - 4 - 2; // 1143 Guess: // Result: 1143


//////////////////////////////////////////////////////////////////////
// LECTURE: Equality Operators: == vs. ===

numNeighbours = Number(prompt(`How many neighbour countries does your country have?`))

if (numNeighbours === 1) {
    console.log(`Only 1 border!`);
}
else if (numNeighbours > 1) {
    console.log(`More than 1 border.`);
}
else {
    console.log(`No borders.`);
}


//////////////////////////////////////////////////////////////////////
// LECTURE: Logical Operators

const languageIsEnglish = true;
const populationSmallEnough = true;
const isIsland = false;

if (languageIsEnglish && populationSmallEnough && !isIsland) {
    console.log(`You should live in Portugal :)`);
}
else {
    console.log(`Portugal does not meet your criteria :(`);
}


//////////////////////////////////////////////////////////////////////
// LECTURE: The Switch Statement

const language = `Mandarin`;

switch (language) {
    case `Chinese`:
    case `Mandarin`:
        console.log(`Highest number of native speakers!`);
        break;
    case `Spanish`:
        console.log(`2nd place in number of native speakers`);
        break;
    case `English`:
        console.log(`3rd place`);
        break;
    case `Hindi`:
        console.log(`Number 4`);
        break;
    case `Arabic`:
        console.log(`5th most spoken language`);
        break;
    default:
        console.log(`Great lanugage, too :D`);
        break;
}


//////////////////////////////////////////////////////////////////////
// LECTURE: The Conditional (Ternary) Operator

population = 6;

// Sets 'average' to the result of the below condition
// population is equal to or above 34 ? If it is, then : Else, then
const average = population >= 34 ? `Portugal's population is above average` : `Portugal's population is below average`;

// Log result
console.log(average);

*/