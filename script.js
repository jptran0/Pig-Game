'use strict';

// Selecting elements
const score0El = document.querySelector('#score--0'); // # is for id, . is for classes
const score1El = document.getElementById('score--1'); // we don't need the # because of `.getElementById`
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

let currentScore = 0;

// Rolling dice functionality
btnRoll.addEventListener('click', function () {
  // 1. Generate random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;

  // 2. Display Dice
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;

  // 3. Check if rolled 1
  if (dice !== 1) {
    // Add to score
    currentScore += dice;
    current0El.textContent = currentScore; // TODO: Change later
  } else {
    // Switch to next player
  }
});
