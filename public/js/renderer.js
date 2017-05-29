const serialport = require('serialport');
const port = new serialport('/dev/cu.usbmodem1411');

port.on('open', function() {
  port.write('Start', function(err) {
    if (err) {
      return console.log('Error on write: ', err.message);
    }
    console.log('Serial start');
  });
});

var countDownTimer;
var time, score, fileSection;
var startButton;
var letter, letterToNum;

function placeLetter() {
  letter = String.fromCharCode(97 + Math.floor(Math.random() * 26));
  var newLetter = document.createElement("div");
  newLetter.innerHTML = letter;
  newLetter.className = letter;

  fileSection.appendChild(newLetter);

  // letterToNum = letter.charCodeAt(0);
  console.log(letter);

  for(var i = 0; i < 10; i++) {
    port.write(letter);
  }
}

function endEvent() {
  clearInterval(countDownTimer);
  document.removeEventListener("keydown", keyboardInput);

  alert("The Score :" + score.innerHTML);
}

function keyboardInput() {
  var key = String.fromCharCode(event.keyCode).toLowerCase();
  var boxes = document.getElementsByClassName(key);

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
  // startButton.classList.add("disabled");

  setTimeout(function() {
    countDown();
  }, 60000);
}

function countDown() {
  var countTime = time.innerText;

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