let countDownTimer;
let time, score, fileSection;
let startButton;

function placeLetter() {
  let letter = String.fromCharCode(97 + Math.floor(Math.random() * 26));
  let newLetter = document.createElement("div");
  newLetter.innerHTML = letter;
  newLetter.className = letter;

  fileSection.appendChild(newLetter);

  let letterToNum = letter.charCodeAt(0);
  console.log(letterToNum);
}

function endEvent() {
  clearInterval(countDownTimer);
  document.removeEventListener("keydown", keyboardInput);

  alert("The Score :" + score.innerHTML);
}

function keyboardInput() {
  let key = String.fromCharCode(event.keyCode).toLowerCase();
  let boxes = document.getElementsByClassName(key);

  if(boxes[0]) {
    boxes[0].remove();
    score.innerHTML = parseInt(score.innerHTML) + 50;
    placeLetter();
  } else {
    score.innerHTML = parseInt(score.innerHTML) - 10;
  }
}

function startEvent() {
  placeLetter();
  countDownTimer = setInterval(countDown, 1000);
  document.addEventListener("keydown", keyboardInput);
  startButton.classList.add("disabled");

  setTimeout(function() {
    countDown();
  }, 60000);
}

function countDown() {
  let countTime = time.innerText;

  if(countTime < 1) {
    endEvent();
    return;
  }

  time.innerHTML = parseInt(time.innerHTML) - 1;
}

document.addEventListener("DOMContentLoaded", function(event) {
  time = document.getElementById("time");
  score = document.getElementById("score");
  fileSection = document.getElementById("fileSection");

  startButton = document.getElementById("btnStart");
  startButton.onclick = startEvent;
});