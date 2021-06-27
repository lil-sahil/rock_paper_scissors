function randomSelection(choices){
  return Math.floor(Math.random()*choices);
}

function computerPlay(){
  let computerChoices = ["rock", "paper", "scissors"];
  return computerChoices[randomSelection(computerChoices.length)]
}

// function playerSelection() {
//   let flag = true;
//   while (flag) {
//     let playerSelection = prompt("Pick either Rock, Paper or Scissors...");
//     switch (playerSelection.toLowerCase()) {
//       case "rock":
//         flag = false;
//         return playerSelection;
//       case "paper":
//         flag = false;
//         return playerSelection;
//       case "scissors":
//         flag = false;
//         return playerSelection;
//     }

//     console.log("Invalid Input, pick again.");
//   }
// }


function playRound(playerSelection, computerSelection) {

  if ( (playerSelection === "rock") && (computerSelection === "paper") ){
    return `You loose! ${computerSelection} beats ${playerSelection}!`;
  }

  else if ( (playerSelection === "paper") && (computerSelection === "scissors") ){
    return `You loose! ${computerSelection} beats ${playerSelection}!`;
  }

  else if ( (playerSelection === "scissors") && (computerSelection === "rock") ){
    return `You loose! ${computerSelection} beats ${playerSelection}!`;
  }

  else if ( (playerSelection === computerSelection) ){
    return `Tie Game! You both picked ${computerSelection}!`;
  }  

  else if (playerSelection === 'Invalid Input') {
    return playerSelection;
  }

  else {
    return `You win! ${playerSelection} beats ${computerSelection}`;
  }
}


function game(rounds) {

  let score = 0

  for (let round = 0; round < rounds; round++) {

    let userChoice = playerSelection();
    let computerChoice = computerPlay();

    console.log(userChoice, computerChoice)

    if ( playRound(userChoice, computerChoice).includes('loose') ) {
      score -= 1;
      console.log(playRound(userChoice, computerChoice));
    }

    else if ( playRound(userChoice, computerChoice).includes('win') ) {
      score += 1;
      console.log(playRound(userChoice, computerChoice));
    }

    else {
      console.log('Tie Round!')
    }
  }

  
  if (score === 0) {
    console.log('Tie Game');
  }

  else if (score > 0) {
    console.log('You win!');
  }

  else {
    console.log('You loose!');
  }
}


const rock = document.querySelector("#rock")
const paper = document.querySelector("#paper")
const scissors = document.querySelector("#scissors")


rock.addEventListener("click", playRound); 
paper.addEventListener("click", (e) => "paper"); 
scissors.addEventListener("click", (e) => "scissors"); 


function playerSelection() {
  
  switch () {
    case "rock":
      flag = false;
      return playerSelection;
    case "paper":
      flag = false;
      return playerSelection;
    case "scissors":
      flag = false;
      return playerSelection;
  }

    console.log("Invalid Input, pick again.");
  }
}
