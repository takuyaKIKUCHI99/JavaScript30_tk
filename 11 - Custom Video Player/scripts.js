// DOM
const player = document.querySelector(".player");
const video = document.querySelector("video");
const playButton = document.querySelector(".toggle");
const progress = document.querySelector(".progress");
const progressFilled = document.querySelector(".progress__filled");
const sliders = document.querySelectorAll(".player__slider");
const skipButtons = document.querySelectorAll(".player__button[data-skip]");

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

function jumpProgress(e) {
  const skippingTo = video.duration * (e.offsetX / this.offsetWidth);
  video.currentTime = skippingTo;
}

function sliderEffect() {
  video[this.name] = this.value;
}

function skipProgress() {
  video.currentTime += parseInt(this.dataset.skip);
}

// Eventlistner
video.addEventListener("click", playControl);
playButton.addEventListener("click", playControl);

video.addEventListener("timeupdate", updateProgress);
progress.addEventListener("click", jumpProgress);

sliders.forEach(slider => {
  slider.addEventListener("click", sliderEffect);
});

skipButtons.forEach(skip => {
  skip.addEventListener("click", skipProgress);
});
