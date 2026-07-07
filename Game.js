function playGame() {
    alert('WELCOME SA PANG WEIRDONG LARO!');
    alert('YOU WILL BE PLAYING AGAINTS SA WALANG KWENTANG COMPUTER!');
    
    const player = prompt ('Are you ready to play KUPAL?', "YES or NO");
    
    if (player === '' || player === null) {
        alert('TAKOT YARN?!');

    } else if (player === 'YES' || player === 'yes') {
        alert('LAKAS MO NAMAN PALA YAH!');

    } else if (player === 'NO' || player === 'no') {
        alert('WALA KA PA LANG BITAW!');

    } else {
        alert('BAKA TAKOT KA YAH?!');
    }

    const humanScore = 0;
    const computerScore = 0;

    for (let i = 1; i <= 5; i++) {
        alert(`Round: ${i}`);
        alert('MATALO KA SANA YAH!');

        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        const result = playRound(humanSelection, computerSelection);

        if (result === 'human') {
            humanScore++;
            alert(`Panalo ka yah! Score: Human ${humanScore} - Computer ${computerScore}`);

        } else if (result === 'computer') {
            computerScore++;
            alert(`Computer wins! Score: Computer ${computerScore} - Human ${com}`);
            alert('TANGA MO PUMILI YAH!')

        } else {
            alert('HANGGANG DRAW KA LANG PALA YAH!');
        }
    }

        if (humanScore > computerScore) {
            alert('NANDAYA ANG KUPAL!');

        } else if (computerScore > humanScore) {
            alert('TINALO KA LANG NG COMPUTER YAH!');

        } else {
            alert(`SCORE MO YAH! : ${humanScore} `);
            alert(`COMPUTER SCORE : ${computerScore}`);
        }

    
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