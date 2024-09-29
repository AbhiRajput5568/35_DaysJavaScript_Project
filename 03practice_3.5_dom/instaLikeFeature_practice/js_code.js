let con = document.querySelector(".cont");
let lov = document.querySelector("#lov");
con.addEventListener("dblclick", function () {
  console.log("hello");
  lov.style.transform = "translate(-50%, -50%) scale(1)";
  setTimeout(function () {
    lov.style.transform = "translate(-50%, -50%) scale(0)";
  }, 2000);
});
