const scriptURL =
  "https://script.google.com/macros/s/AKfycbw3fe7QZjHwPEHvR0gSwpChSnreSJELDLtEzvxr8LzCjv7jLuAOwaDUb0Jjs-MSM7yn/exec";
const form = document.forms["submit-to-google-sheet"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      console.log("Success!", response);
      document.querySelector(".msg").style.display = "block";
      setTimeout(() => {
        document.querySelector(".msg").style.display = "none";
      }, 1000);
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});
