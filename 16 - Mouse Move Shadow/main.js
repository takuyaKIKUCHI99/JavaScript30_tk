const screen = document.querySelector(".hero");
const text = document.querySelector("h1");
const walk = 100;

const shadowMove = e => {
  const { offsetWidth: width, offsetHeight: height } = screen;
  let { offsetX: x, offsetY: y } = e;
  if (e.target !== screen) {
    x = x + e.target.offsetLeft;
    y = y + e.target.offsetTop;
  }

  xWalk = Math.round((x / width) * walk) - walk / 2;
  yWalk = Math.round((y / height) * walk) - walk / 2;
  text.style.textShadow = `${xWalk}px ${yWalk}px 4px rgba(0, 0, 0, 0.7)`;
};

screen.addEventListener("mousemove", shadowMove);
