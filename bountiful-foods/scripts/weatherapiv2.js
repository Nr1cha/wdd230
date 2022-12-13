// select HTML elements in the document
const url =
    "https://api.openweathermap.org/data/2.5/weather?lat=41.034878&lon=-111.938644&units=imperial&appid=940263958285631fc3383425f7a3cd60";
const page = document.querySelector(".content");

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            console.table(data);
            return data; //added this here.
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function displayResults(weatherdata) {
    const currentTemp = document.querySelector("#current-temp");
    const weatherIcon = document.querySelector("#weather-icon");
    const captionDesc = document.querySelector("figcaption");
    const windSpeed = document.querySelector("#wind-speed");

    // adding data from the API to the page
    const currentTempFixed = weatherdata.main.temp.toFixed(0);
    currentTemp.textContent = currentTempFixed;

    const windSpeedFixed = weatherdata.wind.speed.toFixed(0);
    windSpeed.textContent = windSpeedFixed;
    windChill(weatherdata.wind.speed, weatherdata.main.temp);

    weatherIcon.src = `https://openweathermap.org/img/wn/${weatherdata.weather[0].icon}@2x.png`;
    captionDesc.textContent = weatherdata.weather[0].description;
}

// section to loop through my HTML for 3 day weather
// Array.forEach(day) => {
//     console.log("working");
// };



async function init() {
    const data = await apiFetch();
    displayResults(data);
}
init();

