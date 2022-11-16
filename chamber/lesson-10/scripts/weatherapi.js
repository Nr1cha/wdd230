// select HTML elements in the document
const url = 'https://api.openweathermap.org/data/2.5/weather?q=fairbanks&units=imperial&appid=b0b41ac10094817e9cec6c0486ebf081';
const page = document.querySelector('.content');

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

  function displayWeather(data) {
    console.log(data);
    const currentTemp = document.querySelector('#current-temp');
    const weatherIcon = document.querySelector('#weather-icon');
    const captionDesc = document.querySelector('figcaption');
    
    // adding data from the API to the page
    currentTemp.textContent = data.main.temp
    weatherIcon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    captionDesc.textContent = data.weather[0].description
  }
  async function init() {
    const data = await apiFetch();
    displayWeather(data);
  }
  init();
  