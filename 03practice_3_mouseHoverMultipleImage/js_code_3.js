const throttleFunction = (func, delay) => {
  // Previously called time of the function
  let prev = 0;
  return (...args) => {
    // Current called time of the function
    let now = new Date().getTime();

    // Logging the difference
    // between previously
    // called and current called timings
    console.log(now - prev, delay);

    // If difference is greater
    // than delay call
    // the function again.
    if (now - prev > delay) {
      prev = now;

      // "..." is the spread
      // operator here
      // returning the function with the
      // array of arguments
      return func(...args);
    }
  };
};
document.querySelector(".center").addEventListener(
  "mousemove",
  throttleFunction((dets) => {
    let imgdiv = document.createElement("div");
    imgdiv.classList.add("imgdiv");
    imgdiv.style.left = dets.clientX + "px";
    imgdiv.style.top = dets.clientY + "px";

    document.body.appendChild(imgdiv);
    // console.log("button is clicked");
    setTimeout(function () {
      imgdiv.remove();
    }, 2000);
  }, 500)
);
add
