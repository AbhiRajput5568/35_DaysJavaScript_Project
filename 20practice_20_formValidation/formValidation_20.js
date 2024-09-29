function showPassword() {
  let passwordI = document.querySelector("#pass i");
  let passInput = document.querySelector("#pass .password");
  console.log(passwordI, "hello", passInput);
  if (passInput.value != "") {
    if (passwordI.classList.contains("ri-eye-off-line")) {
      passInput.type = "text";
      passwordI.classList.remove("ri-eye-off-line");
      passwordI.classList.add("ri-eye-line");
    } else {
      passInput.type = "password";

      passwordI.classList.remove("ri-eye-line");
      passwordI.classList.add("ri-eye-off-line");
    }
  }
}
document.addEventListener("DOMContentLoaded", function () {
  let alert = document.querySelector(".alert");
  let name = document.querySelector(".name");
  let email = document.querySelector(".email");
  let country = document.querySelector(".country");
  let phone = document.querySelector(".phone");
  let password = document.querySelector(".password");

  function validateForm(elementName, regex, errorMsg) {
    let elementValue = elementName.value;
    let inputBox = elementName.closest(".inputBox");
    let inputBoxI = inputBox.querySelector("i");

    if (elementValue.length == 0) {
      alert.innerHTML = errorMsg;
      return false;
    }
    if (!regex.test(elementValue)) {
      alert.innerHTML = errorMsg;
      elementName.style.borderBottom = "3px solid red";
      return false;
    }
    elementName.style.borderBottom = "3px solid #00e5ad";
    alert.innerHTML = "";
    inputBoxI.style.display = "block";
    return true;
  }

  function validateName() {
    return validateForm(
      name,
      /^[A-Za-z]+\s[A-Za-z]+$/,
      "Please enter a full name with a space."
    );
  }
  function validatePhone() {
    return validateForm(
      phone,
      /^\d{10}$/,
      "Please enter a valid 10-digit phone number."
    );
  }

  function validateCountry() {
    return validateForm(
      country,
      /^[A-Za-z\s]+$/,
      "Please enter a valid country name."
    );
  }
  function validateEmail() {
    return validateForm(
      email,
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      "Please enter a valid email address."
    );
  }
  function validatePassword() {
    return validateForm(
      password,
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
      "Password must be at least 8 characters longand<br> include  a number."
    );
  }
  name.addEventListener("keyup", validateName);
  phone.addEventListener("keyup", validatePhone);
  email.addEventListener("keyup", validateEmail);
  password.addEventListener("keyup", validatePassword);
  country.addEventListener("keyup", validateCountry);
});

document.addEventListener("DOMContentLoaded", function () {
  let formBox = document.querySelector("form");
  let popUpBox = document.querySelector(".popUp");
  let submit = document.querySelector(".create");
  let close = document.querySelector(".popUp");
  let intro = document.querySelector(".intro");

  function popUp() {
    formBox.style.display = "none";
    popUpBox.style.display = "flex";
    intro.style.display = "flex";
  }
  function popUpClose() {
    popUpBox.style.display = "none";
    intro.style.display = "none";
    formBox.style.display = "flex";
  }
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    popUp();
  });
  close.addEventListener("click", function () {
    popUpClose();
  });
}); 
