import "./style.css";
import linktag from "./linktag.js";
import blizzard from "./images/blizzard.svg";
import clear from "./images/clear.svg";
import cloudy from "./images/cloudy.svg";
import fog from "./images/fog.svg";
import heavyRain from "./images/heavy-rain.svg";
import heavySnow from "./images/heavy-snow.svg";
import lightRain from "./images/light-rain.svg";
import lightSnow from "./images/light-snow.svg";
import mist from "./images/mist.svg";
import overcast from "./images/overcast.svg";
import partlyCloudy from "./images/partly-cloudy.svg";
import possibleRain from "./images/possible-rain.svg";
import possibleSleet from "./images/possible-sleet.svg";
import possibleSnow from "./images/possible-snow.svg";

linktag();

(function () {
  const location = document.getElementById("location");
  const locationDate = document.getElementById("location-date");
  const currentCondition = document.getElementById("current-condition");
  const conditionDiv = document.getElementById("condition");
  const conditionImg = document.createElement("img");
  conditionImg.title = "Current Condition Icon";
  conditionImg.alt = "current condition";
  conditionImg.style.width = "55px";
  conditionImg.style.height = "55px";
  async function getWeather() {
    try {
      const responseCurrent = await fetch(
        "http://api.weatherapi.com/v1/forecast.json?days=4&key=4062a6c99201445190e72941240103&q=cairo"
      );
      const data = await responseCurrent.json();
      const currentData = data.current;
      if (currentData.condition.code === 1000) {
        conditionImg.src = clear;
        conditionDiv.insertBefore(conditionImg, currentCondition);
      } else if (currentData.condition.code === 1003) {
        conditionImg.src = partlyCloudy;
        conditionDiv.insertBefore(conditionImg, currentCondition);
      } else if (currentData.condition.code === 1006) {
        conditionImg.src = cloudy;
        conditionDiv.insertBefore(conditionImg, currentCondition);
      } else if (currentData.condition.code === 1009) {
        conditionImg.src = overcast;
        conditionDiv.insertBefore(conditionImg, currentCondition);
      } else if (currentCondition.condition.code === 1030) {
        conditionImg.src = mist;
        conditionDiv.insertBefore(conditionImg, currentCondition);
      } else if (
        currentCondition.condition.code === 1053 ||
        currentCondition.condition.code === 1183 ||
        currentCondition.condition.code === 1089 ||
        currentCondition.condition.code === 1240 ||
        currentCondition.condition.code === 1249 ||
        currentCondition.condition.code === 1153
      ) {
        conditionImg.src = lightRain;
        conditionDiv.insertBefore(conditionImg, currentCondition);
      } else if (
        currentCondition.condition.code === 1066 ||
        currentCondition.condition.code === 1072 ||
        currentCondition.condition.code === 1210 ||
        currentCondition.condition.code === 1216
      ) {
        conditionImg.src = possibleSnow;
        conditionDiv.insertBefore(conditionImg, currentCondition);
      } else if (
        currentCondition.condition.code === 1063 ||
        currentCondition.condition.code === 1150 ||
        currentCondition.condition.code === 1180 ||
        currentCondition.condition.code === 1186
      ) {
        conditionImg.src = possibleRain;
        conditionDiv.insertBefore(conditionImg, currentCondition);
      } else if (currentCondition.condition.code === 1069 || currentCondition.condition.code === 1204) {
        conditionImg.src = possibleSleet;
        conditionDiv.insertBefore(conditionImg, currentCondition);
      } else if (
        currentCondition.condition.code === 1087 ||
        currentCondition.condition.code === 1117 ||
        currentCondition.condition.code === 1273 ||
        currentCondition.condition.code === 1276 ||
        currentCondition.condition.code === 1279 ||
        currentCondition.condition.code === 1282
      ) {
        conditionImg.src = blizzard;
        conditionDiv.insertBefore(conditionImg, currentCondition);
      } else if (
        currentCondition.condition.code === 1246 ||
        currentCondition.condition.code === 1171 ||
        currentCondition.condition.code === 1189 ||
        currentCondition.condition.code === 1192 ||
        currentCondition.condition.code === 1195 ||
        currentCondition.condition.code === 1201 ||
        currentCondition.condition.code === 1207 ||
        currentCondition.condition.code === 1243 ||
        currentCondition.condition.code === 1252
      ) {
        conditionImg.src = heavyRain;
        conditionDiv.insertBefore(conditionImg, currentCondition);
      } else if (currentCondition.condition.code === 1135 || currentCondition.condition.code === 1147) {
        conditionImg.src = fog;
        conditionDiv.insertBefore(conditionImg, currentCondition);
      } else if (
        currentCondition.condition.code === 1168 ||
        currentCondition.condition.code === 1198 ||
        currentCondition.condition.code === 1213 ||
        currentCondition.condition.code === 1255
      ) {
        conditionImg.src = lightSnow;
        conditionDiv.insertBefore(conditionImg, currentCondition);
      } else if (
        currentCondition.condition.code === 1114 ||
        currentCondition.condition.code === 1219 ||
        currentCondition.condition.code === 1222 ||
        currentCondition.condition.code === 1225 ||
        currentCondition.condition.code === 1237 ||
        currentCondition.condition.code === 1258 ||
        currentCondition.condition.code === 1261 ||
        currentCondition.condition.code === 1264
      ) {
        conditionImg.src = heavySnow;
        conditionDiv.insertBefore(conditionImg, currentCondition);
      }
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }
  getWeather();
})();
