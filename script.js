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
  let humanChoice = prompt('Enter your choice: ');
  return humanChoice;
}

// Create varaibles to keep human and computer scores
let humanScore;
let computerScore;



