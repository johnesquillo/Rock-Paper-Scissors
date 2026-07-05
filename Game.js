function playGame() {

}



function playRound(humanChoice, computerChoice) {
    
}

function getHumanChoice() {
    
    const humanSelection = ['rock', 'paper', 'scissors'];

    const humanChoice = prompt('Choose rock, paper, or scissors:', "");
    return humanChoice;

    if (humanChoice === computerSelection) {
        alert('Draw!');

    } else if (humanChoice === 'rock' && computerSelection === 'scissors') {
        alert('You win!');

    } else if (humanChoice === 'scissors' && computerSelection === 'paper') {
        alert('You win!');

    } else if (humanChoice === 'paper' && computerSelection === 'rock') {
        alert('You win!');

    } else {
        alert('Computer wins!');
    }
    
}

function getComputerChoice() {
    
    const computerSelection = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * computerSelection.length);
    return computerSelection[randomIndex];
    
    if (computerSelection === humanSelection) {
        alert('Draw!');
        
    } else if (computerSelection === 'rock' && humanSelection === 'scissors') {
        alert('Computer wins!');

    } else if (computerSelection === 'scissors' && humanSelection === 'paper') {
        alert('Computer wins!');

    } else if (computerSelection === 'paper' && humanSelection === 'rock') {
        alert('Computer wins!');

    } else {
        alert('You win!');
    }

}



const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);