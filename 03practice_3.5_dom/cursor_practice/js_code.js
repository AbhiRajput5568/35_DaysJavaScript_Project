let con = document.querySelector(".con");
let cursr = document.querySelector(".cursr");
con.addEventListener("mousemove", function (dets) {
  cursr.style.left = dets.x + "px";
  cursr.style.top = dets.y + "px";
});
