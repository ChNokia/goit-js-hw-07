'use strict'

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector('input[type="number"]');
const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]")
const boxes = document.querySelector("#boxes");

createBtn.addEventListener("click", createMarkup);
destroyBtn.addEventListener("click", destroyBoxes);

function createMarkup() {
  const number = Number(input.value);

  if (number < 0 || number > 100) {
    console.log("error");
    return;
  }

  input.value = "";
  createBoxes(number);
}

function destroyBoxes() {
  boxes.innerHTML = "";
  input.value = "";
}

function createBoxes(amount) {
  let boxSize = 30;
  const fragment = document.createDocumentFragment();

  boxes.innerHTML = "";

  for (let i = 0; i < amount; i++) {
    const boxDiv = document.createElement("div");
    boxDiv.style.backgroundColor = getRandomHexColor();
    boxDiv.style.width = `${boxSize}px`;
    boxDiv.style.height = `${boxSize}px`;
    fragment.appendChild(boxDiv);

    boxSize += 10;
  }

  boxes.appendChild(fragment);
}
