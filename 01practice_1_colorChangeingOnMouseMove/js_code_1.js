let rect = document.querySelector(".rect");
rect.addEventListener("mousemove", function (details) {
  var rectlocation = rect.getBoundingClientRect();
  var insiderectvalue = details.clientX - rectlocation.left;

  if (insiderectvalue < rectlocation.width / 2) {
    var red = gsap.utils.mapRange(
      0,
      rectlocation.width / 2,
      255,
      0,
      insiderectvalue
    );
    gsap.to(rect, {
      backgroundColor: `rgb(${red},0,0)`,
    });
  } else {
    var blue = gsap.utils.mapRange(
      rectlocation.width / 2,
      rectlocation.width,
      0,
      255,
      insiderectvalue
    );
    gsap.to(rect, {
      backgroundColor: `rgb(0,0,${blue})`,
    });
  }
});

rect.addEventListener("mouseleave", () => {
  gsap.to(rect, {
    backgroundColor: "white",
  });
});
