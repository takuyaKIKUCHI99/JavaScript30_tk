const keys = document.querySelectorAll(".key");

window.addEventListener("keydown", e => {
  playAudio(e);
  generateEffect(e);
});

const playAudio = e => {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  audio.currentTime = 0; //to get audio instantly
  audio.play();
};

const generateEffect = e => {
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
  key.classList.add("playing");
};
