const personScore = document.querySelector(".p_score");
const computerScore = document.querySelector(".c_score");
const resultText = document.querySelector(".result_text");
const images = document.querySelectorAll(".img");
const section = document.querySelector(".section_game");
const restartButton = document.querySelector(".restart_button");
let player_count = 0;
let computer_count = 0;
let maxGame = 5;

images.forEach(image => {
  image.addEventListener('click', function () {
    game(image.alt)
  })
})

function getComputerChoice() {
  let arr = ['rock', 'paper', 'scissors'];
  return arr[Math.floor(Math.random() * arr.length)];
}

restartButton.addEventListener('click', restartGame);

function restartGame() {
  return location.reload();
}

function game(playerChoice) {
  let compChoice = getComputerChoice();
  console.log(playerChoice, compChoice)

  if ((playerChoice === 'rock' && compChoice === 'paper')
    || (playerChoice === 'paper' && compChoice === 'scissors')
    || (playerChoice === 'scissors' && compChoice === 'rock')) {
    computer_count += 1;
    computerScore.textContent = computer_count;
    resultText.textContent = "";

    if (computer_count === maxGame) {
      resultText.textContent = "Computer won!";
      section.style.display = "none";
      restartButton.style.display = "block";
    }
  }

  else if ((playerChoice === 'rock' && compChoice === 'scissors') ||
    (playerChoice === 'paper' && compChoice === 'rock') ||
    (playerChoice === 'scissors' && compChoice === 'paper')) {
    player_count += 1;
    personScore.textContent = player_count;
    resultText.textContent = "";

    if (player_count === maxGame) {
      resultText.textContent = "You won!";
      section.style.display = "none";
      restartButton.style.display = "block";
    }
  }

  else {
    resultText.textContent = "TIE GAME >_<";
  }
}