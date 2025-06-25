
let selectedCharacter = null;

function selectCharacter(name) {
  selectedCharacter = name;
  alert("Du hast " + name + " gewählt!");
  document.getElementById('menu').style.display = 'none';
  document.getElementById('gameCanvas').style.display = 'block';
  startGame();
}

function startGame() {
  const canvas = document.getElementById("gameCanvas");
  const ctx = canvas.getContext("2d");
  let x = 100, y = 100;

  function draw() {
    ctx.fillStyle = "#1a1a1a";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "orange";
    ctx.fillRect(x, y, 40, 40);
    ctx.fillStyle = "white";
    ctx.fillText("Held: " + selectedCharacter, 10, 20);
    requestAnimationFrame(draw);
  }

  window.addEventListener("keydown", function(e) {
    if (e.key === "ArrowRight") x += 5;
    if (e.key === "ArrowLeft") x -= 5;
    if (e.key === "ArrowUp") y -= 5;
    if (e.key === "ArrowDown") y += 5;
  });

  draw();
}
