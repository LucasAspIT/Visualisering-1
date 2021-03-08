"use strict";

// NAVIGATION MENU ##############################################
const navToggle = document.querySelector("#toggle");
const navPosition = document.querySelector(".nav");

// Make sure it's unchecked by default
navToggle.checked = false;

// If checked, move the nav menu into view, else hide the nav menu
navToggle.addEventListener("change", function () {
  if (this.checked) {
    navPosition.style.right = "0";
  } else {
    navPosition.style.right = "-400px";
  }
});

// PAGE LOAD ANIMATION ##########################################
// Information input
const dom = document.querySelector(".hero-overlay h1");

// Types out the word, 1 character at a time
async function typeSentence(dom) {
  // Splits the object value of the selected array item after each character and returns it as a new array
  const typing = dom.textContent.split("");
  dom.textContent = "";

  for (let i = 0; i < typing.length; i++) {
    dom.textContent += typing[i];
    await sleep(100);
  }
}

// Does some weird magic, I don't know
function sleep(time) {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
}

// Wait until DOM has loaded
document.addEventListener("DOMContentLoaded", function (event) {
  // Starts the whole thing
  typeSentence(dom);
});
