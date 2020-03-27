// DOM
const player = document.querySelector(".player");
const video = document.querySelector("video");
const playButton = document.querySelector(".player__button");
const progress = document.querySelector(".progress");
const progressFilled = document.querySelector(".progress__filled");

// Playing or stopping video
function playControl(e) {
  if (video.paused === true) {
    video.play();
    playButton.textContent = "❚ ❚";
  } else {
    video.pause();
    playButton.textContent = "►";
  }
}

function updateProgress() {
  const percentage = (video.currentTime / video.duration) * 100;
  progressFilled.style.flexBasis = `${percentage}%`;
}

function skipProgress(e) {
  const skippingTo = video.duration * (e.offsetX / this.offsetWidth);
  video.currentTime = skippingTo;
}

// Eventlistner
video.addEventListener("click", playControl);
playButton.addEventListener("click", playControl);

video.addEventListener("timeupdate", updateProgress);
progress.addEventListener("click", skipProgress);
