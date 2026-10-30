const weatherIcon = document.getElementById("weather-icon");
const mainTemp = document.getElementById("main-temperature");
const feelsLike = document.getElementById("feels-like");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");
const windGust = document.getElementById("wind-gust");
const weatherMain = document.getElementById("weather-main");
const locations = document.getElementById("location");

const locationSelection = document.querySelector("select");
const weatherBtn = document.getElementById("get-weather-btn");

async function getWeather(city) {
    try {
        const res = await fetch(`https://weather-proxy.freecodecamp.rocks/api/city/${city}`);
        const data = await res.json()
        return data;
    } catch (err) {
        alert("Something went wrong, please try again later")
    }
}

async function showWeather(city) {
    const data = await getWeather(city);
    weatherIcon.src = data.weather[0].icon;
    mainTemp.textContent = `${data.main.temp} c`;
    feelsLike.textContent = `${data.main.feels_like} c`
}

weatherBtn.addEventListener("click", () => {
    let selectedLocation = locationSelection.value;
    showWeather(selectedLocation);
})
