function playGame() {
    alert('Welcome to Rock, Paper, Scissors!');
    alert('You will be playing against the computer.');
    
    const player = prompt ('Are you ready to play?', "YES or NO");
    
    if (player === '' || player === null) {
        alert('Takot yarn?!');

    } else if (player === 'YES' || player === 'yes') {
        alert('Lakas mo naman pala ya!');

    } else if (player === 'NO' || player === 'no') {
        alert('Wala ka pa lang bitaw eh!');

    } else {
        alert('Baka takot ka yah?');
    }

    for (let i = 0; i < 5; i++) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }

    let humanScore = 0;
    let computerScore = 0;

    
}



function playRound(humanChoice, computerChoice) {

}

function getHumanChoice() {

}

function getComputerChoice() {
    const computerSelection = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * computerSelection.length);
    return computerSelection[randomIndex];

}

playGame();
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);