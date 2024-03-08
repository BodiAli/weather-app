import "./style.css";
import linktag from "./linktag.js";
linktag();

async function getWeather() {
  const response = await fetch(
    "http://api.weatherapi.com/v1/current.json?key=4062a6c99201445190e72941240103&q=London"
  );
  const data = await response.json();
  console.log(data);
}
getWeather();
