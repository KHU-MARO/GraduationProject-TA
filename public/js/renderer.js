var Readable = require('stream').Readable;
var util = require('util');
var five = require('johnny-five');
var board = new five.Board();

var countDownTimer;
var time, score, fileSection;
var startButton;
var letter, letterToNum;

var state1 = false;
var state2 = false;
var state3 = false;
var state4 = false;
var state5 = false;
var state6 = false;
var state7 = false;
var state8 = false;
var state9 = false;
var state10 = false;

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
  if(letterToNum == 97) {
    state1 = true;
  }
  else if(letterToNum == 104) {
    state2 = true;
  }
  else if(letterToNum == 107) {
    state3 = true;
  }
  else if(letterToNum == 110) {
    state4 = true;
  }
  else if(letterToNum == 112) {
    state5 = true;
  }
  else if(letterToNum == 114) {
    state6 = true;
  }
  else if(letterToNum == 117) {
    state7 = true;
  }
  else if(letterToNum == 118) {
    state8 = true;
  }
  else if(letterToNum == 119) {
    state9 = true;
  }
  else if(letterToNum == 120) {
    state10 = true;
  }
  else {
    state1 = false;
    state2 = false;
    state3 = false;
    state4 = false;
    state5 = false;
    state6 = false;
    state7 = false;
    state8 = false;
    state9 = false;
    state10 = false;
  }
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
  startButton.className = "connect";
  startButton.disabled = false;

  var relay1 = new five.Pin(23);
  var relay2 = new five.Pin(25);
  var relay3 = new five.Pin(27);
  var relay4 = new five.Pin(29);
  var relay5 = new five.Pin(31);
  var relay6 = new five.Pin(22);
  var relay7 = new five.Pin(24);
  var relay8 = new five.Pin(26);
  var relay9 = new five.Pin(28);
  var relay10 = new five.Pin(30);

  relay1.high();
  relay2.high();
  relay3.high();
  relay4.high();
  relay5.high();
  relay6.high();
  relay7.high();
  relay8.high();
  relay9.high();
  relay10.high();

  document.addEventListener('keyup', function() {
    if(state1) {
      relay1.low();
    }
    else if(state2) {
      relay2.low();
    }
    else if(state3) {
      relay3.low();
    }
    else if(state4) {
      relay4.low();
    }
    else if(state5) {
      relay5.low();
    }
    else if(state6) {
      relay6.low();
    }
    else if(state7) {
      relay7.low();
    }
    else if(state8) {
      relay8.low();
    }
    else if(state9) {
      relay9.low();
    }
    else if(state10) {
      relay10.low();
    }
    else {
      relay1.high();
      relay2.high();
      relay3.high();
      relay4.high();
      relay5.high();
      relay6.high();
      relay7.high();
      relay8.high();
      relay9.high();
      relay10.high();
    }
  });
});

