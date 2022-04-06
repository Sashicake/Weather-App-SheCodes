let now = document.querySelector("#now");
let currentTime = new Date();
let hours = currentTime.getHours();
if (hours < 10) {
  hours = `0${hours}`;
}
let minutes = currentTime.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}
let dayIndex = currentTime.getDay();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
now.innerHTML = `${days[dayIndex]} ${hours}:${minutes}`;

function showCityTemp(response) {
  document.querySelector("#city-name").innerHTML = response.data.name;
  document.querySelector("#currentTemp").innerHTML = Math.round(
    response.data.main.temp
  );
}
let searchedCity = document.querySelector("#search-city");
searchedCity.addEventListener("submit", search);
function search(event) {
  event.preventDefault();
  let city = document.querySelector("#city-input").value;
  let units = "metric";
  let apiKey = "4905108a47943490a132d537d96a7012";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(showCityTemp);
}

function getLocation(position) {
  let apiKey = "4905108a47943490a132d537d96a7012";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showCityTemp);
}

function getCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(getLocation);
}
let currentLocationButton = document.querySelector("#current-location-button");
currentLocationButton.addEventListener("click", getCurrentLocation);

let fahrenheit = document.querySelector("#fahrenheit-link");
fahrenheit.addEventListener("click", toFahrenheit);
function toFahrenheit(event) {
  event.preventDefault();
  let currentTemp = document.querySelector("#currentTemp");
  currentTemp.innerHTML = "66";
}

let celsius = document.querySelector("#celsius-link");
celsius.addEventListener("click", toCelsius);
function toCelsius(event) {
  event.preventDefault();
  let currentTemp = document.querySelector("#currentTemp");
  currentTemp.innerHTML = "19";
}