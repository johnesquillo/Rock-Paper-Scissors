function playGame() {
    alert("Welcome to rock, paper, scissors");
    const player = prompt("Are you ready?", 'YES or NO');

    if (player === null || player === '') {
        alert("Game cancelled!");
        return;

    } else if (player === 'YES' || player === 'yes') {
        alert("Greate lets start!");

    } else if (player === "NO" || player === 'no') {
        alert("Are you scared with computer?");
        return;
    } else {
        return;
    }

    let humanScore = 0;
    let computerScore = 0;

    for (let i = 1; i <= 5; i++) {
        alert(`Round ${i}`);
        alert("Chose wisely!");

        const humanSelection = getHumanChoice();

        if (humanSelection === null) {
            alert('Game cancelled!');
            return;
        }

        const computerSelection = getComputerChoice();
        const result = playRound(humanSelection, computerSelection);
        

        if (result === 'human') {
            humanScore++;
            alert('You win!');

        } else if (result === 'computer') {
            computerScore++;
            alert('Computer win!');

        } else {
            alert("It's a tie");
        }
            alert(`Human score: ${humanScore}`);
            alert(`Computer score: ${computerScore}`);
            

    }

        if (humanScore > computerScore) {
            alert(`Human highest score: ${humanScore}`);

        } else if(humanScore < computerScore) {
            alert(`Computer highest score: ${computerScore}`);

        } else {
            alert("It's a tie!");
        }
            alert(`Human score: ${humanScore} | Computer score: ${computerScore}`);

}

function playRound(humanChoice, computerChoice) {

        alert(`You Chose: ${humanChoice}`);
        alert(`Computer Chose: ${computerChoice}`);

        if (humanChoice === computerChoice) {
            return 'tie';

        } else if (humanChoice === 'rock' && computerChoice === 'scissors') {
            return 'human';

        } else if (humanChoice === 'scissors' && computerChoice === 'paper') {
            return 'human';

        } else if (humanChoice === 'paper' && computerChoice === 'rock') {
            return 'human';

        } else {
            return 'computer';
        }
}


function getHumanChoice() {
    const humanSelection = ['rock', 'paper', 'scissors'];

    const human = prompt(`Choose your choice: ${humanSelection}`);

    if (human === null) {
        return null;
    }

    const result = human.toLowerCase();

    if (human === 'rock' || human === 'paper' || human === 'scissors') {
        return result;
    }
        alert('Invalid Choices!');
        return getHumanChoice;
}

function getComputerChoice() {
    const computerSelection = ['rock', 'paper', 'rock'];

    const computerIndex = Math.floor(Math.random() * computerSelection.length);

    return computerSelection[computerIndex];
}

playGame();