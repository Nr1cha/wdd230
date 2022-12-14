// select HTML elements in the document
const url =
    "https://api.openweathermap.org/data/3.0/onecall?lat=41.034878&lon=-111.938644&units=imperial&appid=940263958285631fc3383425f7a3cd60";
const page = document.querySelector(".content");

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            // console.table(data);
            return data; //added this here.
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function displayResults(weatherdata) {
    // creating new elements
    const newDiv = document.createElement("div");
    const humidity = document.createElement("p");
    const temp = document.createElement("p");
    const conditionDesc = document.createElement("p");

    // adding data from the API to the new elements
    // temp
    const currentTempFixed = weatherdata.temp.day.toFixed(0);
    temp.textContent = `temperature: ${currentTempFixed}`;

    // humidity
    const humid = weatherdata.humidity.toFixed(0);
    humidity.textContent = `humidity: ${humid}`;

    // condition desc
    const cond = weatherdata.weather[0].description;
    conditionDesc.textContent = `condition description: ${cond}`;

    // adding it to the page
    newDiv.classList.add("weather");
    newDiv.append(temp,humidity,conditionDesc);
    document.querySelector("main").appendChild(newDiv);

}


async function init() {
    const data = await apiFetch();
// beginning of loop
data.daily.slice(0,3).forEach((day) => {
    displayResults(day);
})
}
init();