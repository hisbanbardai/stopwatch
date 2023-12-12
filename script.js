const timerEle = document.getElementById("timer");
const startEle = document.getElementById("start");
const stopEle = document.getElementById("stop");
const resetEle = document.getElementById("reset");
let startTime = 0;
let elapsedTime = 0;

function formatTime(elapsedTime) {
  const milliseconds = Math.floor((elapsedTime % 1000) / 10);
  const seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);
  const minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
  const hours = Math.floor(elapsedTime / (1000 * 60 * 60));
  return (
    (hours ? (hours > 9 ? hours : "0" + hours) : "00") +
    ":" +
    (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") +
    ":" +
    (seconds ? (seconds > 9 ? seconds : "0" + seconds) : "00") +
    "." +
    (milliseconds > 9 ? milliseconds : "0" + milliseconds)
  );
}

function startTimer() {
  startTime = Date.now() - elapsedTime;
  setInterval(() => {
    elapsedTime = Date.now() - startTime;
    timerEle.textContent = elapsedTime;
  }, 10)
 }

function stopTimer() {
  clearInterval(timerInterval);
  startButtonEl.disabled = false;
  stopButtonEl.disabled = true;
}

function resetTimer() {}

startEle.addEventListener("click", startTimer);

stopEle.addEventListener("click", stopTimer);

resetEle.addEventListener("click", resetTimer);
