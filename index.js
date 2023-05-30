let playerScore = 0
let computerScore = 0

const getComputerChoice = () => {
  const options = ['rock', 'paper', 'scissors']
  const computerChoice = options[Math.floor(Math.random()*options.length)]
  return computerChoice
}

const playRound = (playerSelection, computerSelection) => {
  if (playerSelection === computerSelection){
    return 'It\'s a Tie!';
  } 
  else if(
    (playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'scissors' && computerSelection === 'paper') ||
    (playerSelection === 'paper' && computerSelection === 'rock') 
  ){
    playerScore++;
    return `You win! ${playerSelection} beats ${computerSelection}`;
  }
  else {
    computerScore++;
    return `You lose! ${computerSelection} beats ${playerSelection}`;
  }
}

const game = () => {
  for (let i = 0; i < 5; i++){
const playerSelection =prompt('Rock, Paper, Scissors').toLowerCase();
const computerSelection = getComputerChoice()
console.log(playRound(playerSelection, computerSelection))
}}

const checkWinner = () => {
if (playerScore < computerScore){
  return 'Game Over! You\'ve lost to the computer!'
} else if (playerScore > computerScore){
  return 'You Win! You\'ve beat the computer!'
} else { return 'It\'s a Tie! You\'re basically a computer!'}
} 

game()
checkWinner()
console.log('Player Score:', playerScore, ';', 'Computer Score:', computerScore);