// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them

document.addEventListener('DOMContentLoaded', function () {
  let buttons = document.getElementsByTagName('button');

  for (let button of buttons) {
    button.addEventListener('click', function () {
      if (this.getAttribute('data-type') === 'submit') {
        console.log('You clicked Submit!');
      } else {
        let gameType = this.getAttribute('data-type');
        console.log(`You clicked ${gameType}`);
      }
    });
  }
});

const runGame = () => {};

const checkAnswer = () => {};

const calculateCorrectAnswer = () => {};

const incrementScore = () => {};

const incrementWrongAnswer = () => {};

const displayAdditionQuestion = () => {};

const displaySubtractionQuestion = () => {};

const displayMultiplyQuestion = () => {};
