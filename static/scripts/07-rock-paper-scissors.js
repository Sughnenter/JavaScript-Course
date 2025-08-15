function playGame(playerMove) {
    computerMove = pickComputerMove();
    let result = "";
    if (playerMove === "scissors") {
        if (computerMove === "rock") {
            result = "You Lose";
        } else if (computerMove === "paper") {
            result = "you Win.";
        } else if (computerMove === "scissors") {
            result = "It's a tie.";
        }

    } else if (playerMove === "paper") {
        if (computerMove === "rock") {
            result = "You win.";
        } else if (computerMove === "paper") {
            result = "It's a tie.";
        } else if (computerMove === "scissors") {
            result = "You lose.";
        }

    } else if (playerMove === "rock") {
        if (computerMove === "rock") {
            result = "It's a tie.";
        } else if (computerMove === "paper") {
            result = "you lose.";
        } else if (computerMove === "scissors") {
            result = "You win!";
        }
    }
    alert(
        ` you picked ${playerMove} computer picked ${computerMove} ${result}! `
    );
}

function pickComputerMove() {
    const randomNumber = Math.random();
    let computerMove = "";
    if (randomNumber > 0 && randomNumber <= 0.33) {
        computerMove = "rock";
    } else if (randomNumber > 0.33 && randomNumber <= 0.66) {
        computerMove = "paper";
    } else {
        computerMove = "scissors";
    }
    return computerMove;
}