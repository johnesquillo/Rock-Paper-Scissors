function playGame() {
    
}



function playRound(humanChoice, computerChoice) {
    
}

function getHumanChoice() {
    
    const humanSelection = ['rock', 'paper', 'scissors'];

    const myChoice = prompt('Enter your choice: rock, paper, or scissors');

    (myChoice === "") ?  alert('Canceled!') : null;

    let result = (rock > scissors) ? alert('You win!') :
                 (scissors > paper) ? alert('You win!') :
                 (paper > rock) ? alert('You win!') : alert('You lose!');
                 alert(result);
}

function getComputerChoice() {
    
    const computerSelection = ['rock', 'paper', 'scissors'];
    

}



const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);