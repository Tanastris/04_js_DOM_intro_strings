"use strict";
console.log("innerhtml.js file was loaded");

// taikomes
const outputEl = document.getElementById("output");
const ulEL = document.querySelector("#color-list");
// nusitaikyti i paskutini li

const lastLi = document.querySelector("li:last-child");

console.log("outputEl ===", outputEl);

outputEl.textContent = "<h2>I am sub title</h2>";
outputEl.innerText = "<h2>I am sub title</h2>";
outputEl.innerHTML = "<h2>I am sub title</h2>";

console.log("lastLi ===", lastLi);

ulEL.innerHTML = "";
let resultLis = "";
for (let i = 0; i < 10; i++) {
  resultLis = resultLis + `<li>violet</li>`;
}
ulEL.innerHTML = resultLis;

// sudeti skaicius nuo 1 iki 10
// irasyti i html rezultata
// irasyti kiekvieno zingsnio suma
