let input = document.querySelector(".input input");
let liContainer = document.querySelector(".list");
let btn = document.querySelector(".addbtn");
btn.addEventListener("click", function () {
  if (input.value === "") {
    alert("You must write something");
  } else {
    let list = document.createElement("li");
    list.innerHTML = input.value;
    liContainer.appendChild(list);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    list.appendChild(span);
  }
  input.value = "";
  savedata();
});
liContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("cheked");
      savedata();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      savedata();
    }
  },
  false
);

function savedata() {
  localStorage.setItem("data", liContainer.innerHTML);
}

function showList() {
  liContainer.innerHTML = localStorage.getItem("data");
}
showList();
