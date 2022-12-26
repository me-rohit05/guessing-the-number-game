'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);
let score = 20;
let highscore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const guessAgain = function (nextGuess) {
  document.querySelector('.next').textContent = nextGuess;
};

//check
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //console.log(guess);
  //no input
  if (!guess) {
    displayMessage('⛔ no number...!');
    //win
  } else if (guess === secretNumber) {
    displayMessage('🎉 you won!');
    guessAgain('Correct!!Click AGAIN to guess next number.');
    document.querySelector('.number').textContent = secretNumber;
    highscore++;
    document.querySelector('.highscore').textContent = highscore;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '20rem';
    secretNumber = Math.trunc(Math.random() * 20) + 1;
  }

  //wrong guess
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈too high...!' : '📉too low...!');
      guessAgain('Opps Wrong!! Guess once Again.');
      score--;
      document.querySelector('.score').textContent = score;
      document.querySelector('body').style.backgroundColor = '#222';
    } else {
      displayMessage('no life line left!😭');
      guessAgain('You Lost!😭');

      document.querySelector('.score').textContent = 0;
      secretNumber = Math.random();
      console.log(secretNumber);

      document.querySelector('body').style.backgroundColor = '#d1021e';
    }
  }
});

//again

document.querySelector('.again').addEventListener('click', function () {
  if (score <= 1) {
    score = 20;
    document.querySelector('.score').textContent = 20;
    document.querySelector('.next').textContent = 'Guess The Hidden Number!';
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    console.log(secretNumber);

    document.querySelector('body').style.backgroundColor = '#222';
    displayMessage('guess the number..');
    document.querySelector('.guess').value = '';
    document.querySelector('.number').style.width = '10rem';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.highscore').textContent = '0';
  } else {
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.next').textContent = 'Guess The Next Number!';
    console.log(secretNumber);
    document.querySelector('body').style.backgroundColor = '#222';
    displayMessage('guess the next number!');
    document.querySelector('.guess').value = '';
    document.querySelector('.number').style.width = '10rem';
    document.querySelector('.number').textContent = '?';
  }
});
