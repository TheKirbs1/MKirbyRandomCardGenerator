/* eslint-disable */
import "bootstrap";
import "./style.css";
window.onload = function() {
  let suits = ["♦", "♥", "♠", "♣"];
  let values = [
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

  let deck = [];
  for (let suit of suits) {
    for (let value of values) {
      deck.push({ suit, value });
    }
  }

  deck = deck.sort(() => Math.random() - 0.5);

  function drawCard() {
    if (deck.length === 0) {
      alert("The deck is empty!");
      return;
    }

    let { suit, value } = deck.pop();

    document.querySelector(".cardTop").innerHTML = suit;
    document.querySelector(".cardMiddle").innerHTML = value;
    document.querySelector(".cardBottom").innerHTML = suit;

    if (suit === "♦" || suit === "♥") {
      document.querySelector(".cardTop").style.color = "red";
      document.querySelector(".cardBottom").style.color = "red";
    } else {
      document.querySelector(".cardTop").style.color = "black";
      document.querySelector(".cardBottom").style.color = "black";
    }

    const cardElement = document.getElementById("current-card");
    cardElement.classList.add("flipped");

    document.getElementById(
      "cards-left"
    ).innerHTML = `Cards left: ${deck.length}`;

    setTimeout(() => {
      cardElement.classList.remove("flipped");
    }, 2000);
  }

  document.getElementById("cardButton").addEventListener("click", drawCard);
};
