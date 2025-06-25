
const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

let player = { x: 40, y: 40, size: 40 };
let npc = { x: 240, y: 120, size: 40 };
let inDialog = false;

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // NPC
  ctx.fillStyle = "blue";
  ctx.fillRect(npc.x, npc.y, npc.size, npc.size);

  // Player
  ctx.fillStyle = "orange";
  ctx.fillRect(player.x, player.y, player.size, player.size);
}

function move(dir) {
  if (inDialog) return;
  const step = 40;
  if (dir === "up") player.y -= step;
  if (dir === "down") player.y += step;
  if (dir === "left") player.x -= step;
  if (dir === "right") player.x += step;
  checkForNPC();
  draw();
}

function checkForNPC() {
  if (
    Math.abs(player.x - npc.x) < player.size &&
    Math.abs(player.y - npc.y) < player.size
  ) {
    showDialog();
  }
}

function showDialog() {
  inDialog = true;
  document.getElementById("dialogBox").style.display = "block";
  document.getElementById("dialogText").innerText = "Wache: Was ist euer Ziel?";
  const choices = document.getElementById("choices");
  choices.innerHTML = "";

  ["Wir suchen Hoffnung", "Wir bringen Vorräte", "Das geht dich nichts an"].forEach(text => {
    const btn = document.createElement("button");
    btn.innerText = text;
    btn.onclick = () => {
      document.getElementById("dialogText").innerText = "Wache: ... sehr wohl.";
      choices.innerHTML = "";
      setTimeout(() => {
        document.getElementById("dialogBox").style.display = "none";
        inDialog = false;
        draw();
      }, 2000);
    };
    choices.appendChild(btn);
  });
}

function attack() {
  alert("Kein Gegner in Reichweite.");
}

window.addEventListener("keydown", e => {
  if (e.key === "ArrowUp") move("up");
  if (e.key === "ArrowDown") move("down");
  if (e.key === "ArrowLeft") move("left");
  if (e.key === "ArrowRight") move("right");
  if (e.key === " ") attack();
});

draw();
