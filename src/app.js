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
  document.querySelector(".cardTop").innerHTML = randomSuit;
  document.querySelector(".cardMiddle").innerHTML = randomValue;
  document.querySelector(".cardBottom").innerHTML = randomSuit;

  if (randomSuit === "♦" || randomSuit === "♥") {
    document.querySelector(".cardTop").style.color = "red";
    document.querySelector(".cardBottom").style.color = "red";
  }

  console.log(randomSuit + randomValue + randomSuit);
  const refreshTimer = document.getElementById("refresh-timer");

  let timerInSeconds = 0;

  setInterval(() => {
    timerInSeconds += 1;

    // refreshTimer.innerHTML = `New card in 10: ${timerInSeconds} seconds`;

    if (timerInSeconds >= 10) {
      window.location.reload();
    }
  }, 1000);
};
