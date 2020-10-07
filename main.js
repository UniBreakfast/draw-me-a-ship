const canvas = document.getElementById("canvas");
const palette = document.getElementById("palette");
const ctx = canvas.getContext("2d");
const coords = [];
const colors = [
  "black",
  "yellow",
  "blue",
  "grey",
  "white",
  "orange",
  "pink",
  "green",
  "black",
  "yellow",
  "blue",
  "grey",
  "white",
  "orange",
  "pink",
  "green",
];

canvas.width = innerWidth;
canvas.height = innerHeight - 4;

fillPalette();

palette.onclick = (e) => {
  ctx.strokeStyle = e.target.style.backgroundColor;
};

canvas.onclick = (e) => {
  coords.push({ x: e.layerX, y: e.layerY });
};

document.body.onkeydown = (e) => {
  if (e.key == "Enter") {
    drawContour(...coords);
    coords.length = 0;
  }
};

//function declarations

function drawContour(...coords) {
  ctx.beginPath();
  for (let i = 0; i < coords.length; i++) {
    ctx.lineTo(coords[i].x, coords[i].y);
  }
  ctx.stroke();
  ctx.closePath();
}

function fillPalette() {
  const colorDivs = document.querySelectorAll("div.color");
  for (let i = 0; i < colors.length; i++) {
    colorDivs[i].style.backgroundColor = colors[i];
  }
}
