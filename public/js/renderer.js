let placeLetterInterval = 1000;
let placeLetterTimer, countDownTimer;
let time, score, fileSection;
let startButton;

function placeLetter() {
  let letter = String.fromCharCode(97 + Math.floor(Math.random() * 26));
  let newLetter = document.createElement("div");
  newLetter.innerHTML = letter;
  newLetter.className = letter;

  fileSection.appendChild(newLetter);
}

// function moveLetters() {
//   let boxes = document.querySelectorAll("#fileSection > div");
//   for (let i = 0; i < boxes.length; i++) {
//     if (parseInt(boxes[i].style.right) <= -10) {
//       endEvent();
//     }
//   }
// }

function endEvent() {
  clearInterval(moveLettersTimer);
  clearInterval(placeLetterTimer);
  document.removeEventListener("keydown", keyboardInput);
}

function keyboardInput() {
  let key = String.fromCharCode(event.keyCode).toLowerCase();
  let boxes = document.getElementsByClassName(key);

  if(boxes[0]) {
    boxes[0].remove();
    score.innerHTML = parseInt(score.innerHTML) + 1;
  } else {
    score.innerHTML = parseInt(score.innerHTML) - 1;
  }
}

function startEvent() {
  placeLetterTimer = setInterval(placeLetter, placeLetterInterval);
  countDownTimer = setInterval(countDown, 1000);
  document.addEventListener("keydown", keyboardInput);
  startButton.classList.add("disabled");

  setTimeout(function() {
    countDown();
  }, 60000);
}

function countDown() {
  time.innerHTML = parseInt(time.innerHTML) - 1;
  if(time < 0) { // 이거 조건 다시
    endEvent();
  }
}

document.addEventListener("DOMContentLoaded", function(event) {
  console.log("renderer.js start");

  time = document.getElementById("time");
  score = document.getElementById("score");
  fileSection = document.getElementById("fileSection");

  startButton = document.getElementById("btnStart");
  startButton.onclick = startEvent;
});