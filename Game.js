document.addEventListener("DOMContentLoaded", () => {

    alert("WELCOME TO ROCK-PAPER-SCISSORS!");
    alert("YOU WILL PLAY AGAINST THE COMPUTER!");
    
    const ready = confirm("ARE YOU READY TO PLAY?");

    if (!ready) {
        alert("GAME CANCELLED. SEE YOU NEXT TIME!");
        return;
    }

    alert("GREAT! LET'S START THE GAME!");

    const humanButtons = document.querySelectorAll(".human-choice");
    const computerButtons = document.querySelectorAll(".computer-choice");

    let humanScore = 0;
    let computerScore = 0;
    let round = 1;
    const maxRounds = 5;


    // =========================
    // HUMAN CHOICE
    // =========================

    humanButtons.forEach((button) => {

        button.addEventListener("click", () => {

            const humanChoice = button.dataset.choice;

            const computerChoice = getComputerChoice();

            const result = playRound(
                humanChoice,
                computerChoice
            );

            // Show computer's choice on screen
            showComputerChoice(computerChoice);

            // Update score
            updateScore(result);

            // Show round result
            showResult(
                result,
                humanChoice,
                computerChoice
            );

            // Check if game is finished
            if (round === maxRounds) {
                endGame();
            } else {
                round++;
            }

        });

    });


    // =========================
    // COMPUTER CHOICE
    // =========================

    function getComputerChoice() {

        const choices = [
            "rock",
            "paper",
            "scissors"
        ];

        const randomIndex =
            Math.floor(Math.random() * choices.length);

        return choices[randomIndex];
    }


    // =========================
    // PLAY ROUND
    // =========================

    function playRound(humanChoice, computerChoice) {

        if (humanChoice === computerChoice) {
            return "tie";
        }

        if (
            (humanChoice === "rock" &&
                computerChoice === "scissors") ||

            (humanChoice === "paper" &&
                computerChoice === "rock") ||

            (humanChoice === "scissors" &&
                computerChoice === "paper")
        ) {
            return "human";
        }

        return "computer";
    }


    // =========================
    // UPDATE SCORE
    // =========================

    function updateScore(result) {

        if (result === "human") {
            humanScore++;
        }

        if (result === "computer") {
            computerScore++;
        }

    }


    // =========================
    // SHOW ROUND RESULT
    // =========================

    function showResult(
        result,
        humanChoice,
        computerChoice
    ) {

        // Capitalize choices
        const human =
            humanChoice.charAt(0).toUpperCase() +
            humanChoice.slice(1);

        const computer =
            computerChoice.charAt(0).toUpperCase() +
            computerChoice.slice(1);


        // Show who won
        if (result === "human") {

            alert(
                `ROUND ${round}\n\n` +
                `You chose: ${human}\n` +
                `Computer chose: ${computer}\n\n` +
                `YOU WIN!\n\n` +
                `Human Score: ${humanScore}\n` +
                `Computer Score: ${computerScore}`
            );

        } else if (result === "computer") {

            alert(
                `ROUND ${round}\n\n` +
                `You chose: ${human}\n` +
                `Computer chose: ${computer}\n\n` +
                `YOU LOSE!\n\n` +
                `Human Score: ${humanScore}\n` +
                `Computer Score: ${computerScore}`
            );

        } else {

            alert(
                `ROUND ${round}\n\n` +
                `You chose: ${human}\n` +
                `Computer chose: ${computer}\n\n` +
                `IT'S A TIE!\n\n` +
                `Human Score: ${humanScore}\n` +
                `Computer Score: ${computerScore}`
            );
        }

    }


    // =========================
    // SHOW COMPUTER CHOICE
    // =========================

    function showComputerChoice(choice) {

        computerButtons.forEach((button) => {

            button.style.transform = "";
            button.style.borderWidth = "";

        });

        const selectedButton =
            document.querySelector(
                `.computer-choice[data-choice="${choice}"]`
            );

        if (selectedButton) {

            selectedButton.style.transform =
                "scale(1.08)";

            selectedButton.style.borderWidth =
                "8px";
        }
    }


    // =========================
    // END GAME
    // =========================

    function endGame() {

        let finalMessage;


        if (humanScore > computerScore) {

            finalMessage =
                "CONGRATULATIONS!\n\n" +
                "YOU ARE THE WINNER!";

        } else if (computerScore > humanScore) {

            finalMessage =
                "GAME OVER!\n\n" +
                "THE COMPUTER WINS!";

        } else {

            finalMessage =
                "GAME OVER!\n\n" +
                "IT'S A TIE!";
        }


        alert(
            `FINAL RESULT\n\n` +
            `Human Score: ${humanScore}\n` +
            `Computer Score: ${computerScore}\n\n` +
            `${finalMessage}`
        );


        // Disable buttons after 5 rounds
        humanButtons.forEach((button) => {
            button.disabled = true;
            button.style.opacity = "0.5";
            button.style.cursor = "not-allowed";
        });

    }

});