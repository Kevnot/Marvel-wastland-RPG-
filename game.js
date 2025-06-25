
const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

let player = { x: 40, y: 40, size: 40 };
let enemy = { x: 200, y: 120, size: 40, hp: 3, hitFlash: 0 };

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw enemy
  if (enemy.hp > 0) {
    ctx.fillStyle = enemy.hitFlash > 0 ? "red" : "green";
    ctx.fillRect(enemy.x, enemy.y, enemy.size, enemy.size);
    if (enemy.hitFlash > 0) enemy.hitFlash--;
  }

  // Draw player
  ctx.fillStyle = "orange";
  ctx.fillRect(player.x, player.y, player.size, player.size);
}

function move(dir) {
  const step = 40;
  if (dir === "up") player.y -= step;
  if (dir === "down") player.y += step;
  if (dir === "left") player.x -= step;
  if (dir === "right") player.x += step;
  draw();
}

function attack() {
  if (
    Math.abs(player.x - enemy.x) < player.size &&
    Math.abs(player.y - enemy.y) < player.size &&
    enemy.hp > 0
  ) {
    enemy.hp--;
    enemy.hitFlash = 3;
    const audio = new Audio("hit.mp3");
    audio.play();
  }
  draw();
}

window.addEventListener("keydown", e => {
  if (e.key === "ArrowUp") move("up");
  if (e.key === "ArrowDown") move("down");
  if (e.key === "ArrowLeft") move("left");
  if (e.key === "ArrowRight") move("right");
  if (e.key === " ") attack();
});

draw();
