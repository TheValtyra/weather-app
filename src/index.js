function displayWeatherCondition(response) {
  let temperature = Math.round(response.data.main.temp);
  console.log(temperature);
  console.log(response);
  let h1 = document.querySelector("h1");
  let h2 = document.querySelector("h2");
  let city = response.data.name;
  let humidity = response.data.main.humidity;
  let humidityPercent = document.querySelector("#humidityPercent");
  let wind = Math.round(response.data.wind.speed);
  let windSpeed = document.querySelector("#windSpeed");
  h1.innerHTML = city;
  h2.innerHTML = `${temperature}ºC`;
  humidityPercent.innerHTML = `${humidity}%`;
  windSpeed.innerHTML = `${wind} km/h`;
}

function searchCity(city) {
  let apiKey = "57821c3b75b60c68ecd1a8d0dd1aa8d3";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeatherCondition);
}

function handleSubmit(event) {
  event.preventDefault();
  let city = document.querySelector("#search-text-input").value;
  searchCity(city);
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", handleSubmit);

//

let now = new Date();
let h3 = document.querySelector("h3");
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];
let hour = now.getHours();
let minute = now.getMinutes();
h3.innerHTML = `${day}, ${hour}:${minute}`;
