let BUTTON_COLOURS = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let counter = 0;

function playSound(colour) {
  let audio = new Audio(`./sounds/${colour}.mp3`);
  audio.play();
}

function nextSequence() {
  let randomNumber = Math.floor(Math.random() * 4);
  let randomChosenColour = BUTTON_COLOURS[randomNumber];
  gamePattern.push(randomChosenColour);
  $(`#${randomChosenColour}`).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);
}

$(".btn").click(function () {
  let userColour = this.id;
  playSound(userColour);
  $(`#${userColour}`).addClass("pressed");
  setTimeout(function () {
    $(`#${userColour}`).removeClass("pressed");
  }, 100);
  if (userColour === gamePattern[counter]) {
    counter++;
    if (counter === gamePattern.length) {
      setTimeout(function () {
        nextSequence();
        counter = 0;
      }, 1000);
      $("h1").text(`Level ${gamePattern.length}`);
    }
  } else {
    $("h1").text("Game Over, Press Any Key to Restart");
    $("body").addClass("game-over");
    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 200);
    playSound("wrong");
    gamePattern = [];
    counter = 0;
  }
});

$(document).keydown(function () {
  while (gamePattern.length < 1) {
    $("h1").text("Level 0");
    nextSequence();
  }
});
