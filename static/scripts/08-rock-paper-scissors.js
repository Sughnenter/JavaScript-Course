let score = JSON.parse(localStorage.getItem('score')) ||
	{ wins: 0, Losses: 0, Ties: 0 };

function playGame(playerMove) {
	computerMove = pickComputerMove();
	let result = "";
	if (playerMove === "scissors") {
		if (computerMove === "rock") {
			result = "You Lose.";
		} else if (computerMove === "paper") {
			result = "You Win.";
		} else if (computerMove === "scissors") {
			result = "It's a Tie.";
		}
	} else if (playerMove === "paper") {
		if (computerMove === "rock") {
			result = "You Win.";
		} else if (computerMove === "paper") {
			result = "It's a Tie.";
		} else if (computerMove === "scissors") {
			result = "You Lose.";
		}
	} else if (playerMove === "rock") {
		if (computerMove === "rock") {
			result = "It's a Tie.";
		} else if (computerMove === "paper") {
			result = "You Lose.";
		} else if (computerMove === "scissors") {
			result = "You Win.";
		}
	}
	if (result === "You Win.") {
		score.Wins = score.Wins += 1;
	} else if (result === "You Lose.") {
		score.Losses = score.Losses += 1;
	} else if (result === "It's a Tie.") {
		score.Ties = score.Ties += 1;
	}
	localStorage.setItem("score", JSON.stringify(score));
	alert(
		` you picked ${playerMove} computer picked ${computerMove} ${result}
 Wins: ${score.Wins} Losses: ${score.Losses} Ties: ${score.Ties}`
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
function resetScore() {
	score.Wins = 0;
	score.Losses = 0;
	score.Ties = 0;
	localStorage.removeItem('score');
	alert("Score has been reset.");
}