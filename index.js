
function showcity(event) {
    event.preventDefault();
    let cityinput = document.querySelector(".search-city-input");
    let cityElement = document.querySelector("#current-place");
    cityElement.innerHTML = cityinput.value;
}
let searchform = document.querySelector("#search-form");
searchform.addEventListener("submit", showcity);

