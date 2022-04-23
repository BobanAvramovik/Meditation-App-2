// Select play and pause
const play = document.querySelector(".play");
const pause = document.querySelector(".pause");

// Select audio element
const audio = document.querySelector(".audio audio");

// PLay audio
play.addEventListener("click", () => {
  audio.play();
  update();
});

// Pause audio
pause.addEventListener("click", () => {
  audio.pause();
});

// Select seasons and Video
const seasons = document.querySelectorAll(".season");
const video = document.querySelector(".video video");
// Change video
seasons.forEach((season) => {
  season.addEventListener("click", () => {
    video.src = season.getAttribute("video-src");
  });
});

// Select duration buttons
const durations = document.querySelectorAll(".duration");

// default audio duration
let audioDuration = 120; //2min

// Change audio duraiton
durations.forEach((duration) => {
  duration.addEventListener("click", () => {
    audioDuration = duration.getAttribute("audio-duration");
    update();
  });
});

// Select rect and remaining time element
const path = document.querySelector(".rect2");
const remainingTimeEl = document.querySelector(".audio-remaining-time");

// Total length of the path (perimetar of the rectangle)
const pathLength = path.getTotalLength();
// Set the legth of a dash to pathLength
path.style.strokeDasharray = pathLength;

function update() {
  // Stop audio
  if (audio.currentTime >= audioDuration) {
    audio.pause(); //pause audio
    audio.currentTime = 0; // stop audio
  }
  // Portion played from the audio
  let portionPlayed = audio.currentTime / audioDuration;

  // Stroke dashoffset is propotional to the portionPlayed
  path.style.strokeDashoffset = -portionPlayed * pathLength;

  //   Calculate remaining time in sec
  let remainingTimeInSec = audioDuration - audio.currentTime;
  renderRemainingTime(remainingTimeInSec);

  if (!audio.paused) {
    requestAnimationFrame(update);
  }
}

update();

// Render remaining time
function renderRemainingTime(timeInSec) {
  let min = Math.floor(timeInSec / 60);
  let sec = Math.floor(timeInSec % 60);

  //   If min/sec is a single digit (ex: 9) we add zero to the beginning of the digit. (ex: 9 becomes 09)
  min = min < 10 ? `0${min}` : min;
  sec = sec < 10 ? `0${sec}` : sec;

  remainingTimeEl.innerHTML = `${min}:${sec}`;
}
