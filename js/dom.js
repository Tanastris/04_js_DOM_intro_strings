"use strict";
console.log("dom.js file was loaded");

// gauti #intro elemento teksto
// pakeisti #intro elemento teksta
// papildomai prirasyti kazka prie intro elemento teksto

// nusitaikyti ir guati kintamaji kuris rodo i ta elementa
const pIntroEl = document.getElementById("intro");
console.log("pIntroEl ===", pIntroEl);

// gauti teksta is elemento
let pText = pIntroEl.textContent;
console.log("pText ===", pText);

// pakeisti #intro el teksta

// pIntroEl.textContent =
//   "Sitas tekstas yra dinamiskas ir nesimato per view page source";

// pIntroEl.textContent = prompt("apie ka");

// darasyti po intro tekstu 'about DOM'
// pIntroEl.textContent = pText + "about DOM";
// pIntroEl.textContent = pIntroEl.textContent + "about DOM";
pIntroEl.textContent += "about DOM";

// padidinti intro teksta i 50 px
pIntroEl.style.fontSize = "50px";

// prideti(perrasyti) klase
pIntroEl.className = "dynamic";

// pakeisti <li id="pirma">red</li> spalva
// gauti nuoroda i sarasa su document.getElementById ir su
// document.querySelector()
// gauti visus li su document.querySelectorAll()
const pirmaRed = document.getElementById("pirma");
pirmaRed.style.color = "red";

// const ulIntro = document.getElementById("color-list");
const ulIntro = document.querySelector("#color-list");
console.log("ulIntro ===", ulIntro);

const allLi = document.querySelectorAll("#color-list li");
console.log("allLi ===", allLi);
