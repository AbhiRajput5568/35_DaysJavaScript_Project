let imgGallery = document.querySelector(".imgGallery");
let leftBtn = document.querySelector(".galleryCont #left");
let rightBtn = document.querySelector("#right");
imgGallery.addEventListener("wheel", (e) => {
  e.preventDefault();
  console.log(e);
  imgGallery.scrollLeft += e.deltaY;
});
leftBtn.addEventListener("click", () => {
  imgGallery.style.scrollBehaviour = "smooth";
  imgGallery.scrollLeft += 900;
});
rightBtn.addEventListener("click", () => {
  imgGallery.style.scrollBehaviour = "smooth";
  imgGallery.scrollLeft -= 900;
});
