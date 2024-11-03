'use strict'

const categoryList = document.querySelector("#categories").querySelectorAll(".item");

console.log(`Number of categories: ${categoryList.length}`);

categoryList.forEach((category) => {
    const categoryNameEl = category.querySelector("h2");
    const subCategoryList = category.querySelector("ul");

    console.log(`Category: ${categoryNameEl.textContent}`);
    console.log(`Elements: ${subCategoryList.querySelectorAll("li").length}`);
    
});