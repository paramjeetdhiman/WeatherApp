let API_KEY = "67a5fb4abc1f3768072b2b4d9d8082c6";

getWeatherData = (city) => {
  const URL = "https://api.openweathermap.org/data/2.5/weather";

  const FULL_URL = `${URL}?q=${city}&appid=${API_KEY}&units=metric`;

  let api = fetch(FULL_URL);
  return api.then((response) => {
    return response.json();
  });
};

searchCity = () => {
  const city = document.getElementById("city-input").value;

  console.log(city);
  getWeatherData(city)
    .then((data) => {
      showWeatherData(data);
    })
    .catch((error) => {
      console.log(error);
    });
};

showWeatherData = (weatherData) => {
  let cityName = document.getElementById("city-name");
  let type = document.getElementById("weather-type");
  let temp = document.getElementById("temp");
  let minTemp = document.getElementById("min-temp");
  let maxTemp = document.getElementById("max-temp");

  cityName.innerText = weatherData.name;
  type.innerText = weatherData.weather[0].main;
  temp.innerText = weatherData.main.temp;
  minTemp.innerText = weatherData.main.temp_min;
  maxTemp.innerText = weatherData.main.temp_max;
};
