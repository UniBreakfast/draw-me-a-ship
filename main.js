const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight - 4;

canvas.onclick = (e) => {
  coords.push(e.layerX, e.layerY);
};

document.body.onkeydown = (e) => {
  if (e.key == "Enter") {
    drawShip(...coords);
    coords.length = 0;
  }
};

const coords = [];

function drawShip(...coords) {
  ctx.beginPath();
  for (let i = 0; i < coords.length; i += 2) {
    ctx.lineTo(coords[i], coords[i + 1]);
  }
  ctx.stroke();
  ctx.closePath();
}
