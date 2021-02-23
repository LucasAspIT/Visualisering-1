"use strict";

const fruits = [
  { type: "Apple", color: "red" }, // 0
  { type: "Lemon", color: "yellow" }, // 1
  { type: "Panda", color: "white" }, // 2
  { type: "Banana", color: "green" }, // 3
];
const p = document.querySelector(".typing-effect");

// Starts the whole thing
typingEffect();

// Types out the word, 1 character at a time
async function typeSentence(array) {
  // Splits the object value of the selected array item after each character and returns it as a new array
  const typing = fruits[array].type.split("");
  // Changes the color of the font to the selected object's value
  p.style.color = fruits[array].color;

  for (let i = 0; i < typing.length; i++) {
    p.textContent += typing[i];
    await sleep(100);
  }
}

// Deletes the entire string, 1 character at a time
async function deleteSentence() {
  for (let i = p.textContent.length; i > 0; i--) {
    p.textContent = p.textContent.substring(0, p.textContent.length - 1);
    await sleep(50);
  }
}

// Does some weird magic & shit, I don't know
function sleep(time) {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
}

async function typingEffect() {
  for (let i = 0; i < fruits.length; i++) {
    typeSentence([i]);

    await sleep(3000);

    deleteSentence();

    await sleep(1000);
  }
  // Calls itself to repeat endlessly
  typingEffect();
}
