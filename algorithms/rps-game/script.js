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
