const canvas = document.getElementById("draw");
const ctx = canvas.getContext("2d");

// Canvas fullscreen
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Drawing style initial setting
ctx.strokeStyle = "#BADA55";
ctx.lineJoin = "round";
ctx.lineCap = "round";
ctx.lineWidth = 1;

// Drawing function setting
let drawing = false; // Listing mousedown
let lastX = 0; // Position
let lastY = 0; // Position
let hue = 0; // Color
let direction = true; // Flag for lineWidth tansform

function draw(e) {
  // Escaping mouseup case
  if (!drawing) return;
  // Drawing
  ctx.beginPath();
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  ctx.moveTo(lastX, lastY);
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
  [lastX, lastY] = [e.offsetX, e.offsetY];

  // Changing color
  hue++;
  if (hue >= 360) hue = 0;

  // Changing lineWidth
  if (ctx.lineWidth >= 50 || ctx.lineWidth <= 1) direction = !direction;
  direction ? ctx.lineWidth++ : ctx.lineWidth--;
}

// Mosedown: drawing start, update from position
canvas.addEventListener("mousedown", e => {
  drawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
});

// Mousemove: drowing
canvas.addEventListener("mousemove", draw);

// Mouseup, Mouseout: stop drawing
canvas.addEventListener("mouseup", () => (drawing = false));
canvas.addEventListener("mouseout", () => (drawing = false));
