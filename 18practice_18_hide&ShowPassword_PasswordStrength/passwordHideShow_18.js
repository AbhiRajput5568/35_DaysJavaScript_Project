let eyeIcon = document.getElementById("hide");
let password = document.querySelector(".password-cont input");
eyeIcon.onclick = function () {
  if (password.value != 0) {
    if (password.type == "password") {
      password.type = "text";
      eyeIcon.classList.remove("ri-eye-off-line");
      eyeIcon.classList.add("ri-eye-line");
    } else {
      password.type = "password";
      eyeIcon.classList.remove("ri-eye-line");
      eyeIcon.classList.add("ri-eye-off-line");
    }
  }
};

let msg = document.querySelector(".msg");
let strength = document.querySelector(".strength");

password.addEventListener("input", () => {
  if (password.value.length > 0) {
    msg.style.display = "inline-block";
  } else {
    msg.style.display = "none";
  }
  if (password.value.length < 4) {
    msg.style.display = "inline-block";
    msg.style.color = "red";
    strength.innerHTML = " is Low";
    password.style.border = "3px solid red";
  } else if (password.value.length < 8) {
    msg.style.display = "inline-block";
    msg.style.color = "blue";
    password.style.border = "3px solid blue";
    strength.innerHTML = "is Medium";
  } else if (password.value.length <= 12 || password.value.length >= 12) {
    msg.style.display = "inline-block";
    msg.style.color = "green";
    password.style.border = "3px solid green";
    strength.innerHTML = "is High";
  } else {
    msg.style.display = "none";
    password.style.border = "3px solid white";
  }
});
