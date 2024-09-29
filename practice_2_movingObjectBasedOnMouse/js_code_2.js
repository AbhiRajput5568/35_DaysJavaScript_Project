window.addEventListener("mousemove", function (details, deatil) {
  let rectangle = document.querySelector(".rect");
  let valX = gsap.utils.mapRange(
    0,
    window.innerWidth,
    100 + rectangle.getBoundingClientRect().width / 2,
    innerWidth - (100 + rectangle.getBoundingClientRect().width / 2),
    details.clientX
  );
  gsap.to(".rect", {
    left: valX + "px",
    // ease: Power3,
  });
});
