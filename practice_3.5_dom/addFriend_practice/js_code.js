let h5 = document.querySelector("h5");
let addfrnd = document.querySelector(".add-frnd");
let removeFrnd = document.querySelector(".remove-frnd");
let flag = 0;
function Foradd(e) {
  if (flag == 0) {
    h5.innerHTML = "friend";
    h5.style.color = "green";
    flag = 1;
  }
}
function ForRemove(e) {
  if (flag == 1) {
    h5.innerHTML = "Stranger";
    h5.style.color = "red";
    flag = 0;
  }
}

addfrnd.addEventListener("click", Foradd);
removeFrnd.addEventListener("click", ForRemove);
