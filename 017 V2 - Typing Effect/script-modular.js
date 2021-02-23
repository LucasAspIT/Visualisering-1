"use strict";

const fruit = [
  { type: "Apple", color: "red" }, // 0
  { type: "Lemon", color: "yellow" }, // 1
  { type: "Panda", color: "white" }, // 2
  { type: "Banana", color: "green" }, // 3
];

const balloon = [
  { type: "Red", color: "red" }, // 0
  { type: "Yellow", color: "yellow" }, // 1
  { type: "White", color: "white" }, // 2
  { type: "Green", color: "green" }, // 3
];

// Information input
const dom = document.querySelector(".typing-effect");
const input = fruit;

// Starts the whole thing
typingEffect(dom, input);

// Types out the word, 1 character at a time
async function typeSentence(array, dom) {
  // Splits the object value of the selected array item after each character and returns it as a new array
  const typing = input[array].type.split("");
  // Changes the color of the font to the selected object's value
  dom.style.color = input[array].color;

  for (let i = 0; i < typing.length; i++) {
    dom.textContent += typing[i];
    await sleep(100);
  }
}

// Deletes the entire string, 1 character at a time
async function deleteSentence(dom) {
  for (let i = dom.textContent.length; i > 0; i--) {
    dom.textContent = dom.textContent.substring(0, dom.textContent.length - 1);
    await sleep(50);
  }
}

// Does some weird magic & shit, I don't know
function sleep(time) {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
}

async function typingEffect(dom, array) {
  for (let i = 0; i < array.length; i++) {
    typeSentence([i], dom);

    await sleep(3000);

    deleteSentence(dom);

    await sleep(1000);
  }
  // Calls itself to repeat endlessly
  typingEffect(dom, array);
}
