let dis = document.querySelector("input");
let el = document.querySelectorAll(".el");
let elArrays = Array.from(el);
let String = "";
elArrays.forEach((el) => {
  el.addEventListener("click", function (ev) {
    if (ev.target.innerHTML == "M-") {
      String = String.substring(0, String.length - 1);
      dis.value = String;
    } else if (ev.target.innerHTML == "AC") {
      String = "";
      dis.value = String;
    } else if (ev.target.innerHTML == "=") {
      String = eval(String);
      dis.value = String;
    } else if (ev.target.innerHTML == "%") {
      String = eval(String);
      String = Number(String) / 100;
      dis.value = String;
    } else {
      String += ev.target.innerHTML;
      dis.value = String;
    }
  });
});
