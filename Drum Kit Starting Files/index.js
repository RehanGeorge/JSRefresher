function clickHandler(button) {
  const audio = new Audio(`sounds/${button}.mp3`);
  audio.play();
  document.querySelector(`.${button}`).classList.toggle("pressed");
  setTimeout(() => {
    document.querySelector(`.${button}`).classList.toggle("pressed");
  }, 100);
}

// Detecting Button Press
for (const button of document.querySelectorAll(".drum")) {
  button.addEventListener("click", () => clickHandler(button.classList[2]));
}

// Detecting Keyboard Press
document.addEventListener("keydown", (event) => {
  keyOptions = ["w", "a", "s", "d", "j", "k", "l"];
  const key = event.key;
  if (!keyOptions.includes(key)) {
    return;
  }
  const keyClass = document.querySelector(`.${key}`).classList[2];
  clickHandler(keyClass);
});
