function playGame() {
    alert('WELCOME SA PANG WEIRDONG LARO!');
    alert('YOU WILL BE PLAYING AGAINTS SA WALANG KWENTANG COMPUTER!');
    
    const player = prompt ('Are you ready to play KUPAL?', "YES or NO");
    
       if (player === null || player === '') {
            alert("Game canceled!");
            return;

       } else if (player === "YES" || player === "yes") {
            alert("Greate lets start!");

       } else if (player === "NO" || player === 'no') {
            alert('You afraid with computer?');
            return;

       } else {
            return;
       }

        let humanScore = 0;
        let computerScore = 0;

     for (let i = 1; i <= 5; i++) {
        alert(`Round: ${i}`);
        alert('Chose Wisely!');

        const humanSelection = getHumanChoice();

         if (humanSelection === null) {
             alert("Game cancelled");
             return;
         }
         
        const computerSelection = getComputerChoice();

        const result = playRound(humanSelection, computerSelection);

        

        if (result === 'human') {
            humanScore++;
            alert('You win!');

        } else if (result === 'computer') {
            computerScore++;
            alert('You Lose!');

        } else {
            alert("It's a Tie!");
            
        } 
             alert(`Human score: ${humanScore}`);
             alert(`Computer score: ${computerScore}`);
            

    }

        if (humanScore > computerScore) {
            alert('Good job!!');

        } else if (computerScore > humanScore) {
            alert("Better luck next time!");

        } else {
            alert("It's a tie!");
        }
            alert(`Your score: ${humanScore} | Computer score: ${computerScore}`);

    
}





function playRound(humanChoice, computerChoice) {
        

        alert(`You Chose: ${humanChoice}`);
        alert(`Computer Chose: ${computerChoice}`);

        if (humanChoice === computerChoice) {
            return "tie";
            
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
     
    const human = prompt(`Enter your choice: ${humanSelection}`);

   if(human === null) {
    return null;
   }

    const result = human.toLowerCase();

    if(human === 'rock' || human === 'paper' || human === 'scissors') {
        return result;

    }
        alert('Invalid Choice');
              

}
        

function getComputerChoice() {
    const computerSelection = ['rock', 'paper', 'scissors'];
    const selectionIndex = Math.floor(Math.random() * computerSelection.length);
    return computerSelection[selectionIndex];

}



playGame();


