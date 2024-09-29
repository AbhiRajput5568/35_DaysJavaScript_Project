let create = document.querySelector(".createnotes");
let notesCont = document.querySelector(".input-cont");
let input = document.querySelectorAll(".input");
let del = document.querySelectorAll(".input i");
create.addEventListener("click", function () {
  let inputBox = document.createElement("div");
  let inputArea = document.createElement("p");
  let delIcon = document.createElement("i");
  inputBox.className = "input-box";
  inputArea.className = "input";
  delIcon.className = "ri-delete-bin-6-line";
  inputArea.setAttribute("contenteditable", "true");
  notesCont.appendChild(inputBox).appendChild(inputArea);
  notesCont.appendChild(inputBox).appendChild(delIcon);
});
notesCont.addEventListener("click", function (e) {
  if (e.target.tagName === "I") {
    e.target.parentElement.remove();
    updateStorage();
  } else if (e.target.tagName === "P") {
    notes = document.querySelectorAll(".input");
    notes.forEach((el) => {
      el.onkeyup = function () {
        updateStorage();
      };
    });
  }
});

function updateStorage() {
  localStorage.setItem("notes", notesCont.innerHTML);
}

function showNotes() {
  notesCont.innerHTML = localStorage.getItem("notes");
}
showNotes();
document.addEventListener("keydown", (ev) => {
  if (ev.key === "Enter") {
    document.execCommand("insertLineBreak");
    ev.preventDefault();
  }
});
