const options = ['Rock', 'Paper', 'Scissors'];

function getRandomComputerResult() {
    let min = 0;
    let max = 2;

    randomOption = Math.floor(Math.random() * (max - min + 1) + min);
  
    return(options[randomOption]);
}

function hasPlayerWonTheRound(playerChoice, computerChoice) {

    if(playerChoice == computerChoice) {
        return false;
    } else if(playerChoice == "Rock" && computerChoice !== "Paper") {
        return true;
    } else if(playerChoice == "Scissors" && computerChoice !== "Rock") {
        return true;
    } else if(playerChoice == "Paper" && computerChoice !== "Scissors") {
        return true;
    } else {
        return false;
    }
}

let playerScore = 0;
let computerScore = 0;

function getRoundResults(userOption) {
  const computerResult = getRandomComputerResult();

  if(userOption == computerResult) return `It's a tie! Both chose ${userOption}`;
  if(hasPlayerWonTheRound(userOption, computerResult)) {
    playerScore += 1;
    return `Player wins! ${userOption} beats ${computerResult}`
  } else {
    computerScore += 1;
    return `Computer wins! ${computerResult} beats ${userOption}`;
  }
}

const playerScoreSpanElement = document.getElementById("player-score");

const computerScoreSpanElement = document.getElementById("computer-score");

const roundResultsMsg = document.getElementById("result-msg");

const winnerMsgElement = document.getElementById("winner-msg");
const optionsContainer = document.querySelector(".options-container");
const resetGameBtn = document.getElementById("reset-game-btn");

function showResults(userOption) {
    roundResultsMsg.textContent = getRoundResults(userOption);
    playerScoreSpanElement.textContent = playerScore;
    computerScoreSpanElement.textContent = computerScore;
}

const rockBtn = document.getElementById("rock-btn");
const paperBtn = document.getElementById("paper-btn");
const scissorBtn = document.getElementById("scissors-btn");

rockBtn.addEventListener("click", () => showResults("Rock"));
paperBtn.addEventListener("click", () => showResults("Paper"));
scissorBtn.addEventListener("click", () => showResults("Scissors"));
