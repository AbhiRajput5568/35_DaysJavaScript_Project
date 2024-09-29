let set = document.querySelectorAll(".img1");
console.log(set);
function playAudio(key) {
  let audio;
  switch (key) {
    case "W":
      audio = new Audio("music/crash.mp3");
      break;
    case "A":
      audio = new Audio("music/kick-bass.mp3");
      break;
    case "S":
      audio = new Audio("music/snare.mp3");
      break;
    case "D":
      audio = new Audio("music/tom-1.mp3");
      break;
    case "J":
      audio = new Audio("music/tom-2.mp3");
      break;
    case "K":
      audio = new Audio("music/tom-3.mp3");
      break;
    default:
      audio = new Audio("music/tom-4.mp3");
      break;
  }
  audio.play();
}
set.forEach((btn) => {
  console.log(btn.innerText);
  btn.addEventListener("click", () => {
    playAudio(btn.innerText);
  });
});

document.addEventListener("keydown", (e) => {
  playAudio(e.key.toUpperCase());
});
