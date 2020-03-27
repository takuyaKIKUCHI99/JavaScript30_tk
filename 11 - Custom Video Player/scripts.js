// DOM
const player = document.querySelector(".player");
const video = document.querySelector("video");
const playButton = document.querySelector(".player__button");
const progressBar = document.querySelector(".progress__filled");

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
  progressBar.style.flexBasis = `${percentage}%`;
}

// Eventlistner
video.addEventListener("click", playControl);
playButton.addEventListener("click", playControl);

video.addEventListener("timeupdate", updateProgress);
