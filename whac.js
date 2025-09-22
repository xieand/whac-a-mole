let score = 0;
let time;
let cycle = 0;
const buttonList = [
  "button1", "button2", "button3",
  "button4", "button5", "button6",
  "button7", "button8", "button9"
];
const screens = {
  home: document.getElementById("screenHome"),
  main: document.getElementById("screenMain"),
  finish: document.getElementById("screenFinish")
};
const startBtn = document.getElementById("startButton");
const mole = document.getElementById("mole");
const scoreText = document.getElementById("scoreText");
const finalScore = document.getElementById("finalScore");
const returnBtn = document.getElementById("returnHome");
const timeDropdown = document.getElementById("timeDropdown");
const intervalDropdown = document.getElementById("intervalDropdown");

// helper: switch screens
function setScreen(screen) {
  Object.values(screens).forEach(s => s.classList.remove("active"));
  screen.classList.add("active");
}

// random mole position
function updatePosition() {
  const holes = buttonList.map(id => document.getElementById(id));
  holes.forEach(h => h.innerHTML = "");
  const idx = Math.floor(Math.random() * holes.length);
  holes[idx].appendChild(mole);
  mole.style.display = "block";
}

// update colors based on score & total cycles
function updateColors(list, number) {
  for (let i = 0; i < list.length; i++) {
    const el = document.getElementById(list[i]);
    if (score === number) {
      el.style.backgroundColor = "purple";
    } else if (score > (2/3) * number) {
      el.style.backgroundColor = "orange";
    } else if (score > (1/3) * number) {
      el.style.backgroundColor = "rgb(164, 108, 21)";
    } else {
      el.style.backgroundColor = "red";
    }
  }
}

// start game
startBtn.addEventListener("click", () => {
  setScreen(screens.main);
  score = 0;
  cycle = 0;
  scoreText.textContent = "Score: 0";
  const totalCycles = Number(timeDropdown.value);
  const interval = Number(intervalDropdown.value);
  time = setInterval(() => {
    cycle++;
    updatePosition();
    updateColors(buttonList, totalCycles);
    if (cycle === totalCycles) {
      clearInterval(time);
      setScreen(screens.finish);
      finalScore.textContent = "Your final score is " + score;
      cycle = 0;
      score = 0;
    }
  }, interval);
});

// mole click
mole.addEventListener("click", () => {
  score++;
  scoreText.textContent = "Score: " + score;
  mole.style.display = "none";
  new Audio("https://studio.code.org/v3/assets/sound://category_explosion/vibrant_deep_wet_explosion.mp3").play();
});

// Also allow clicking the hole that currently contains the mole
// This is useful on some browsers if clicking the emoji fails to register
// or for larger click targets.
document.getElementById("gameBoard").addEventListener("click", (e) => {
  const hole = e.target.closest('.hole');
  if (!hole) return;
  if (hole.contains(mole) && mole.style.display !== "none") {
    score++;
    scoreText.textContent = "Score: " + score;
    mole.style.display = "none";
    new Audio("https://studio.code.org/v3/assets/sound://category_explosion/vibrant_deep_wet_explosion.mp3").play();
  }
});

// return home
returnBtn.addEventListener("click", () => {
  setScreen(screens.home);
});
