var Readable = require('stream').Readable;
var util = require('util');
var five = require('johnny-five');
var board = new five.Board();

var countDownTimer;
var time, score, fileSection;
var startButton;
var letter, letterToNum;
var state = false;

util.inherits(MyStream, Readable);
function MyStream(opt) {
  Readable.call(this, opt)
}
MyStream.prototype._read = function() {};
process.__defineGetter__('stdin', function() {
  if (process.__stdin) return process.__stdin
  process.__stdin = new MyStream()
  return process.__stdin
});

function placeLetter() {
  letter = String.fromCharCode(97 + Math.floor(Math.random() * 26));
  var newLetter = document.createElement("div");
  newLetter.innerHTML = letter;
  newLetter.className = letter;

  fileSection.appendChild(newLetter);

  letterToNum = letter.charCodeAt(0);
  if(letterToNum == 97 || letterToNum == 104 || letterToNum == 107 || letterToNum == 110 || letterToNum == 112
    || letterToNum == 114 || letterToNum == 117 || letterToNum == 118 || letterToNum == 119 || letterToNum == 120) {
    state = true;
  }
  else {
    state = false;
  }
  // console.log(0);
  console.log(letterToNum);
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
  startButton.classList.add("disabled");

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

board.on('ready', function() {
  var led = new five.Led(13);
  startButton.className = "connect";
  startButton.disabled = false;

  document.addEventListener('keydown', function() {
    if(state) {
      led.on();
    }
    else {
      led.off();
    }
  });
});

