let game = document.body.querySelector("#game");
let buttons = document.body.querySelector("#buttons");
let start = document.body.querySelector("#start");

function generateRandomPic() {

}

function newRound() {
  let cashew = document.createElement("img");


  game.append(cashew);
}

function restartGame() {
  location.reload();
}
function startGame() {
  let restart = document.createElement("button");
  restart.type = "button";
  restart.innerText = "Restart";
  restart.classList.add("btn");
  restart.classList.add("btn-danger");
  restart.addEventListener("click", restartGame);
  buttons.appendChild(restart);
  buttons.removeChild(start);

  let bg = document.createElement("img");
  bg.src="/imgs/cow.jpg";
  game.appendChild(bg);

  console.log("Starting Game!");
}

start.addEventListener("click", startGame);