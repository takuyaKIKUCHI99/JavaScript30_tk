// DOM
const navs = document.querySelectorAll(".cool > li");
const navBackground = document.querySelector(".dropdownBackground");
const nav = document.querySelector(".top");

function navDetailShow() {
  this.classList.add("trigger-enter");

  // Nav content appears(wait 1.5s)
  setTimeout(() => {
    if (this.classList.contains("trigger-enter"))
      this.classList.add("trigger-enter-active");
  }, 150);

  // Nav background appears
  navBackground.classList.add("open");

  const dropdown = this.querySelector(".dropdown");
  const dropdownPosition = dropdown.getBoundingClientRect();

  // To know the position of top and left
  const navPosition = nav.getBoundingClientRect();

  const dropdownCoordinate = {
    height: dropdownPosition.height,
    width: dropdownPosition.width,
    top: dropdownPosition.top - navPosition.top,
    left: dropdownPosition.left - navPosition.left,
  };

  navBackground.style.setProperty("width", `${dropdownCoordinate.width}px`);
  navBackground.style.setProperty("height", `${dropdownCoordinate.height}px`);
  navBackground.style.setProperty(
    "transform",
    `translate(${dropdownCoordinate.left}px, ${dropdownCoordinate.top}px`
  );
  navBackground.style.setProperty("width", `${dropdownCoordinate.width}`);
}

function navDetailHide() {
  this.classList.remove("trigger-enter", "trigger-enter-active");
  navBackground.classList.remove("open");
}

// Mouse event
navs.forEach((nav) => nav.addEventListener("mouseenter", navDetailShow));
navs.forEach((nav) => nav.addEventListener("mouseleave", navDetailHide));
