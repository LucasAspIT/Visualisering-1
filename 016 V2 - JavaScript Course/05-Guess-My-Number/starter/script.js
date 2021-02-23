"use strict";

/*
// Logs the text of the selected class
console.log(document.querySelector(".message").textContent);
// Changes the text of the selected class
document.querySelector(".message").textContent = "Correct Number!";

document.querySelector(".number").textContent = 13;
document.querySelector(".score").textContent = 10;

// Sets and checks the value of an input
document.querySelector(".guess").value = 23;
console.log(document.querySelector(".guess").value);
*/

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess);

  if (!guess) {
    document.querySelector(".message").textContent = "No number!";
  }
});
