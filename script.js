// function to return computer choice
function getComputerChoice() {
// Generate random number and assign it to a choiceNumber
let choiceNumber = Math.random();
let computerChoice;
// Return computerChoice based on choiceNumber
  if (choiceNumber < (1/3)) {
    return computerChoice = 'rock';
  }else if (choiceNumber > 1/3 && choiceNumber < 2/3){
    return computerChoice = 'paper';
  }else {
    return computerChoice = 'scissors';
  }
}

// Function to propmt user for their choice and return it
function getHumanChoice() {
  let humanChoice = prompt('Enter your choice: ').toLowerCase();
  return humanChoice;
}

// Create varaibles to keep human and computer scores
let humanScore = 0;
let computerScore = 0;

// Create function to implement a round system
// takes computerChoice and humanChoice as arguements
// increments each users score according to the winner
// announces the user of a round
function playRound(computerChoice, humanChoice) {
  // conditional for determing who wins or loses based on choices
  // rock beats scissors
  // paper beats rock
  // scissors beats paper
  // tie if the same choice
  console.log(`Computer\'s choice: ${computerChoice}.`)
  if (computerChoice === 'rock' && humanChoice === 'scissors'){
    computerScore++;
    console.log(`You lose! ${computerChoice} beats ${humanChoice}`)
  }else if (computerChoice === 'paper' && humanChoice === 'rock'){
    computerScore++;
    console.log(`You lose! ${computerChoice} beats ${humanChoice}`)
  }else if (humanChoice === 'rock' && computerChoice === 'scissors'){
      humanScore++;
    console.log(`You win! ${humanChoice} beats ${computerChoice}`)
  }else if(humanChoice === 'paper' && computerChoice === 'rock'){
    humanScore++;
    console.log(`You win! ${humanChoice} beats ${computerChoice}`)    
  }else if(humanChoice === computerChoice){
    console.log(`It's a tie!`)    
  }
}

