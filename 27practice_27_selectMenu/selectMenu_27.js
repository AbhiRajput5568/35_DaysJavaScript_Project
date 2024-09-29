let dropDown = document.querySelector("#dropDown");
let selectField = document.querySelector(".selectField");
let textArea = document.querySelector(".textArea");
let list = document.querySelector(".list");
let options = document.querySelectorAll(".options");

let Ex = true;

selectField.onclick = () => {
  // list.classList.toggle("hide")
  if (Ex == true) {
    list.style.display = "block";
    dropDown.classList.remove("ri-arrow-down-s-line");
    dropDown.classList.add("ri-arrow-up-s-line");
    Ex = false;
  } else {
    list.style.display = "none";
    dropDown.classList.add("ri-arrow-down-s-line");
    dropDown.classList.remove("ri-arrow-up-s-line");
    Ex = true;
  }
};

for (option of options) {
  option.onclick = function () {
    // console.log("hello", e.target);
    textArea.innerHTML = this.innerHTML;
    list.style.display = "none";
    dropDown.classList.add("ri-arrow-down-s-line");
    dropDown.classList.remove("ri-arrow-up-s-line");
  };
}
