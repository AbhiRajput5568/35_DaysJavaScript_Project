let countDownDate = new Date("Oct 16, 2024 00:00:00").getTime();
console.log(countDownDate);
let x = setInterval(() => {
  let now = new Date().getTime();
  let distance = countDownDate - now;
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);
  console.log(countDownDate, now, distance, days, hours, minutes, seconds);
  document.querySelector(".days").innerHTML = days;
  document.querySelector(".hours").innerHTML = hours;
  document.querySelector(".minutes").innerHTML = minutes;
  document.querySelector(".seconds").innerHTML = seconds;
}, 1000);
function launch() {
  document.querySelector(".launch").style.display = "inline-block";
  setTimeout(() => {
    document.querySelector(".launch").style.display = "none";
  }, 12000);
}
