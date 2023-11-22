function playGame(playerMove) {
  const computerMove = pickComputerMove();

  let result = "";

  if (playerMove === "scissors") {
    if (computerMove === "rock") {
      result = "You lose!";
    } else if (computerMove === "paper") {
      result = "You win!";
    } else if (computerMove === "scissors") {
      result = "It's a tie!";
    }

    alert(
      `You picked ${playerMove}, the computer picked ${computerMove}, ${result}`
    );
  } else if (playerMove === "paper") {
    const computerMove = pickComputerMove();

    let result = " ";

    if (computerMove === "rock") {
      result = "You win!";
    } else if (computerMove === "paper") {
      result = "It's a tie!";
    } else if (computerMove === "scissors") {
      result = "You lose!";
    }

    alert(
      `You picked ${playerMove}, the computer picked ${computerMove}, ${result}`
    );
  } else if (playerMove === "rock") {
    const computerMove = pickComputerMove();

    let result = "";

    if (computerMove === "rock") {
      result = "It's a tie!";
    } else if (computerMove === "paper") {
      result = "You lose!";
    } else if (computerMove === "scissors") {
      result = "You win!";
    }

    alert(
      `You picked ${playerMove}, the computer picked ${computerMove}, ${result}`
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
