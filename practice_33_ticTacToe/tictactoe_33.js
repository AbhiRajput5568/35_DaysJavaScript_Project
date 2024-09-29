let boxes = document.querySelectorAll(".box");
let reset = document.querySelector(".reset");
let winnerText = document.querySelector(".cont h3");
let winner = document.querySelector(".winner");

let user1;
let user2;

console.log(user1);

let turnO = true;
let patterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function resetFn() {
  user1 = prompt("Enter First Player Name....", "X");
  user2 = prompt("Enter Second Player Name....", "Y");
  turnO = true;
  winnerText.style.display = "none";
  for (box of boxes) {
    box.innerText = "";
    box.disabled = false;
  }
}

function newGame() {
  turnO = true;
  winnerText.style.display = "none";
  for (box of boxes) {
    box.innerText = "";
    box.disabled = false;
  }
}
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      box.innerText = "X";
      turnO = false;
    } else {
      box.innerText = "O";
      turnO = true;
    }
    box.disabled = true;
    winnercheck();
  });
});
let winnercheck = () => {
  let isDraw = true;
  for (let patt of patterns) {
    let pos1Val = boxes[patt[0]].innerText;
    let pos2Val = boxes[patt[1]].innerText;
    let pos3Val = boxes[patt[2]].innerText;
    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if ((pos1Val === pos2Val) & (pos2Val === pos3Val)) {
        if (pos1Val === "X") {
          console.log("X");
          winnerText.style.display = "block";
          winner.innerHTML = `${user1}`;
        } else {
          console.log("Y");
          winnerText.style.display = "block";
          winner.innerHTML = `${user2}`;
        }
        for (box of boxes) {
          box.disabled = true;
        }
        isDraw = false;
        break;
      }
    }
  }
  if (isDraw && [...boxes].every((box) => box.innerText !== "")) {
    winnerText.style.display = "block";
    winner.innerHTML = "Match is a draw";
  }
};
user1 = prompt("Enter First Player Name....", "X");
user2 = prompt("Enter Second Player Name....", "Y");
