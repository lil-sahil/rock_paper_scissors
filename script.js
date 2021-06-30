const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const computerChoice = document.querySelector(".choice"); 
const result = document.querySelector("#result p"); 
const round = document.querySelector(".round p");
const userScore = document.querySelector(".user-score");
const compScore = document.querySelector(".comp-score");

const numberOfRounds = 5;

let roundInt = 1;
let uScore = 0;
let cScore = 0;

function randomSelection(choices){
  return Math.floor(Math.random()*choices);
}

function computerPlay(){
  let computerChoices = ["rock", "paper", "scissors"];
  return computerChoices[randomSelection(computerChoices.length)]
}

rock.addEventListener("click", () => playRound('rock', computerPlay()));
paper.addEventListener("click", () => playRound('paper', computerPlay())); 
scissors.addEventListener("click", () => playRound('scissors', computerPlay())); 




function playRound(playerSelection, computerSelection) {

  // Style setings to change back to normal.
  result.style.fontSize = "1rem";

  if ( (playerSelection === "rock") && (computerSelection === "paper") ){
    cScore += 1
    compScore.textContent = cScore;
    result.textContent = `You loose! ${computerSelection} beats ${playerSelection}!`
  }

  else if ( (playerSelection === "paper") && (computerSelection === "scissors") ){
    cScore += 1
    compScore.textContent = cScore;
    result.textContent = `You loose! ${computerSelection} beats ${playerSelection}!`;
  }

  else if ( (playerSelection === "scissors") && (computerSelection === "rock") ){
    cScore += 1
    compScore.textContent = cScore;
    result.textContent = `You loose! ${computerSelection} beats ${playerSelection}!`;
  }

  else if ( (playerSelection === computerSelection) ){
    result.textContent = `Tie Round! You both picked ${computerSelection}!`;
  }  

  else {
    uScore += 1
    userScore.textContent = uScore;
    result.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
    console.log(`You win! ${playerSelection} beats ${computerSelection}`);
  }

  computerChoice.textContent = computerSelection;
  round.textContent = roundInt;
  roundInt += 1;
  console.log(roundInt);

  if (roundInt === numberOfRounds +1) {
    checkGameWinner(uScore, cScore);
  }
}


function checkGameWinner(currentUserScore, currentComputerScore) {
  let scoreDiff = currentUserScore - currentComputerScore;
  roundInt = 1;
  uScore = 0;
  cScore = 0;
  
  if (scoreDiff === 0){
    result.textContent = `You Tied the Game!`;
    result.style.fontSize = "2rem";
  }

  else if (scoreDiff < 0) {
    result.textContent = `You lost the Game!`;
    result.style.fontSize = "2rem";
  }

  else {
    result.textContent = `You won the Game!`;
    result.style.fontSize = "2rem";
  }
}




