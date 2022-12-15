// select HTML elements in the document
const url =
    "https://api.openweathermap.org/data/3.0/onecall?lat=33.1581&lon=-117.3506&units=imperial&appid=940263958285631fc3383425f7a3cd60";
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
    let currentDay = document.createElement("p");
    let weatherIcon = document.createElement("img");

    // adding data from the API to the new elements
    // temp
    const currentTempFixed = weatherdata.temp.day.toFixed(0);
    temp.textContent = `Temperature: ${currentTempFixed}\u00B0F`;

    // getting day logic set up
    let dateNow = new Date(0); // The 0 there is the key, which sets the date to the epoch
    dateNow.setUTCSeconds(weatherdata.dt);
    let formattedDate = dateNow.toDateString(); //convert to something nice for the user to read
    currentDay.textContent = `${formattedDate}`;
    // console.log(formattedDate);

    // adding day info to the p tag
    // currentDay.textContent = `${dateNow}`; 

    // humidity
    const humid = weatherdata.humidity.toFixed(0);
    humidity.textContent = `Humidity: ${humid}\u0025`;

    // condition desc
    const cond = weatherdata.weather[0].description;
    conditionDesc.textContent = `Condition: ${cond}`;

    // picture from api
    weatherIcon.src = `https://openweathermap.org/img/wn/${weatherdata.weather[0].icon}@2x.png`;


    // adding it to the page
    newDiv.classList.add("weather");
    // newDiv.classList.add("day");
    newDiv.append(currentDay,temp,humidity,conditionDesc,weatherIcon);
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