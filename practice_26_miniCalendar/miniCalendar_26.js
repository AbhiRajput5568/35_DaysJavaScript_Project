let date = document.querySelector(".date");
let days = document.querySelector(".day");
let month = document.querySelector(".month");
let year = document.querySelector(".year");

let today = new Date();
let daysWeeks = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
date.innerHTML = today.getDate();
days.innerHTML = daysWeeks[today.getDay()];
month.innerHTML = months[today.getMonth()];
year.innerHTML = today.getFullYear();
// console.log(date, days, month, year,today);
