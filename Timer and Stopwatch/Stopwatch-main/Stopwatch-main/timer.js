let $ = document;
let minuteInputElem = $.getElementById("minuteInput");
let secondInputElem = $.getElementById("secondInput");
let startBtn = $.getElementById("start");
let resetBtn = $.getElementById("reset");
let timerElem = $.getElementById("timer");

let setTimer;

function startHandler() {
  clearInterval(setTimer);

  min = minuteInputElem.value;
  sec = secondInputElem.value;

  setTimer = setInterval(function () {
    if (sec === -1) {
      min--;
      sec = 59;
    }
    if (sec < 10) {
      sec = "0" + sec;
    }
    if (min < 10 && min.toString().indexOf(0) !== 0) {
      min = "0" + min;
    }
    if (min === 0) {
      min = "0" + min;
    }
    if (sec <= 0 && min <= 0) {
      clearInterval(setTimer);
    }

    timerElem.innerHTML = "Timer -> " + min + " : " + sec;
    sec--;


  }, 100);
}

resetBtn.addEventListener("click", resetHandler);
function resetHandler() {
  timerElem.innerHTML = "Timer -> 00 : 00";
  minuteInputElem.value = 0;
  secondInputElem.value = 0;
  clearInterval(setTimer);
}

startBtn.addEventListener("click", startHandler);