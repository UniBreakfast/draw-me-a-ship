const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight - 4;

canvas.onclick = (e) => {
  coords.push({ x: e.layerX, y: e.layerY });
};

document.body.onkeydown = (e) => {
  if (e.key == "Enter") {
    drawContour(...coords);
    coords.length = 0;
  }
};

const coords = [];

function drawContour(...coords) {
  ctx.beginPath();
  for (let i = 0; i < coords.length; i++) {
    ctx.lineTo(coords[i].x, coords[i].y);
  }
  ctx.stroke();
  ctx.closePath();
}
