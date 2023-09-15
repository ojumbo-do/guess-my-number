"use strict";

/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🥳🎉 Correct Number !';
console.log(document.querySelector('.message').textContent);

document.querySelector('.score').textContent = 13;
document.querySelector('.number').textContent = 20;

document.querySelector('.guess').value;
console.log((document.querySelector('.guess').value = 52));

*/

//Variables declarartion
let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20,
  highScore = 0;

//check button implementation(function)
document.querySelector(".check").addEventListener("click", function () {
  let guess = Number(document.querySelector(".guess").value);
  console.log(guess);

  if (!guess) {
    //When player enters nothing
    document.querySelector(".message").textContent = "No number! ⛔";

    //When player wins the game
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "Correct number! 😀🎉";
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector(".number").style.width = "30rem";

    //getting the highest score
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }

    //     //when guess is too high
    //   } else if (guess > secretNumber) {
    //     if (score > 0) {
    //       document.querySelector('.message').textContent = 'Number too high! 😯';
    //       score--;
    //       document.querySelector('.score').textContent = score;
    //     } else {
    //       document.querySelector('.message').textContent = 'You lose ! ⭕';
    //     }

    //when guess is too low or too high
  } else if (guess !== secretNumber) {
    if (score > 0) {
      document.querySelector(".message").textContent =
        score < secretNumber ? "Number too low! 😒" : "Number too high! 😯";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You lose ! ⭕";
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".message").textContent = "Start guessing .....";
  document.querySelector(".score").textContent = score = 20;
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
