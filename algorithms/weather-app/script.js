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

        if (data.error) {
            throw new Error()
        }

        return data;
    } catch (err) {
        console.log(err);
        alert("Something went wrong, please try again later");
    }
}

async function showWeather(city) {
    const data = await getWeather(city);
    weatherIcon.src = data.weather[0].icon;
    mainTemp.textContent = isUndefined(data.main.temp, "°C");
    feelsLike.textContent = isUndefined(data.main.feels_like, "°C");
    humidity.textContent = isUndefined(data.main.humidity, "%");
    wind.textContent = isUndefined(data.wind.speed, "m/s");
    windGust.textContent = isUndefined(data.wind.gust, "m/s");
    weatherMain.textContent = data.weather[0].main;
    locations.textContent = data.name;
}

function isUndefined(value, append) {
    return value !== undefined ? value + append : "N/A"
}

weatherBtn.addEventListener("click", () => {
    let selectedLocation = locationSelection.value;
    showWeather(selectedLocation);
})
