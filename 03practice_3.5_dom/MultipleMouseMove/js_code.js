let el = document.querySelectorAll(".elem");
let elImg = document.querySelector(".elem img");
// el.addEventListener("mousemove", function (dets) {
//   elImg.style.left = dets.x + "px";
//   elImg.style.top = dets.y + "px";
// });
// el.addEventListener("mouseenter", function (dets) {
//   elImg.style.opacity = 1;
// });
el.forEach(function (val) {
  val.addEventListener("mouseenter", function () {
    val.childNodes[3].style.opacity = 1;
  });
  val.addEventListener("mouseleave", function () {
    val.childNodes[3].style.opacity = 0;
  });
  val.addEventListener("mousemove", function (dets) {
    val.childNodes[3].style.left = dets.x + "px";
    val.childNodes[3].style.top = dets.y + "px";
  });
});
