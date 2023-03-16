function getComputerChoice() {
const arr = ['Rock', 'Paper', 'Scissors']
const choice = arr[(Math.floor(Math.random() * (arr.length)))]
return choice
}

console.log(getComputerChoice());