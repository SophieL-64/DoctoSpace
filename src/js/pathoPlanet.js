"use strict";

const revenuesCard = document.querySelector(".revenues-check");
const revenuesForm = document.querySelector(".RFR-form");
let revenuesInput = 0;
const formulasCard = document.querySelector(".formulas");
const close = document.querySelector(".close");

const option1 = document.querySelector(".option1");
const option2 = document.querySelector(".option2");
const option3 = document.querySelector(".option3");

revenuesForm.onsubmit = function (event) {
  event.preventDefault();
  revenuesCard.classList.toggle("inactif");
  formulasCard.classList.toggle("inactif");
  revenuesInput = document.getElementById("RFR-input").valueAsNumber;

  if (revenuesInput >= 50000) {
    option1.classList.toggle("inactif");
  }

  if (revenuesInput >= 20000 && revenuesInput < 50000) {
    option2.classList.toggle("inactif");
  }

  if (revenuesInput < 20000) {
    option3.classList.toggle("inactif");
  }
};

/* fermeture de l'encart Formules, on ré-active l'encart Revenus  */
close.onclick = function () {
  window.location.reload();
  revenuesInput.value = "";
  revenuesCard.classList.toggle("inactif");
  formulasCard.classList.toggle("inactif");
};

console.log(typeof revenuesInput);
console.log(revenuesInput);
