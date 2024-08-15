"use strict";
let message = document.querySelector(".message");
let scoreEl = document.querySelector(".score");
let score = 20;

const secretNumber = Math.trunc(Math.random() * 20) + 1;

document.querySelector(".number").textContent = secretNumber;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    message.textContent = "Please enter a number😁";
  } else if (guess === secretNumber) {
    message.textContent = "Correct Number";
    score++;
  } else if (guess > secretNumber) {
    if (score > 1) {
      message.textContent = "Number too high😒";
      score--;
      scoreEl.textContent = score;
    } else {
      message.textContent = "You loose";
      scoreEl.textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      message.textContent = "Number too low😒";
      score--;
      scoreEl.textContent = score;
    } else {
      message.textContent = "You loose🚽";
      scoreEl.textContent = 0;
    }
  }
});
