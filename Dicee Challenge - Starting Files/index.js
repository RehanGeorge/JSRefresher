function Randomizer() {
  document
    .querySelector(".img1")
    .setAttribute(
      "src",
      "images/dice" + (Math.floor(Math.random() * 6) + 1) + ".png"
    );
  document
    .querySelector(".img2")
    .setAttribute(
      "src",
      "images/dice" + (Math.floor(Math.random() * 6) + 1) + ".png"
    );
}

function Winner() {
  if (
    document.querySelector(".img1").getAttribute("src") ===
    document.querySelector(".img2").getAttribute("src")
  ) {
    document.querySelector("h1").innerHTML = "Draw!";
  } else if (
    document.querySelector(".img1").getAttribute("src") >
    document.querySelector(".img2").getAttribute("src")
  ) {
    document.querySelector("h1").innerHTML = "🚩Player 1 Wins!";
    document.querySelector(".p1").style.color = "Chartreuse";
  } else {
    document.querySelector("h1").innerHTML = "Player 2 Wins!🚩";
    document.querySelector(".p2").style.color = "Chartreuse";
  }
}

Randomizer();
Winner();
