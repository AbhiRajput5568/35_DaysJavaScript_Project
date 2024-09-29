let display = document.querySelector(".stopWatch p");
let play = document.querySelector(".stopWatch .play");
let stop = document.querySelector(".stopWatch .stop");
let restart = document.querySelector(".stopWatch .restart");
let [seconds, minutes, hours] = [0, 0, 0];
let timer = null;
function stopWatch() {
  seconds++;
  if (seconds == 60) {
    seconds = 0;
    minutes++;
    if (minutes == 60) {
      minutes = 0;
      hours++;
    }
  }
  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;

  display.innerHTML = `${h} : ${m} : ${s}`;
}
function start() {
  if (timer != null) {
    clearInterval(timer);
  }

  timer = setInterval(stopWatch, 1000);
}

function stopW() {
  clearInterval(timer);
}
function restartW() {
  clearInterval(timer);
  [seconds, minutes, hours] = [0, 0, 0];
  display.innerHTML = "00:00:00";
}
