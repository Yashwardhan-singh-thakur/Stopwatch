const hour = document.querySelector("#hour");
const min = document.querySelector("#min");
const sec = document.querySelector("#sec");
const startStopBtn = document.querySelector("#start-stop-btn");
const resetBtn = document.querySelector("#reset-btn");

let h = 0;
let m = 0;
let s = 0;

let secIntervalId;

// Using Space bar and r key to start & stop and reset stopwatch
addEventListener("keypress", (evt) => {
  if (evt.key === " ") {
    startStop();
  }
  if (evt.key === "r") {
    resetClock();
  }
});

// Start and stop btn
startStopBtn.addEventListener("click", startStop);

// reset btn
resetBtn.addEventListener("click", resetClock);

// stopwatch hour,min, and sec update code
function stopwatch() {
  secIntervalId = setInterval(() => {
    s++;
    if (s === 60) {
      s = 50;
      m++;
    }
    if (m === 60) {
      m = 0;
      h++;
    }
    watchStyling();
  }, 100);
}

// add an extra zero when digit is single
function watchStyling() {
  if (s <= 9) {
    sec.innerText = `0${s}`;
  } else {
    sec.innerText = s;
  }
  if (m <= 9) {
    min.innerText = `0${m}`;
  } else {
    min.innerText = m;
  }
  if (h <= 9) {
    hour.innerText = `0${h}`;
  } else {
    hour.innerText = h;
  }
}

// Stopwatch stop
function startStop() {
  if (startStopBtn.innerText === "Start") {
    stopwatch();
    startStopBtn.innerText = "Stop";
    startStopBtn.style.backgroundColor = "red";
  } else {
    clearInterval(secIntervalId);
    startStopBtn.innerText = "Start";
    startStopBtn.style.backgroundColor = "greenyellow";
  }
}

// Reset stopwatch
function resetClock() {
  clearInterval(secIntervalId);
  h = 0;
  m = 0;
  s = 0;
  hour.innerText = "00";
  min.innerText = "00";
  sec.innerText = "00";
  startStopBtn.innerText = "Start";
  startStopBtn.style.backgroundColor = "greenyellow";
}
