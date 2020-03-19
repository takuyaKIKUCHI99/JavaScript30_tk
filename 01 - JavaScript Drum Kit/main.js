// Listen 'keydown' and play music
const keys = document.querySelectorAll(".key");

window.addEventListener("keydown", e => {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  audio.play();
});

// Listen 'transition' and add css "playing"
