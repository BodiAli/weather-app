/* eslint-disable no-nested-ternary */
import "./style.css";
import linktag from "./linktag.js";
import blizzard from "./images/blizzard.svg";
import clear from "./images/clear.svg";
import sunny from "./images/sunny.svg";
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
  function formatDate(inputDate) {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    const date = new Date(inputDate);

    const year = date.getFullYear();
    const month = months[date.getMonth()];
    const day = date.getDate();
    const dayOfWeek = days[date.getDay()];
    const hour = date.getHours();
    const minute = date.getMinutes();

    const suffix =
      day === 1 || day === 21 || day === 31
        ? "st"
        : day === 2 || day === 22
        ? "nd"
        : day === 3 || day === 23
        ? "rd"
        : "th";

    const formattedDay = day + suffix;
    const formattedHour = hour < 10 ? `0${hour}` : hour;
    const formattedMinute = minute < 10 ? `0${minute}` : minute;
    const formattedDate = `${dayOfWeek}, ${formattedDay} ${month} '${year
      .toString()
      .slice(-2)} ${formattedHour}:${formattedMinute} ${hour >= 12 ? "pm" : "am"}`;

    return formattedDate;
  }
  let celsiusClicked = true;
  let fahrenheitClicked = false;
  const dailyCards = document.querySelectorAll(".card");
  const hourlyCards = document.querySelectorAll(".card-hour");
  const hourlyButton = document.getElementById("hourly");
  const dailyButton = document.getElementById("daily");
  const cards = document.getElementById("cards");
  const location = document.getElementById("location");
  const locationDate = document.getElementById("location-date");
  const currentCondition = document.getElementById("current-condition");
  const currentTemperature = document.getElementById("current-temp");
  const currentFeelsLike = document.getElementById("current-feelslike");
  const searchInput = document.getElementById("search");
  const enterButton = document.getElementById("enter");
  const celsiusButton = document.getElementById("celsius");
  const fahrenheitButton = document.getElementById("fahrenheit");
  const conditionDiv = document.getElementById("condition");
  const conditionImg = document.createElement("img");
  const currentFeelsLikeIcon = document.getElementById("current-feelslike-icon");
  const currentTemperatureIcon = document.getElementById("current-temp-icon");
  conditionImg.title = "Current Condition Icon";
  conditionImg.alt = "current condition";
  conditionImg.style.width = "55px";
  conditionImg.style.height = "55px";
  conditionImg.classList.add("opacity-0");

  hourlyButton.addEventListener("click", () => {
    cards.classList.remove("daily");
    cards.classList.add("gap-10");
    cards.classList.add("hourly");
    cards.classList.add("overflow-x-auto");
    hourlyCards.forEach((card) => {
      card.classList.remove("hidden");
      card.classList.remove("hover:scale-105");
      card.classList.add("hover:bg-slate-900");
    });
    dailyCards.forEach((card) => {
      card.classList.remove("flex");
      card.classList.add("hidden");
    });
    dailyButton.addEventListener("click", () => {
      cards.classList.remove("hourly");
      cards.classList.remove("gap-10");
      cards.classList.add("daily");
      cards.classList.remove("overflow-x-auto");
      hourlyCards.forEach((card) => {
        card.classList.add("hidden");
        card.classList.remove("hover:scale-105");
        card.classList.add("hover:bg-slate-900");
      });
      dailyCards.forEach((card) => {
        card.classList.add("flex");
        card.classList.remove("hidden");
      });
    });
  });
  async function getWeather(ev) {
    if ((ev.type === "keydown" && ev.keyCode === 13 && searchInput.value !== "") || ev.type === "click") {
      try {
        const responseCurrent = await fetch(
          `http://api.weatherapi.com/v1/forecast.json?days=4&key=4062a6c99201445190e72941240103&q=${searchInput.value}`
        );
        const data = await responseCurrent.json();
        const currentData = data.current;
        currentTemperature.classList.replace("opacity-100", "opacity-0");
        location.classList.replace("opacity-100", "opacity-0");
        locationDate.classList.replace("opacity-100", "opacity-0");
        currentFeelsLike.classList.replace("opacity-100", "opacity-0");
        currentCondition.classList.replace("opacity-100", "opacity-0");
        conditionImg.classList.replace("opacity-100", "opacity-0");
        currentFeelsLikeIcon.classList.replace("opacity-100", "opacity-0");
        currentTemperatureIcon.classList.replace("opacity-100", "opacity-0");
        celsiusButton.addEventListener("click", function () {
          celsiusClicked = true;
          if (celsiusClicked) {
            this.classList.remove("bg-slate-800");
            this.classList.remove("border-black");
            this.classList.add("border-white");
            this.classList.add("bg-slate-500");

            fahrenheitButton.classList.add("bg-slate-800");
            fahrenheitButton.classList.add("border-black");
            fahrenheitButton.classList.remove("border-white");
            fahrenheitButton.classList.remove("bg-slate-500");
          }
        });
        fahrenheitButton.addEventListener("click", function () {
          fahrenheitClicked = true;
          if (fahrenheitButton) {
            this.classList.remove("bg-slate-800");
            this.classList.remove("border-black");
            this.classList.add("border-white");
            this.classList.add("bg-slate-500");

            celsiusButton.classList.add("bg-slate-800");
            celsiusButton.classList.add("border-black");
            celsiusButton.classList.remove("border-white");
            celsiusButton.classList.remove("bg-slate-500");

            currentTemperature.textContent = `${currentData.temp_c}°F`;
            currentTemperature.classList.replace("opacity-0", "opacity-100");
          }
        });

        if (currentData.condition.code === 1000 && currentData.condition.text === "Clear") {
          conditionImg.src = clear;
          setTimeout(() => {
            conditionImg.classList.replace("opacity-0", "opacity-100");

            conditionDiv.insertBefore(conditionImg, currentCondition);
          }, 300);
        } else if (currentData.condition.code === 1000 && currentData.condition.text === "Sunny") {
          conditionImg.src = sunny;
          setTimeout(() => {
            conditionImg.classList.replace("opacity-0", "opacity-100");

            conditionDiv.insertBefore(conditionImg, currentCondition);
          }, 300);
        } else if (currentData.condition.code === 1003) {
          conditionImg.src = partlyCloudy;
          setTimeout(() => {
            conditionImg.classList.replace("opacity-0", "opacity-100");

            conditionDiv.insertBefore(conditionImg, currentCondition);
          }, 300);
        } else if (currentData.condition.code === 1006) {
          conditionImg.src = cloudy;
          setTimeout(() => {
            conditionImg.classList.replace("opacity-0", "opacity-100");

            conditionDiv.insertBefore(conditionImg, currentCondition);
          }, 300);
        } else if (currentData.condition.code === 1009) {
          conditionImg.src = overcast;
          setTimeout(() => {
            conditionImg.classList.replace("opacity-0", "opacity-100");

            conditionDiv.insertBefore(conditionImg, currentCondition);
          }, 300);
        } else if (currentCondition.condition.code === 1030) {
          conditionImg.src = mist;
          setTimeout(() => {
            conditionImg.classList.replace("opacity-0", "opacity-100");

            conditionDiv.insertBefore(conditionImg, currentCondition);
          }, 300);
        } else if (
          currentCondition.condition.code === 1053 ||
          currentCondition.condition.code === 1183 ||
          currentCondition.condition.code === 1089 ||
          currentCondition.condition.code === 1240 ||
          currentCondition.condition.code === 1249 ||
          currentCondition.condition.code === 1153
        ) {
          conditionImg.src = lightRain;
          setTimeout(() => {
            conditionImg.classList.replace("opacity-0", "opacity-100");

            conditionDiv.insertBefore(conditionImg, currentCondition);
          }, 300);
        } else if (
          currentCondition.condition.code === 1066 ||
          currentCondition.condition.code === 1072 ||
          currentCondition.condition.code === 1210 ||
          currentCondition.condition.code === 1216
        ) {
          conditionImg.src = possibleSnow;
          setTimeout(() => {
            conditionImg.classList.replace("opacity-0", "opacity-100");

            conditionDiv.insertBefore(conditionImg, currentCondition);
          }, 300);
        } else if (
          currentCondition.condition.code === 1063 ||
          currentCondition.condition.code === 1150 ||
          currentCondition.condition.code === 1180 ||
          currentCondition.condition.code === 1186
        ) {
          conditionImg.src = possibleRain;
          setTimeout(() => {
            conditionImg.classList.replace("opacity-0", "opacity-100");

            conditionDiv.insertBefore(conditionImg, currentCondition);
          }, 300);
        } else if (currentCondition.condition.code === 1069 || currentCondition.condition.code === 1204) {
          conditionImg.src = possibleSleet;
          setTimeout(() => {
            conditionImg.classList.replace("opacity-0", "opacity-100");

            conditionDiv.insertBefore(conditionImg, currentCondition);
          }, 300);
        } else if (
          currentCondition.condition.code === 1087 ||
          currentCondition.condition.code === 1117 ||
          currentCondition.condition.code === 1273 ||
          currentCondition.condition.code === 1276 ||
          currentCondition.condition.code === 1279 ||
          currentCondition.condition.code === 1282
        ) {
          conditionImg.src = blizzard;
          setTimeout(() => {
            conditionImg.classList.replace("opacity-0", "opacity-100");

            conditionDiv.insertBefore(conditionImg, currentCondition);
          }, 300);
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
          setTimeout(() => {
            conditionImg.classList.replace("opacity-0", "opacity-100");

            conditionDiv.insertBefore(conditionImg, currentCondition);
          }, 300);
        } else if (currentCondition.condition.code === 1135 || currentCondition.condition.code === 1147) {
          conditionImg.src = fog;
          setTimeout(() => {
            conditionImg.classList.replace("opacity-0", "opacity-100");

            conditionDiv.insertBefore(conditionImg, currentCondition);
          }, 300);
        } else if (
          currentCondition.condition.code === 1168 ||
          currentCondition.condition.code === 1198 ||
          currentCondition.condition.code === 1213 ||
          currentCondition.condition.code === 1255
        ) {
          conditionImg.src = lightSnow;
          setTimeout(() => {
            conditionImg.classList.replace("opacity-0", "opacity-100");

            conditionDiv.insertBefore(conditionImg, currentCondition);
          }, 300);
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
          setTimeout(() => {
            conditionImg.classList.replace("opacity-0", "opacity-100");

            conditionDiv.insertBefore(conditionImg, currentCondition);
          }, 300);
        }
        setTimeout(() => {
          location.classList.replace("opacity-0", "opacity-100");
          location.textContent = `${data.location.country} ${data.location.region}`;
        }, 300);
        setTimeout(() => {
          locationDate.classList.replace("opacity-0", "opacity-100");
          locationDate.textContent = `${formatDate(data.location.localtime)}`;
        }, 300);
        setTimeout(() => {
          currentCondition.classList.replace("opacity-0", "opacity-100");
          currentCondition.textContent = currentData.condition.text;
        }, 300);
        setTimeout(() => {
          currentTemperature.classList.replace("opacity-0", "opacity-100");
          currentTemperature.textContent = `${currentData.temp_c}°C`;
        }, 300);
        setTimeout(() => {
          currentFeelsLike.classList.replace("opacity-0", "opacity-100");
          currentFeelsLike.textContent = `${currentData.feelslike_c}°C`;
        }, 300);
        setTimeout(() => {
          currentFeelsLikeIcon.classList.replace("opacity-0", "opacity-100");
        }, 300);
        setTimeout(() => {
          currentTemperatureIcon.classList.replace("opacity-0", "opacity-100");
        }, 300);
      } catch (error) {
        console.log(error);
      }
    }
  }
  enterButton.addEventListener("click", getWeather);
  document.addEventListener("keydown", getWeather);
})();
