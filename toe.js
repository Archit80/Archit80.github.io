let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let msgContainer = document.querySelector(".messageContainer");
let turnO = true;
let msg = document.querySelector("#msg");
let container = document.querySelector(".container");

const winCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

let audioX = document.querySelector("#audioX");
let audioO = document.querySelector("#audioO");
let audioWin = document.querySelector("#audioWin");
 

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("Box was clicked");
    if (turnO) {
      box.innerText = "X";
      audioX.play();
      turnO = false;
    } else {
      box.innerText = "O";
      audioO.play();
      turnO = true;
    }
    box.disabled = true;
    checkWinner();
  });
});

reset.addEventListener("click", () => {
  location.reload();
});

const showWinner = (winner) => {
  msg.innerText = `Congrats, ${winner} won !`;
  audioWin.play();
  msgContainer.classList.remove("hide");
  const count = 500,
  defaults = {
    origin: { y: 0.7 },
  };

function fire(particleRatio, opts) {
  confetti(
    Object.assign({}, defaults, opts, {
      particleCount: Math.floor(count * particleRatio),
    })
  );
}

fire(0.25, {
  spread: 26,
  startVelocity: 55,
});

fire(0.2, {
  spread: 60,
});

fire(0.35, {
  spread: 100,
  decay: 0.91,
  scalar: 0.8,
});

fire(0.1, {
  spread: 120,
  startVelocity: 25,
  decay: 0.92,
  scalar: 1.2,
});

fire(0.1, {
  spread: 120,
  startVelocity: 45,
});
  disableBtns();
};

const disableBtns = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};
const checkWinner = () => {
  for (let pattern of winCombos) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        showWinner(pos1Val);
      }
    }
  }
};



