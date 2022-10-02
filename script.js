let game = document.body.querySelector("#game");
let bg = document.body.querySelector("#bg");
let cat = document.body.querySelector("#cat");
let buttons = document.body.querySelector("#buttons");
let start = document.body.querySelector("#start");
let restart = document.body.querySelector("#restart");


const TOTAL_PICS = 25;

function randomizeLocation() {

}

function newRound() {
  let prev = document.querySelector("#cat > img");
  if (prev) {
    cat.removeChild(prev);
  }
  let cashew = document.createElement("img");
  const randInt = Math.floor(Math.random() * (TOTAL_PICS) + 1);
  cashew.src = `imgs/${randInt}.jpg`;
  cashew.addEventListener("click", newRound);
  cat.append(cashew);
}

function restartGame() {
  bg.hidden = true;
  cat.hidden = true;
  restart.hidden = true;
  start.hidden = false;
  console.log("Restarting game!")
}
function startGame() {
  newRound();
  bg.hidden = false;
  cat.hidden = false;
  restart.hidden = false;
  start.hidden = true;

  console.log("Starting Game!");
}

start.addEventListener("click", startGame);
restart.addEventListener("click", restartGame);