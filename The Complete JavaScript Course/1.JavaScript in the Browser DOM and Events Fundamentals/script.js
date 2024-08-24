"use strict";
let message = document.querySelector(".message");
let scoreEl = document.querySelector(".score");
let number = document.querySelector(".number");
const body = document.querySelector("body");
let againBtn = document.querySelector(".again");

let score = 20;

let secretNumber = Math.trunc(Math.random() * 20) + 1;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  //When there is no input
  if (!guess) {
    message.textContent = "Please enter a number😁";

    //when guess is correct
  } else if (guess === secretNumber) {
    message.textContent = "Correct Number";
    number.textContent = secretNumber;

    body.style.backgroundColor = "#60b347";
    number.style.width = "30rem";

    //When guess is too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      message.textContent = "Number too high😒";
      score--;
      scoreEl.textContent = score;
    } else {
      message.textContent = "You loose";
      scoreEl.textContent = 0;
    }

    //When guess is to low
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

againBtn.addEventListener("click", () => {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  message.textContent = "Start guessing ...";
});
