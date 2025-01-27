"use strict";

const score0EL = document.querySelector("#score--0");
const score1EL = document.getElementById("score--1");
const diceEL = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

score0EL.textContent = 0;
score1EL.textContent = 0;
diceEL.classList.add("hidden");

btnRoll.addEventListener("click", function () {
  const dice = Math.trunc(Math.random() * 6) + 1;
  console.log(dice);

  diceEL.classList.remove("hidden");
  diceEL.src = `dice-${dice}.png`;

  if (dice !== 1) {
    // Add dice to current score
  } else {
    // Switch to next player
  }
});
