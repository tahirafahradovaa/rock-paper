const closeBtn = document.querySelector(".close");
const rules = document.querySelector(".rules-container");
const gameZone = document.querySelector(".gameZone");
const rulesBtn = document.querySelector(".rules");
const result = document.querySelector(".results");
const buttons = document.querySelectorAll(".choice-btn");
const resultsPage = document.querySelector(".finalPage");
const compChoice = document.querySelector(".comp-choice");
const winner = document.querySelector(".winner");
const restart = document.querySelector(".restart");
const resultText = document.querySelector(".text");
const score = document.querySelector(".scoreNumber");
//local storage
let counter = localStorage.getItem("score")
  ? JSON.parse(localStorage.getItem("score"))
  : 0;
let gameResult;
score.innerHTML = counter;
const compArr = ["paper", "scissors", "rock"];
function generateRand(params) {
  const randNumber = Math.floor(Math.random() * 3);
  return randNumber;
}
let rand = generateRand();
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    gameZone.style.display = "none";
    const myChoice = button.value;
    resultsPage.style.display = "grid";
    getResult(compArr[rand], myChoice);
    result.innerHTML = `<div class="choice ${myChoice}">
    <img src="images/icon-${myChoice}.svg" />
  </div>`;
    setInterval(() => {
      winner.style.display = "block";
      compChoice.innerHTML = `<div class="choice ${compArr[rand]}">
  <img src="images/icon-${compArr[rand]}.svg" />
  </div>`;
      score.innerText = counter;
      resultText.innerText = gameResult;
    }, 1000);
  });
});
restart.addEventListener("click", () => {
  resultsPage.style.display = "none";
  gameZone.style.display = "grid";
  location.reload();
  localStorage.setItem("score", JSON.stringify(counter));
});

rulesBtn.addEventListener("click", () => {
  rules.style.display = "block";
  gameZone.style.display = "none";
  resultsPage.style.display = "none";
});
closeBtn.addEventListener("click", () => {
  rules.style.display = "none";
  gameZone.style.display = "grid";
});

function getResult(comp, player) {
  if (comp === player) {
    gameResult = "it is a draw!";
    counter = counter + 0;
  }
  if (comp === "rock" && player === "paper") {
    gameResult = "YOU WIN!";
    counter = counter + 1;
  }
  if (comp === "rock" && player === "scissors") {
    gameResult = "YOU LOSE!";
    counter = counter - 1;
  }
  if (comp === "scissors" && player === "paper") {
    gameResult = "YOU LOSE!";
    counter = counter - 1;
  }
  if (comp === "scissors" && player === "rock") {
    gameResult = "YOU WIN!";
    counter = counter + 1;
  }
  if (comp === "paper" && player === "scissors") {
    gameResult = "YOU WIN!";
    counter = counter + 1;
  }
  if (comp === "paper" && player === "rock") {
    gameResult = "YOU LOSE!";
    counter = counter - 1;
  }
}
