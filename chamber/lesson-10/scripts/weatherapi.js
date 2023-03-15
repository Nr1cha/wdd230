// select HTML elements in the document
const url =
    "https://api.openweathermap.org/data/2.5/weather?q=fairbanks&units=imperial&appid=940263958285631fc3383425f7a3cd60";
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

    // adding data from the API to the page
    currentTemp.textContent = weatherdata.main.temp;
    weatherIcon.src = `http://openweathermap.org/img/wn/${weatherdata.weather[0].icon}@2x.png`;
    captionDesc.textContent = weatherdata.weather[0].description;
}
async function init() {
    const data = await apiFetch();
    displayResults(data);
}
init();
