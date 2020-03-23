function openEffect() {
  this.classList.toggle("open");
}

function translateEffect(event) {
  if (event.propertyName.includes("flex")) {
    this.classList.toggle("open-active");
  }
}

document.querySelectorAll(".panel").forEach(panel => {
  panel.addEventListener("click", openEffect);
  panel.addEventListener("transitionend", translateEffect);
});
