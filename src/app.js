/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let suit = ["♦", "♥", "♠", "♣"];
  let value = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A"
  ];

  function generateRandomSuit() {
    return suit[Math.floor(Math.random() * suit.length)];
  }
  function generateRandomValue() {
    return value[Math.floor(Math.random() * value.length)];
  }

  let randomSuit = generateRandomSuit();
  let randomValue = generateRandomValue();
  document.querySelector(".card").innerHTML =
    randomSuit + randomValue + randomSuit;

  if (randomSuit === "♦" || randomSuit === "♥") {
    document.querySelector(".card").style.color = "red";
  }

  console.log(randomSuit + randomValue + randomSuit);
};
