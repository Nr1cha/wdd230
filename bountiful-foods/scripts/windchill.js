// Function to get temperature and windspeed, and calculate windchill
function windChill(windSpeed, currentTemp) {
    let windChill;
    
    if (windSpeed > 3 && currentTemp <= 50) {
        windChill = 35.74 + 0.6215 * currentTemp - 35.75 * windSpeed ** 0.16 + 0.4275 * currentTemp * windSpeed ** 0.16;
        windChill = windChill.toFixed(0)
    } else {
        windChill = "NA";
    }
    // document.querySelector("#current-temp").innerHTML = currentTemp;
    // document.querySelector("#wind-speed").innerHTML = windSpeed;
    document.querySelector("#wind-chill").innerHTML = windChill;
}
