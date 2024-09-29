let div = document.querySelector(".div");
// localStorage.setItem("name", "");
// // h1.innerText = localStorage.getItem("name");
// console.log(h1);
document.querySelector("button").addEventListener("click", () => {
  let h2 = document.createElement("h1");
  h2.innerHTML = `<body>
    To do list
    <div class="div"></div>
    <button>Add Data</button>
  </body>`;
  div.appendChild(h2);
  storedata();
});

function storedata() {
  localStorage.setItem("h1", div.innerHTML);
}
function updateData() {
  div.innerHTML = localStorage.getItem("h1");
}
updateData();
