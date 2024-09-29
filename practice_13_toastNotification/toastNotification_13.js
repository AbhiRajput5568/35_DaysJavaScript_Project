let toastBox = document.querySelector(".toastBox");
let succesMsg = `<i class="ri-shield-check-line"></i>Successfully Submitted`;
let errorMsg = `<i class="ri-error-warning-line"></i>Please Fix the Error!`;
let invalidMsg = `<i class="ri-file-warning-line"></i>Invalid Input, Check again`;

function showBtn(msg) {
  let toast = document.createElement("div");
  toast.classList.add("toastEle");
  toast.innerHTML = msg;
  toastBox.appendChild(toast);
  if (msg.includes("Error")) {
    toast.classList.add("error");
  }
  if (msg.includes("Invalid")) {
    toast.classList.add("invalid");
  }
  setTimeout(() => {
    toast.remove();
  }, 5000);
}
