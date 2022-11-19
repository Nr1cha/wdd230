// select HTML elements in the document
const url =
    "https://api.openweathermap.org/data/2.5/weather?lat=41.034878&lon=-111.938644&units=imperial&appid=b0b41ac10094817e9cec6c0486ebf081";
const page = document.querySelector(".content");

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            // console.log(data);
            return data; //added this here.
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function displayResults(weatherdata) {
    console.log(weatherdata);
    const currentTemp = document.querySelector("#current-temp");
    const weatherIcon = document.querySelector("#weather-icon");
    const captionDesc = document.querySelector("figcaption");
    const windSpeed = document.querySelector("#wind-speed");
    // const windChill = document.querySelector("wind-chill");

    // adding data from the API to the page
    const currentTempFixed = weatherdata.main.temp.toFixed(0);
    currentTemp.textContent = currentTempFixed;

    const windSpeedFixed = weatherdata.wind.speed.toFixed(0);
    windSpeed.textContent = windSpeedFixed;
    // console.log(weatherdata.wind.speed, weatherdata.main.temp, windChill )
    windChill(weatherdata.wind.speed, weatherdata.main.temp);

    weatherIcon.src = `http://openweathermap.org/img/wn/${weatherdata.weather[0].icon}@2x.png`;
    captionDesc.textContent = weatherdata.weather[0].description;
}

async function init() {
    const data = await apiFetch();
    displayResults(data);
}
init();

