let accessKey = "57aKOlnFTqRgnfj1HsXRg_XQevqmXYc3na5EsuJUDts";
let form = document.querySelector(".form");
let input = document.querySelector(".form input");
let searchBtn = document.querySelector(".form button");
let searchresult = document.querySelector(".search-result");
let showMoreBtn = document.querySelector(".show-more");

let keyword = "";
let page = 1;
async function searchImg(isNewSearch = false) {
  const keyword = input.value.trim();
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${encodeURIComponent(
    keyword
  )}&client_id=${accessKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    let storedImages = JSON.parse(localStorage.getItem("storedImages")) || [];

    if (isNewSearch) {
      searchresult.innerHTML = "";
      storedImages = [];
    }

    if (Array.isArray(data.results) && data.results.length > 0) {
      data.results.forEach((result) => {
        let img = document.createElement("img");
        img.src = result.urls.small;
        let imgLink = document.createElement("a");
        imgLink.href = result.links.html;
        imgLink.target = "_blank";
        imgLink.appendChild(img);
        searchresult.appendChild(imgLink);

        storedImages.push(result.urls.small);
        showMoreBtn.style.display = "block";
      });

      localStorage.setItem("storedImages", JSON.stringify(storedImages));
    } else {
      console.error("No results found or results is not an array.");
    }
  } catch (error) {
    console.error("Error fetching or processing data:", error);
  }
}

function loadStoredImages() {
  const storedImages = JSON.parse(localStorage.getItem("storedImages")) || [];

  storedImages.forEach((imageUrl) => {
    let img = document.createElement("img");
    img.src = imageUrl;
    searchresult.appendChild(img);
  });
}

searchBtn.addEventListener("click", (e) => {
  e.preventDefault();
  page = 1;
  searchImg(true);
  console.log("New search initiated");
});

showMoreBtn.addEventListener("click", (e) => {
  e.preventDefault();
  page++;
  searchImg(false);
  console.log("Loading more images...");
});

window.onload = loadStoredImages;
