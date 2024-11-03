'use strict'

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.querySelector("body");
const span = document.querySelector("span.color");
const btn = document.querySelector("button.change-color");

btn.addEventListener("click", (event) => {
  const color = getRandomHexColor();
  body.style.backgroundColor = color;
  span.style.color = color;
});
