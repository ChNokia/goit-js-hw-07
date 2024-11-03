'use strict'

const inputElement = document.querySelector("#name-input");
const nameElement = document.querySelector("#name-output");

nameElement.style.textTransform = "capitalize";

inputElement.addEventListener("input", (event) => {
    const inputText = event.currentTarget.value.trim();
    nameElement.textContent = inputText.length ? inputText : "Anonymous";
});
