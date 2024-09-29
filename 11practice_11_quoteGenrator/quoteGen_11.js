let genBtn = document.querySelector(".gen");
let postBtn = document.querySelector(".post");
let quoteLine = document.querySelector("blockquote");
let authorLine = document.querySelector(".quote-box span");
console.log(authorLine);
let api_url = "https://type.fit/api/quotes";
async function getQuote(url) {
  try {
    let response = await fetch(url);
    var quotes = await response.json();
    let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    quoteLine.innerHTML = randomQuote.text;
    authorLine.innerHTML = randomQuote.author;

    console.log(randomQuote);
  } catch {
    quoteLine.textContent = "An error occurred. Please try again.";
    authorLine.textContent = "";
    console.error("Error fetching quote:", error);
  }
}
function tweet() {
  window.open(
    "https://twitter.com/intent/tweet?text=" +
      quoteLine.innerHTML +
      "-------" +
      authorLine.innerHTML,
    "Tweet Window",
    "width=600,height=300"
  );
}
