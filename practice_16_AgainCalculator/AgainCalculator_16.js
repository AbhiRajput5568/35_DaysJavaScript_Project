let calculator = document.querySelector(".calculator");
let input = document.querySelector(".calculator input");
calculator.addEventListener("click", function (e) {
  if (e.target.innerHTML == "=") {
    try {
      let result = eval(input.value);
      input.value = result;
    } catch (error) {
      console.log("unexpected error", error);
      input.value = error;
    }
  } else if (e.target.innerHTML === "AC") {
    input.value = "";
  } else if (e.target.innerHTML === "%") {
    input.value = eval(input.value) / 100;
  } else if (e.target.innerHTML === "M-") {
    let lenOfInput = input.value.substring(0, input.value.length - 1);
    input.value = lenOfInput;
  } else {
    input.value += e.target.innerHTML;
  }
});
