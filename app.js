let score = {
  wins: 0,
  losses: 0,
  ties: 0,
};

let result = "";

function displayScore(score) {
  let wins = document.querySelector("#wins");
  wins.innerHTML = score.wins;

  let losses = document.querySelector("#losses");
  losses.innerHTML = score.losses;

  let ties = document.querySelector("#ties");
  ties.innerHTML = score.ties;
}

function calculateScore() {
  if (result === "You win!") {
    score.wins += 1;
  } else if (result === "You lose!") {
    score.losses += 1;
  } else if (result === "It's a tie!") {
    score.ties += 1;
  }

  displayScore(score);
  return;
}

function playGame(playerMove) {
  const computerMove = pickComputerMove();

  if (playerMove === "scissors") {
    if (computerMove === "rock") {
      result = "You lose!";
    } else if (computerMove === "paper") {
      result = "You win!";
    } else if (computerMove === "scissors") {
      result = "It's a tie!";
    }

    calculateScore();

    alert(
      `You picked ${playerMove}, the computer picked ${computerMove}, ${result}.`
    );
  } else if (playerMove === "paper") {
    const computerMove = pickComputerMove();

    if (computerMove === "rock") {
      result = "You win!";
    } else if (computerMove === "paper") {
      result = "It's a tie!";
    } else if (computerMove === "scissors") {
      result = "You lose!";
    }

    calculateScore();

    alert(
      `You picked ${playerMove}, the computer picked ${computerMove}, ${result}.`
    );
  } else if (playerMove === "rock") {
    const computerMove = pickComputerMove();

    if (computerMove === "rock") {
      result = "It's a tie!";
    } else if (computerMove === "paper") {
      result = "You lose!";
    } else if (computerMove === "scissors") {
      result = "You win!";
    }

    calculateScore();

    alert(
      `You picked ${playerMove}, the computer picked ${computerMove}, ${result}.`
    );
  }
}

function pickComputerMove() {
  const randomNumber = Math.random();
  let computerMove = " ";

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = "rock";
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = "paper";
  } else if (randomNumber >= 2 / 3) {
    computerMove = "scissors";
  }

  return computerMove;
}
