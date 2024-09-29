let inputValue = document.querySelector(".amount input");
let fromValue = document.querySelector("#from");
let toValue = document.querySelector("#to");
let select = document.querySelectorAll(".select-cont select");
let btn = document.querySelector(".cont button");
let baseurl =
  "https://raw.githubusercontent.com/WoXy-Sensei/currency-api/main/api";
let result = document.querySelector(".msg");

for (op of select) {
  for (code in countryList) {
    let option = document.createElement("option");
    option.innerText = code;
    op.appendChild(option);
    if (op.name == "from" && code === "USD") {
      option.selected = "selected";
    } else if (op.name == "to" && code === "INR") {
      option.selected = "selected";
    }
  }
  op.addEventListener("change", (e) => {
    updateFlag(e.target);
  });
}
function updateFlag(e) {
  let currCode = e.value;
  let countryCode = countryList[currCode];
  let newsrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
  let img = e.parentElement.querySelector("img");
  img.src = newsrc;
}
btn.addEventListener("click", async (e) => {
  e.preventDefault();
  let amount = inputValue.value;
  if (amount === "" || amount < 1) {
    amount = 1;
    inputValue.value = "1";
  }
  try {
    let url = `${baseurl}/${toValue.value}_${fromValue.value}.json`;
    let response = await fetch(url);
    let data = await response.json();
    result.innerText = `${amount} ${data.toCurrency} = ${(
      data.rate * amount
    ).toFixed(2)} ${data.fromCurrency}`;
  } catch (error) {
    result.innerText = "Fetching error";
    setTimeout(() => {
      result.innerText = "Loading...";
    }, 2000);
    console.log("error", error);
  }
});
