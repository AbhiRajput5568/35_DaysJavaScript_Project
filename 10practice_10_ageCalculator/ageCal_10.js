let input = document.querySelector(".inputCont input");
let btn = document.querySelector(".inputCont button");
input.max = new Date().toISOString().split("T"[0]);
function calculateAge() {
  let birthDate = new Date(input.value);
  let d1 = birthDate.getDate();
  let m1 = birthDate.getMonth() + 1;
  let y1 = birthDate.getFullYear();

  let currentDate = new Date();

  let d2 = currentDate.getDate();
  let m2 = currentDate.getMonth() + 1;
  let y2 = currentDate.getFullYear();
  let d3, m3, y3;
  y3 = y2 - y1;
  if (m2 >= m1) {
    m3 = m2 - m1;
  } else {
    y3--;
    m3 = 12 + m2 - m1;
  }
  if (d2 >= d1) {
    d3 = d2 - d1;
  } else {
    m3--;
    d3 = getDaysInMonth(y1, m1) + m2 - m1;
  }
  if (m3 < 0) {
    m3 = 11;
    y3--;
  }
  if (birthDate == "Invalid Date") {
    alert("Please Enter Your Birth Date");
  } else {
    document.querySelector(
      "h5"
    ).innerHTML = `You are ${y3} years, ${m3}month and ${d3} days`;
    console.log(birthDate);
  }
}
function getDaysInMonth(year, month) {
  return new Date(year, month, 0).getDate();
}
