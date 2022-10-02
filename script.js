let game = document.body.querySelector("#game");
let bg = document.body.querySelector("#bg");
let cat = document.body.querySelector("#cat");
let buttons = document.body.querySelector("#buttons");
let start = document.body.querySelector("#start");
let restart = document.body.querySelector("#restart");


const TOTAL_PICS = 25;

function randomizeLocation(image) {
  const catHeight = image.height;
  const catWidth = image.width;
  const maxHeight = bg.offsetHeight - catHeight;
  const maxWidth = bg.offsetWidth - catWidth;

  const xy = [Math.floor(Math.random() * maxWidth),
                            Math.floor(Math.random() * maxHeight)];
  cat.style.top = xy[1] + 'px';
  cat.style.left = xy[0] + 'px';
}

function catClickHandler() {
  let moo = document.createElement("audio");
  moo.src = "233146__jarredgibb__cow-moan-2-96khz.wav";
  moo.play();
  let prev = document.querySelector("#cat > img");
  cat.removeChild(prev);
  newRound();
}

function newRound() {
  let cashew = document.createElement("img");
  const randInt = Math.floor(Math.random() * (TOTAL_PICS) + 1);
  cashew.src = `imgs/${randInt}.jpg`;
  cashew.addEventListener("click", catClickHandler);
  cat.append(cashew);
  randomizeLocation(cashew);
}

function restartGame() {
  bg.hidden = true;
  cat.hidden = true;
  restart.hidden = true;
  start.hidden = false;
  let prev = document.querySelector("#cat > img");
  cat.removeChild(prev);
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