const options = ['Rock', 'Paper', 'Scissors'];

// Select random option for the computer
function getRandomComputerResult() {
    let min = 0;
    let max = 2;

    randomOption = Math.floor(Math.random() * (max - min + 1) + min);
  
    return(options[randomOption]);
}

// Determine who wins by comparing their choices  
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

// Set starting scores
let playerScore = 0;
let computerScore = 0;

// Display readable game outcome
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

// Cache DOM elements
const playerScoreSpanElement = document.getElementById("player-score");
const computerScoreSpanElement = document.getElementById("computer-score");
const roundResultsMsg = document.getElementById("results-msg");
const winnerMsgElement = document.getElementById("winner-msg");
const optionsContainer = document.querySelector(".options-container");
const resetGameBtn = document.getElementById("reset-game-btn");

// Display readable winner and handle UI end game change
function showResults(userOption) {
    roundResultsMsg.textContent = getRoundResults(userOption);
    computerScoreSpanElement.textContent = computerScore;
    playerScoreSpanElement.textContent = playerScore;

    if(playerScore == 3) { 
        resetGameBtn.style.display = "block";
        optionsContainer.style.display = "none";
        winnerMsgElement.textContent = "Player has won the game!";
    } else if(computerScore == 3) { 
        resetGameBtn.style.display = "block";
        optionsContainer.style.display = "none";
        winnerMsgElement.textContent = "Computer has won the game!";
    }
}

// Restore default game settings
function resetGame() {
 playerScore = 0;
 computerScore = 0;

 playerScoreSpanElement.innerText = playerScore;
 computerScoreSpanElement.innerText = computerScore;
 
 resetGameBtn.style.display = "none";
 optionsContainer.style.display = "block";
 winnerMsgElement.textContent = "";
 roundResultsMsg.textContent = "";
}

// Cache DOM elements and attach event listeners
const rockBtn = document.getElementById("rock-btn");
const paperBtn = document.getElementById("paper-btn");
const scissorBtn = document.getElementById("scissors-btn");

rockBtn.addEventListener("click", () => showResults("Rock"));
paperBtn.addEventListener("click", () => showResults("Paper"));
scissorBtn.addEventListener("click", () => showResults("Scissors"));
resetGameBtn.addEventListener("click", resetGame);
