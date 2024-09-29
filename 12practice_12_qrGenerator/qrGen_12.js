let inputBox = document.querySelector("input");
let genQr = document.querySelector("button");
let imgBox = document.querySelector(".imgBox");
let img = document.querySelector(".imgBox img");
let reQr = document.querySelector("#reQr");

let qr_url = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";
async function getQuote() {
  try {
    if (inputBox.value.length > 0) {
      img.src = qr_url + inputBox.value;
    }
  } catch (error) {
    console.error("Error generating QR code:", error);
    alert("An error occurred while generating the QR code. Please try again.");
  }
}
genQr.addEventListener("click", function () {
  if (inputBox.value.length > 0) {
    console.log("helo");
    imgBox.style.display = "block";
    reQr.style.display = "block";
    getQuote();
  } else {
    inputBox.classList.add("error");
    inputBox.placeholder = "Please Enter Text";
    setTimeout(() => {
      inputBox.classList.remove("error");
      inputBox.placeholder = "Enter Text/URL";
    }, 1000);
  }
});
function refreshQR() {
  inputBox.value = "";
  imgBox.style.display = "none";
  reQr.style.display = "none";
}
