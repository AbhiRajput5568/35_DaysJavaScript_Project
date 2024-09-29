document.addEventListener("DOMContentLoaded", function () {
  const proxyUrl = "https://api.allorigins.win/get?url=";
  const apiUrl = encodeURIComponent(
    "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,dogecoin,ethereum&vs_currencies=usd"
  );

  fetch(`${proxyUrl}${apiUrl}`)
    .then((response) => response.json())
    .then((data) => {
      const parsedData = JSON.parse(data.contents);
      document.getElementById(
        "bitcoin-price"
      ).textContent = `$${parsedData.bitcoin.usd}`;
      document.getElementById(
        "dogecoin-price"
      ).textContent = `$${parsedData.dogecoin.usd}`;
      document.getElementById(
        "ethereum-price"
      ).textContent = `$${parsedData.ethereum.usd}`;
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
      document.getElementById("bitcoin-price").textContent = "Error";
      document.getElementById("dogecoin-price").textContent = "Error";
      document.getElementById("ethereum-price").textContent = "Error";
    });
});
