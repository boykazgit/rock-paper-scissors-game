function getComputerChoice() {
let choiceNumber = Math.random();
let computerChoice;
  if (choiceNumber < (1/3)) {
    return computerChoice = 'rock';
  }else if (choiceNumber > 1/3 && choiceNumber < 2/3){
    return computerChoice = 'paper';
  }else {
    return computerChoice = 'scissors';
  }
}

let humanScore = 0;
let computerScore = 0;

function playRound() {
  let computerChoice = getComputerChoice();

  let humanChoice = '';
  if(this.getAttribute('class') === 'rock-button') humanChoice = 'rock';
  else if (this.getAttribute('class') === 'paper-button') humanChoice = 'paper';
  else humanChoice = 'scissors';

  let resultContainer = document.querySelector('.results');
  resultContainer.textContent =  `Computer\'s choice: ${computerChoice}. Your Choice: ${humanChoice}`;
  
  let resultText = document.createElement('p')
  if (computerChoice === 'rock' && humanChoice === 'scissors' ||      
    computerChoice === 'paper' && humanChoice === 'rock' || computerChoice === 'scissors' && humanChoice === 'paper'){
    computerScore++;
    resultText.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
  }else if (humanChoice === 'rock' && computerChoice === 'scissors' ||
    humanChoice === 'paper' && computerChoice === 'rock' || humanChoice === 'scissors' && computerChoice === 'paper'){
    humanScore++;
    resultText.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
  }else if(humanChoice === computerChoice){
    resultText.textContent = `It's a tie!`;
  }
  resultContainer.appendChild(resultText);

  let scoresDisplay = document.createElement('div');
  scoresDisplay.textContent = `Your Score: ${humanScore} Computer's Score: ${computerScore}`;
  resultContainer.appendChild(scoresDisplay);

  let roundWinner = document.createElement('p');
  if (computerScore === 5 || humanScore === 5) {
    if (computerScore === 5) {
      roundWinner.textContent = `Computer wins the round!`
    }
    else if (humanScore === 5) {
      roundWinner.textContent = `You win the round!`
    }
    resultContainer.appendChild(roundWinner)
    buttons.forEach(element => element.removeEventListener('click', playRound));
  
    let restartButton = document.createElement('button');
    restartButton.textContent = 'Restart';
    restartButton.classList.add('restart-button');
    restartButton.addEventListener('click', () => {
      computerScore = 0;
      humanScore = 0;
      //remove all the children of the resultContainer
      while(resultContainer.firstChild){
      resultContainer.removeChild(resultContainer.firstChild);
      }
      buttons.forEach(element => element.addEventListener('click', playRound))
    })
    resultContainer.appendChild(restartButton);
  }
}
const buttons = document.querySelectorAll('button');
buttons.forEach(element => element.addEventListener('click', playRound));