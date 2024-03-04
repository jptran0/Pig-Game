'use strict';

// Selecting elements
const score0El = document.querySelector('#score--0'); // # is for id, . is for classes
const score1El = document.getElementById('score--1'); // we don't need the # because of `.getElementById`
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

// Rolling dice functionality
