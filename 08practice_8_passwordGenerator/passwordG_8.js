let inputBox = document.querySelector(".input-box input");
let btn = document.querySelector(".btn");
let length = 12;

let upperCase = "ABCDEFGHIJKLMNPQRSTWXYZ";
let lowerCase = "abcdefghijklmnopqrstwxyz";
let numbers = "0123456789";
let symbol = "~!@#$%^&*()_+=-{]}[,.<>/?|";
let allChars = upperCase + lowerCase + numbers + symbol;
function createPassword() {
  let password = "";
  while (length > password.length) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }
  inputBox.value = password;
}
function copyPassword() {
  navigator.clipboard
    .writeText(inputBox.value)
    .then(() => {
      document.querySelector(".cpy").innerHTML = "Password Copied";
      setTimeout(() => {
        document.querySelector(".cpy").innerHTML = "";
      }, 1000);
    })
    .catch((err) => {
      console.error("Failed to copy text: ", err);
    });
}
