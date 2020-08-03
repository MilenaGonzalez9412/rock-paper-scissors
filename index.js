let userScore = 0;
let computerScore = 0;
const rockHand = document.getElementById("rock-hand");
const paperHand = document.getElementById("paper-hand");
const scissorsHand = document.getElementById("scissors-hand");
const userScoreSpan = document.getElementById("user-score");
const computerScoreSpan = document.getElementById("computer-score");
const result = document.getElementById("result");
const userChoiceSpan = document.getElementById("user-choice");
const computerChoiceSpan = document.getElementById("computer-choice");

document.getElementById("rock-hand").addEventListener("click", function () {
  play("rock");
});

paperHand.addEventListener("click", function () {
  play("paper");
});

scissorsHand.addEventListener("click", function () {
  play("scissors");
});

function getcomputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function play(userChoice) {
  let computerChoice = getcomputerChoice();
  console.log("User" + userChoice + "," + "Computer" + computerChoice);

  userChoiceSpan.innerHTML = userChoice;
  computerChoiceSpan.innerHTML = computerChoice;

  switch (userChoice + computerChoice) {
    case "rockpaper":
    case "scissorsrock":
    case "paperscissors":
      lose(userChoice, computerChoice);
      break;
    case "rockscissors":
    case "scissorspaper":
    case "paperrock":
      win(userChoice, computerChoice);
      break;
    case "rockrock":
    case "scissorscissor":
    case "paperpaper":
      draw(userChoice, computerChoice);
      break;
  }
}

function win(userChoice, computerChoice) {
  console.log("win");
  userScore++;
  userScoreSpan.innerHTML = userScore;
  computerScoreSpan.innerHTML = computerScore;
  result.innerHTML = "User Won";
}

function lose(userChoice, computerChoice) {
  console.log("lose");
  computerScore++;
  computerScoreSpan.innerHTML = computerScore;
  userScoreSpan.innerHTML = userScore;
  result.innerHTML = "Computer Won";
}

function draw(userChoice, computerChoice) {
  console.log("draw");
  computerScoreSpan.innerHTML = computerScore;
  userScoreSpan.innerHTML = userScore;
  result.innerHTML = "Draw";
}

function restartGame() {
  computerScore = 0;
  userScore = 0;
  result.innerHTML = "";
  computerScoreSpan.innerHTML = "";
  computerChoiceSpan.innerHTML = "";
  userScoreSpan.innerHTML = "";
  userChoiceSpan.innerHTML = "";
}
