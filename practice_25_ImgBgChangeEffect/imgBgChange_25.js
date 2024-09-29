let file = document.querySelector(".file-input");
let img = document.querySelector(".img");
let imgURL;

function show() {
  let imgFile = file.files[0];
  // file.style.display = "none";
  file.style.position = "absolute";
  file.style.top = "-30px";
  file.style.marginLeft = "40px";

  img.style.display = "flex";
  img.src = URL.createObjectURL(imgFile);
  console.log(imgFile.name);
}
document.querySelector(".convrt").addEventListener("click", function () {
  let imgFile = file.files[0];

  let formData = new FormData();
  formData.append("image_file", imgFile);
  formData.append("size", "auto");

  let apiKey = "jekDdPPHgJUHrcjbUCEy66u3";

  fetch("https://api.remove.bg/v1.0/removebg", {
    method: "POST",
    headers: {
      "X-Api-Key": apiKey,
    },
    body: formData,
  })
    .then((response) => {
      return response.blob();
    })
    .then((blob) => {
      let url = URL.createObjectURL(blob);
      imgURL = url;
      img.src = url;
      console.log(blob);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
});

function download() {
  let anchor = document.createElement("a");
  anchor.href = imgURL;
  anchor.download = "no-bg.png";
  document.body.appendChild(anchor);
  anchor.click();
  document.body.removeChild(anchor);
}
