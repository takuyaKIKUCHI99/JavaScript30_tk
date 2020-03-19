const keys = document.querySelectorAll(".key");

window.addEventListener("keydown", e => {
  playAudio(e);
  generateEffect(e);
});

// Removing style after event occured
keys.forEach(key => {
  key.addEventListener("transitionend", e => {
    key.classList.remove("playing");
  });
});

// Playing audio when event occurs
const playAudio = e => {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  audio.currentTime = 0; //to get audio instantly
  audio.play();
};

// Adding style when event occurs
const generateEffect = e => {
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
  key.classList.add("playing");
};
