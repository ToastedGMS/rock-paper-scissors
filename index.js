let gameCounter = 0
let playerScore = 0
let computerScore = 0



const getComputerChoice = () => {
  const options = ['rock', 'paper', 'scissors']
  const computerChoice = options[Math.floor(Math.random()*options.length)]
  return computerChoice
}

const playRound = (playerSelection, computerSelection) => {
  if (playerSelection === computerSelection){
    gameCounter++;
    return 'It\'s a Tie!';
  } 
  else if(
    (playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'scissors' && computerSelection === 'paper') ||
    (playerSelection === 'paper' && computerSelection === 'rock') 
  ){
    gameCounter++;
    playerScore++;
    return `You win! ${playerSelection} beats ${computerSelection}`;
  }
  else {
    gameCounter++;
    computerScore++;
    return `You lose! ${computerSelection} beats ${playerSelection}`;
  }
}

const checkWinner = () => {

  if( (computerScore === 5) ||
  (gameCounter === 10 && computerScore > playerScore)){
  return 'Game Over! You\'ve lost to the computer!'
} else if( (playerScore === 5) ||
  (gameCounter === 10 && playerScore > computerScore)){
  return 'You Win! You\'ve beat the computer!'
} else if (gameCounter === 10 && playerScore === computerScore){ 
  return 'It\'s a Tie! You\'re basically a computer!'
} else { return `Round ${gameCounter}`; }
} 

const results = document.querySelector('#results');
results.style.cssText = 'color: yellow'

let buttons = document.querySelectorAll('.choiceBtn');

buttons.forEach(function(button) {
  button.addEventListener('click', function(e){
    let clickedBtn = e.target;
    const playerSelection = clickedBtn.innerText;
    const computerSelection = getComputerChoice();
    const returnValue = playRound(playerSelection, computerSelection)
    results.textContent = returnValue;
  
  const score = document.querySelector('#score');
    let scoreDiv = document.createElement('div');
    let winCheck = document.createElement('div')
    score.append(scoreDiv, winCheck);
    let scoreDisplay = 'Player Score: ' + playerScore + ' ; ' + 'Computer Score: ' + computerScore + ' ;';
    scoreDiv.textContent = scoreDisplay;
    winCheck.textContent = checkWinner();
  })
});

score.style.cssText = 'color: yellow' ;

window.addEventListener('load', function() {
  let audio = document.querySelector('#pacmanStartup');
  audio.play();
});
