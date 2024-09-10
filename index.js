

function showcity(event) {
    event.preventDefault();
    let cityinput = document.querySelector(".search-city-input");
    let cityElement = document.querySelector("#current-place");
    cityElement.innerHTML = cityinput.value;

    let city = cityinput.value;
    let apieky = "f4850684o25d3207eb4aa74t2073f600";
    let url = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apieky}`;
    axios.get(url).then(showtemperature);
}
function showtemperature(response) {
    let temperature = document.querySelector("#current-weather");
    temperature.innerHTML = `${Math.round(response.data.temperature.current)}°C`;

    let description = document.querySelector("#current-weather-description");
    description.innerHTML = response.data.condition.description;

    let country = document.querySelector("#country");
    country.innerHTML = response.data.country;

    let humidity = document.querySelector("#humidity");
    humidity.innerHTML = `${response.data.temperature.humidity}%`;

    let wind = document.querySelector("#wind");
    wind.innerHTML = `${response.data.wind.speed}km/h`;

    let feelslike = document.querySelector("#temperature");
    feelslike.innerHTML = `${Math.round(response.data.temperature.feels_like)}°C`;

    let coordinates = document.querySelector("#coordinates");
    coordinates.innerHTML = `${response.data.coordinates.latitude}°N, ${response.data.coordinates.longitude}°E`;

    let appicon = document.querySelector("#current-weather-emoji")
    appicon.innerHTML = `<img src="${response.data.condition.icon_url}" class="weather-app-icon" />`
}

let now = new Date();

let currentyear = now.getFullYear();
let currentdate = now.getDate();

let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
let currentmonth = months[now.getMonth()];

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
let currentday = document.querySelector(".heading");
currentday.innerHTML= day;

let currentdateElement = document.querySelector("#current-date");
currentdateElement.innerHTML = `${currentdate} ${currentmonth} ${currentyear}`;



let searchform = document.querySelector("#search-form");
searchform.addEventListener("submit", showcity);

