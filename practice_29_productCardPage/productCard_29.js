let control = document.querySelector(".controls");
let btn = document.querySelectorAll(".btn");
let img = document.querySelector(".gallery img");
let images = [
  "https://plus.unsplash.com/premium_photo-1707932495000-5748b915e4f2?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1617690032703-f991ed0e0ee6?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1020&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

let currentIndex = 0;
let intervalId;

function changeImage(index) {
  img.src = images[index];
  btn.forEach((bt) => bt.classList.remove("active"));
  btn[index].classList.add("active");
}

function startAutoChange() {
  intervalId = setInterval(() => {
    currentIndex = (currentIndex + 1) % images.length;
    changeImage(currentIndex);
  }, 3500);
}

btn.forEach((button, index) => {
  button.onclick = function () {
    clearInterval(intervalId);
    changeImage(index);
    currentIndex = index;
    startAutoChange();
  };
});

startAutoChange(); // Start automatic image change on page load

// btn[0].onclick = function () {
//   img.src =
//     "https://plus.unsplash.com/premium_photo-1707932495000-5748b915e4f2?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
//   for (bt of btn) {
//     bt.classList.remove("active");
//   }
//   this.classList.add("active");
// };
// btn[1].onclick = function () {
//   img.src =
//     "https://images.unsplash.com/photo-1617690032703-f991ed0e0ee6?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
//   for (bt of btn) {
//     bt.classList.remove("active");
//   }
//   this.classList.add("active");
// };
// btn[2].onclick = function () {
//   img.src =
//     "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1020&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
//   for (bt of btn) {
//     bt.classList.remove("active");
//   }
//   this.classList.add("active");
// };
