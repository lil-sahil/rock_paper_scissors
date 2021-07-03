const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const compVerbage = document.querySelector(".computer-choice")
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
  compVerbage.style.visibility = 'visible';
  return computerChoices[randomSelection(computerChoices.length)]
}

// Click Event Listner

rock.addEventListener("click", () => playRound('rock', computerPlay()));
paper.addEventListener("click", () => playRound('paper', computerPlay())); 
scissors.addEventListener("click", () => playRound('scissors', computerPlay())); 

// Focus Event Listner
rock.addEventListener("mouseover", () => mouseEnter('rock'));
rock.addEventListener("mouseout", () => mouseLeave('rock'));

paper.addEventListener("mouseover", () => mouseEnter('paper'));
paper.addEventListener("mouseout", () => mouseLeave('paper'));

scissors.addEventListener("mouseover", () => mouseEnter('scissors'));
scissors.addEventListener("mouseout", () => mouseLeave('scissors'));

// Mouse enter content change
function mouseEnter (playerSelection){
  if (playerSelection === 'rock') {
    rock.querySelector('h2').style.display = "none";

    let rockImg = document.createElement('i');
    rockImg.classList.add('far','fa-hand-rock');
    rockImg.style.padding = "0 1rem";
    rockImg.style.fontSize = "2rem"

    rock.appendChild(rockImg);
  }

  else if (playerSelection === 'paper') {
    paper.querySelector('h2').style.display = "none";

    let paperImg = document.createElement('i');
    paperImg.classList.add('fas','fa-hand-paper');
    paperImg.style.padding = "0 1rem";
    paperImg.style.fontSize = "2rem"

    paper.appendChild(paperImg);
  }

  else if (playerSelection === 'scissors') {
    scissors.querySelector('h2').style.display = "none";

    let scissorImg = document.createElement('i');
    scissorImg.classList.add('fa','fa-hand-scissors');
    scissorImg.style.padding = "0 1rem";
    scissorImg.style.fontSize = "2rem"

    scissors.appendChild(scissorImg);
  }
}

// Mouse Leave Content change

function mouseLeave (playerSelection){
  
  if (playerSelection === 'rock'){
    rock.querySelector('h2').style.display = 'block';
    rock.querySelector('i').remove();
  }
  else if (playerSelection === 'paper'){
    paper.querySelector('h2').style.display = 'block';
    paper.querySelector('i').remove();
  }
  else if (playerSelection === 'scissors'){
    scissors.querySelector('h2').style.display = 'block';
    scissors.querySelector('i').remove();
  }
}



function playRound(playerSelection, computerSelection) {

  // Style setings to change back to normal.
  result.style.fontSize = "1rem";

  // If it is Round 1, then the score should be 0.

  if (roundInt === 1) {
    userScore.textContent = 0;
    compScore.textContent = 0;
  }

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
  compVerbage.style.visibility = 'hidden';
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




