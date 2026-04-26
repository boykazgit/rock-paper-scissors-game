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

function playGame(){
  // loop for 5 times running getComputerChoice and getHumanChoice each time for new selections
    for(let i = 0; i < 5; i++){
    // Initialize varaibles to store computer and human choices
    const computerSelection = getComputerChoice();
    const humanSelection = getHumanChoice();
      playRound(computerSelection, humanSelection);
      console.log(`Your score: ${humanScore}.\nComputer's score: ${computerScore}`)
    }
  // condition to determine the winner at the end of the game
  if (computerScore > humanScore){
    console.log(`You scored ${humanScore} and computer scored ${computerScore}.\n You Lose!`)
  }else if(humanScore > computerScore){
    console.log(`You scored ${humanScore} and computer scored ${computerScore}.\nYou Win!`)  
  }else{
    console.log(`You scored ${humanScore} and computer scored ${computerScore}.\nIt's a tie!`)   
  }
}
