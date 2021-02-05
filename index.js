const API_KEY = "2c1e4fd3931115a22ba808fcbd3608db";

const getData = (city) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
  return fetch(url).then((data) => data.json());
}

const button = document.getElementById("button");
button.addEventListener("click", () => {
  const container = document.getElementById("container");
  const input = document.getElementById("input");
  getData(input.value)
    .then((data) => {
      container.innerHTML = template(data);
    })
    .catch(() => {
      container.innerHTML = 'La ciudad no existe'
    })
})

function template(data) {
  return `
    <div class="wheather-cards-container">
      <div class="cards">
        <h3>${data.name}</h3>
        <span>Temperature: ${kelvinToCelsius(data.main.temp)}°</span>
        <span>humidity: ${data.main.temp_max}%</span>
        <span>humidity: ${data.main.temp_min}%</span>
        <span>humidity: ${data.main.humidity}%</span>
        <span>Climate: ${data.weather[0].description}</span>
      </div>
      <div class="cards"></div>
    </div>
  `;
}

let kelvinToCelsius = (kelvinValue) => Math.round(kelvinValue - 273);
kelvinToCelsius(297);
