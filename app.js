const computerChoice = document.querySelector("#comp-choice");
const yourChoice = document.querySelector("#your-choice");
const result = document.querySelector("#result");
const buttons = document.querySelectorAll("button");

buttons.forEach((button) =>
  button.addEventListener("click", (e) => {
    yourChoice.innerText = e.target.id;
    generateComputerChoice();
    generateResult();
  })
);

function generateComputerChoice() {
  let randomNum = Math.floor(Math.random() * 3) + 1;
  switch (randomNum) {
    case 1:
      computerChoice.innerText = "rock";
      break;
    case 2:
      computerChoice.innerText = "scissors";
      break;
    case 3:
      computerChoice.innerText = "paper";
      break;
    default:
      break;
  }
}

function generateResult() {
  if (computerChoice.innerText === yourChoice.innerText) {
    result.innerText = "it's a draw";
  } else if (
    computerChoice.innerText === "rock" &&
    yourChoice.innerText === "paper"
  ) {
    result.innerText = "You win!!";
  } else if (
    computerChoice.innerText === "rock" &&
    yourChoice.innerText === "scissors"
  ) {
    result.innerText = "You lose!!";
  } else if (
    computerChoice.innerText === "paper" &&
    yourChoice.innerText === "scissors"
  ) {
    result.innerText = "You win!!";
  } else if (
    computerChoice.innerText === "paper" &&
    yourChoice.innerText === "rock"
  ) {
    result.innerText = "You lose!!";
  } else if (
    computerChoice.innerText === "scissors" &&
    yourChoice.innerText === "rock"
  ) {
    result.innerText = "You win!!";
  } else {
    result.innerText = "You lose!!";
  }
}
