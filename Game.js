function playGame() {
    alert('WELCOME SA PANG WEIRDONG LARO!');
    alert('YOU WILL BE PLAYING AGAINTS SA WALANG KWENTANG COMPUTER!');
    
    const player = prompt ('Are you ready to play KUPAL?', "YES or NO");
    
     const input = (player === '' || player === null) ? alert("BAKA TAKOT KA YAH?!") :
                   (player === 'YES' || player === 'yes') ? alert("LAKAS MO NAMAN PALA YAH!") :
                   (player === 'NO' || player === 'no') ? alert("BAKA TAKOT KA YAH?!") : 
                   alert("WALA KA PA LANG BITAW EH!");

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
            alert('BOBO MO PUMILI YAH!')
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

        alert(`You Chose: ${humanChoice}`);
        alert(`Computer Chose: ${computerChoice}`)

        let res = (humanChoice === computerChoice) ? alert("It's a Tie!") : 
                  (humanChoice === 'rock' && computerChoice === 'scissors') || 
                  (humanChoice === 'paper' && computerChoice === 'rock') ||
                  (humanChoice === 'scissors' && computerChoice === 'paper') ? alert('Human Wins!') :
                  alert('Computer Wins!');
    
}

function getHumanChoice() {

}

function getComputerChoice() {
    const computerSelection = ['rock', 'paper', 'scissors'];
    const selectionIndex = Math.floor(Math.random() * computerSelection.length);
    return computerSelection[selectionIndex];

}

playGame();
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);