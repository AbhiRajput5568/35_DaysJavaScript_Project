let btn = document.querySelector(".Play");
let text = document.querySelector(".main h1");
let leftImg = document.querySelector("#leftImg");
let rightImg = document.querySelector("#rightImg");
btn.addEventListener("click", function () {
  let player1 = Math.floor(1 + Math.random() * 6);
  let player2 = Math.floor(1 + Math.random() * 6);
  // console.log(leftImg, rightImg);
  console.log(player1, player2);
  if (player1 > player2) {
    text.innerHTML = "Player 1 winner 🚩";
    leftImg.src = `img/img${player1}.png`;
    rightImg.src = `img/img${player2}.png`;
  } else if (player1 == player2) {
    text.innerHTML = "Match Draw 📍";
    rightImg.src = `img/img${player2}.png`;
    leftImg.src = `img/img${player1}.png`;
  } else {
    text.innerHTML = "Player 2 winner 🚩";
    rightImg.src = `img/img${player2}.png`;
    leftImg.src = `img/img${player1}.png`;
  }
  setTimeout(() => {
    text.innerHTML = "Dice Game 🎲";
    rightImg.src = `img/img6.png`;
    leftImg.src = `img/img6.png`;
  }, 3000);
});
document.querySelector(".Reset").addEventListener("click", () => {
  text.innerHTML = "Dice Game 🎲";
  rightImg.src = `img/img6.png`;
  leftImg.src = `img/img6.png`;
});
