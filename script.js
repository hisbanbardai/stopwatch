const timerEle = document.getElementById("timer");
const startEle = document.getElementById("start");
const stopEle = document.getElementById("stop");
const resetEle = document.getElementById("reset");
let startTime = 0;
let elapsedTime = 0;

function startTimer() {
  startTime = Date.now() - elapsedTime;
  setInterval(() => {
    elapsedTime = Date.now() - startTime;
    timerEle.textContent = elapsedTime;
  }, 10)
 }

function stopTimer() { }

function resetTimer() {}

startEle.addEventListener("click", startTimer);

stopEle.addEventListener("click", stopTimer);

resetEle.addEventListener("click", resetTimer);
