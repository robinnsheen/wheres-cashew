"use strict";

let game = document.body.querySelector("#game");
let bg = document.body.querySelector("#bg");
let cat = document.body.querySelector("#cat");
let buttons = document.body.querySelector("#buttons");
let start = document.body.querySelector("#start");
let restart = document.body.querySelector("#restart");
let catFact = document.body.querySelector("#cat-fact");
let board = document.body.querySelector("#board");
let bgimg = window.getComputedStyle(board).backgroundImage;


const TOTAL_PICS = 25;

async function getCatFact() {
  const response = await fetch('https://catfact.ninja/fact');
  const fact = await response.json();
  return fact
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
  // The maximum is exclusive and the minimum is inclusive
}

function randomizeLocation(image) {
  const catHeight = image.height;
  const catWidth = image.width;
  const maxHeight = +(window.getComputedStyle(game).height.split("px")[0]);
  const maxWidth = +(window.getComputedStyle(game).width.split("px")[0]);
  const minHeight = +(window.getComputedStyle(game).marginTop.split("px")[0]);
  const minWidth = +(window.getComputedStyle(game).marginRight.split("px")[0]);

  const xy = [getRandomInt(minWidth, maxWidth), getRandomInt(minHeight, maxHeight)];
  cat.style.top = xy[1] + 'px';
  cat.style.left = xy[0] + 'px';
}

async function catClickHandler() {
  let moo = document.createElement("audio");
  moo.src = "233146__jarredgibb__cow-moan-2-96khz.wav";
  moo.play();
  let prev = document.querySelector("#cat > img");
  cat.removeChild(prev);
  let fact = await getCatFact()
  console.log(fact)
  catFact.innerText = fact.fact;
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
  board.classList.add("with-background");
  console.log("Restarting game!")
}

function startGame() {
  newRound();
  bg.hidden = false;
  cat.hidden = false;
  restart.hidden = false;
  start.hidden = true;
  board.classList.remove("with-background");

  console.log("Starting Game!");
}

start.addEventListener("click", startGame);
restart.addEventListener("click", restartGame);