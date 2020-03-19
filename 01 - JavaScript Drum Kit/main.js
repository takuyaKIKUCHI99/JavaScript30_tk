// Listening keydown of all keys
window.addEventListener("keydown", e => {
  playAudio(e);
  generateEffect(e);
});

// Listening keys in html for transitionend
document.querySelectorAll(".key").forEach(key => {
  key.addEventListener("transitionend", e => {
    removeEffect(e);
  });
});

// Playing audio when event occurs
const playAudio = e => {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  if (!audio) return;
  audio.currentTime = 0; //to get audio instantly
  audio.play();
};

// Adding style when event occurs
const generateEffect = e => {
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
  key.classList.add("playing");
};

// Removing style after event occured
const removeEffect = e => {
  if (e.propertyName !== "transform") return;
  e.target.classList.remove("playing");
};
