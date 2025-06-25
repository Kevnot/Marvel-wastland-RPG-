
const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");
let x = 50, y = 50;
const size = 40;
const map = [
  "##########",
  "#        #",
  "#  ##    #",
  "#     ## #",
  "#   ##   #",
  "#        #",
  "##########"
];

function drawMap() {
  for (let row = 0; row < map.length; row++) {
    for (let col = 0; col < map[row].length; col++) {
      const tile = map[row][col];
      ctx.fillStyle = tile === "#" ? "#555" : "#222";
      ctx.fillRect(col * size, row * size, size, size);
    }
  }
}

function drawPlayer() {
  ctx.fillStyle = "orange";
  ctx.fillRect(x, y, size, size);
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawMap();
  drawPlayer();
}

function isWalkable(nx, ny) {
  const col = Math.floor(nx / size);
  const row = Math.floor(ny / size);
  return map[row] && map[row][col] && map[row][col] === " ";
}

window.addEventListener("keydown", e => {
  let nx = x, ny = y;
  if (e.key === "ArrowUp") ny -= size;
  if (e.key === "ArrowDown") ny += size;
  if (e.key === "ArrowLeft") nx -= size;
  if (e.key === "ArrowRight") nx += size;
  if (isWalkable(nx, ny)) {
    x = nx;
    y = ny;
  }
  draw();
});

draw();
