
const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");
let x = 40, y = 40;
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
      ctx.fillStyle = map[row][col] === "#" ? "#444" : "#222";
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

function move(direction) {
  let nx = x, ny = y;
  if (direction === "up") ny -= size;
  if (direction === "down") ny += size;
  if (direction === "left") nx -= size;
  if (direction === "right") nx += size;
  if (isWalkable(nx, ny)) {
    x = nx;
    y = ny;
  }
  draw();
}

function attack() {
  alert("Angriff ausgeführt!");
}

window.addEventListener("keydown", e => {
  if (e.key === "ArrowUp") move("up");
  if (e.key === "ArrowDown") move("down");
  if (e.key === "ArrowLeft") move("left");
  if (e.key === "ArrowRight") move("right");
  if (e.key === " ") attack();
});

draw();
