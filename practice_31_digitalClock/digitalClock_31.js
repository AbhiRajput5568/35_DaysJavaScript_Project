setInterval(() => {
  const date = new Date();
  const hour = date.getHours().toString().padStart(2, "0");
  const minute = date.getMinutes().toString().padStart(2, "0");
  const second = date.getSeconds().toString().padStart(2, "0");

  // console.log(`${hour}:${minute}:${second}`);

  document.querySelector(".h").innerHTML = hour;
  document.querySelector(".m").innerHTML = minute;
  document.querySelector(".s").innerHTML = second;
}, 1000);

// setInterval(() => {
//   let date = new Date();
//   let hr = date.getHours();
//   let min = date.getMinutes();
//   let sec = date.getSeconds();
//   let hour = hr < 10 ? "0" + hr : hr;
//   let minute = min < 10 ? "0" + min : min;
//   let second = sec < 10 ? "0" + sec : sec;
//   console.log(`${hour}:${minute}:${second}`);

//   document.querySelector(".h").innerHTML = hour;
//   document.querySelector(".m").innerHTML = minute;
//   document.querySelector(".s").innerHTML = second;
// }, 1000);
