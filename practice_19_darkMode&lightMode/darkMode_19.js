function darkMode() {
  document.body.classList.toggle("darkTheme");
  if (document.body.classList.contains("darkTheme")) {
    document.querySelector("#dark").classList.remove("ri-sun-line");
    document.querySelector("#dark").classList.add("ri-sun-fill");
  } else {
    document.querySelector("#dark").classList.remove("ri-sun-fill");
    document.querySelector("#dark").classList.add("ri-sun-line");
  }
}
