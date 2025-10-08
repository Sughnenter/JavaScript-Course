let score = JSON.parse(localStorage.getItem('score')) ||
  { wins: 0, Losses: 0, Ties: 0 };
updateScore()


let isAutoPlaying = false;
let intervalId;

// const autoplay = () =>{

// }


function autoPlay() {
  if (!isAutoPlaying) {
    intervalId = setInterval(() => {
      const playerMove = pickComputerMove();
      playGame(playerMove);
    }, 1000);
    isAutoPlaying = true;
  } else {
    clearInterval(intervalId);
    isAutoPlaying = false;
  }

}

document.querySelector('.js-rock-button')
  .addEventListener('click', () => {
    playGame('rock')
  });
document.querySelector('.js-paper-button').addEventListener('click', () => {
  playGame('paper')
});
document.querySelector('.js-scissors-button').addEventListener('click', () => {
  playGame('scissors')
});

document.querySelector('.js-reset-score-button').addEventListener('click', () => {
  resetScore(), updateScore()
});

document.querySelector('.js-auto-play-button').addEventListener('click', () => {
  autoPlay()
});

document.body.addEventListener('keydown', (event) => {
  if (event.key === 'r') {
    playGame('rock');
  } else if (event.key === 'p') {
    playGame('paper');
  } else if (event.key === 's') {
    playGame('scissors')
  }
})

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
  updateScore()
  document.querySelector('.js-result').innerHTML = result
  document.querySelector('.js-moves').innerHTML = `you <img src="static/images/${playerMove}-emoji.png">
      computer <img src="static/images/${computerMove}-emoji.png">`;

}
function updateScore() {
  document.querySelector('.js-score').innerHTML =
    `Wins: ${score.Wins} Losses: ${score.Losses} Ties: ${score.Ties}`;
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
}

