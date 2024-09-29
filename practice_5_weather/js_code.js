let apikey = "8c9e3f355d33e97ed0d15f53057b2852";
let apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
let input = document.querySelector(".serch input");
let searchIcon = document.querySelector(".serchIcon");
let weatherImg = document.querySelector(".weather img");

async function chekweather(city) {
  let response = await fetch(apiURL + city + `&appid=${apikey}`);
  let data = await response.json();
  console.log(data);
  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".weather .temp").innerHTML =
    Math.round(data.main.temp) + "°C";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

  if (data.weather[0].main == "Clouds") {
    weatherImg.src =
      "https://imgs.search.brave.com/KaZtvuc7lWyC15Fiyt52wRXHSb-Bkb-nnF1z2m53TdM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nYWxsLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMTEvV2Vh/dGhlci1QTkctRnJl/ZS1JbWFnZS5wbmc";
  } else if (data.weather[0].main == "Clear") {
    weatherImg.src = "https://clipart-library.com/images/piqdkxqi9.png";
  } else if (data.weather[0].main == "Rain") {
    weatherImg.src =
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBr0fHLfJkVcF4A3fRpTVIMkt1AKZ2I5wP7OMrC_dFKTJol6TgyuaYwBoIpPzVfID7RgU&usqp=CAU";
  } else if (data.weather[0].main == "Drizzle") {
    weatherImg.src = "https://image.pngaaa.com/623/1027623-middle.png";
  } else if (data.weather[0].main == "Mist") {
    weatherImg.src =
      "https://w7.pngwing.com/pngs/296/238/png-transparent-cloudy-day-fog-foggy-mist-sun-weather-the-weather-is-nice-today-icon.png";
  } else {
    weatherImg.src =
      "https://www.pngmart.com/files/3/Weather-PNG-Free-Download.png";
  }
}
searchIcon.addEventListener("click", function () {
  if (input.value == "") {
    alert("Please Enter City Name");
  } else {
    chekweather(input.value);
  }
});
