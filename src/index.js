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
const today = new Date();

const yesterday = new Date(today);
yesterday.setDate(today.getDate() - 1);

const formattedYesterdayDate = yesterday.toISOString().split("T")[0];

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
  const today = new Date();

  const yesterday = new Date(today);
  yesterday.setDate(today.getDate() - 1);

  const formattedYesterdayDate = yesterday.toISOString().split("T")[0];
  let hourlyClicked = false;
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
  const humidityDiv = document.getElementById("humidity-div");
  const windSpeedDiv = document.getElementById("wind-speed-div");
  const gustDiv = document.getElementById("gust-div");
  const maxTempDiv = document.getElementById("max-temp-div");
  const minTempDiv = document.getElementById("min-temp-div");
  const rainPercentDiv = document.getElementById("rain-percent-div");
  const humidity = document.getElementById("humidity");
  const currentWindSpeed = document.getElementById("current-wind-speed");
  const gust = document.getElementById("gust");
  const currentMaxTemp = document.getElementById("current-max-temp");
  const currentMinTemp = document.getElementById("current-min-temp");
  const currentRainPercent = document.getElementById("current-rain-chance");
  const tommorowMaxTemp = document.getElementById("tommorow-max-temp");
  const tommorowMinTemp = document.getElementById("tommorow-min-temp");
  const tommorowWindSpeed = document.getElementById("tommorow-wind-speed");
  const tommorowRainChance = document.getElementById("tommorow-rain-chance");
  const tommorowDay = document.getElementById("tommorow-day");
  const afterTommorowDay = document.getElementById("after-day");
  const afterTommorowMaxTemp = document.getElementById("after-max-temp");
  const afterTommorowMinTemp = document.getElementById("after-min-temp");
  const afterTommorowWindSpeed = document.getElementById("after-wind-speed");
  const afterTommorowRainChance = document.getElementById("after-rain-chance");
  const after2TommorowDay = document.getElementById("after2-day");
  const after2TommorowMaxTemp = document.getElementById("after2-max-temp");
  const after2TommorowMinTemp = document.getElementById("after2-min-temp");
  const after2TommorowWindSpeed = document.getElementById("after2-wind-speed");
  const after2TommorowRainChance = document.getElementById("after2-rain-chance");
  const yesterdayDay = document.getElementById("yesterday-day");
  const yesterdayMaxTemp = document.getElementById("yesterday-max-temp");
  const yesterdayMinTemp = document.getElementById("yesterday-min-temp");
  const yesterdayWindSpeed = document.getElementById("yesterday-wind-speed");
  const yesterdayRainChance = document.getElementById("yesterday-rain-chance");
  const sixAMHour = document.getElementById("6am");
  const eightAMHour = document.getElementById("8am");
  const tenAMHour = document.getElementById("10am");
  const twelvePMHour = document.getElementById("12pm");
  const twoPMHour = document.getElementById("2pm");
  const fourPMHour = document.getElementById("4pm");
  const sixPMHour = document.getElementById("6pm");
  const eightPMHour = document.getElementById("8pm");
  const tenPMHour = document.getElementById("10pm");
  const twelveAMHour = document.getElementById("12am");
  const twoAMHour = document.getElementById("2am");
  const fourAMHour = document.getElementById("4am");
  const sixAMMaxTemp = document.getElementById("6am-max-temp")
  const sixAMMinTemp = document.getElementById("6am-min-temp")
  const sixAMWindSpeed = document.getElementById("6am-wind-speed")
  const sixAMRainChance = document.getElementById("6am-rain-chance")
  const eightAMMaxTemp = document.getElementById("8am-max-temp")
  const eightAMMinTemp = document.getElementById("8am-min-temp")
  const eightAMWindSpeed = document.getElementById("8am-wind-speed")
  const eightAMRainChance = document.getElementById("8am-rain-chance")
  const tenAMMaxTemp = document.getElementById("10am-max-temp")
  const tenAMMinTemp = document.getElementById("10am-min-temp")
  const tenAMWindSpeed = document.getElementById("10am-wind-speed")
  const tenAMRainChance = document.getElementById("10am-rain-chance")
  const twoPMMaxTemp = document.getElementById("2pm-max-temp")
  const twoPMMinTemp = document.getElementById("2pm-min-temp")
  const twoPMWindSpeed = document.getElementById("2pm-wind-speed")
  const twoPMRainChance = document.getElementById("2pm-rain-chance")
  const fourPMMaxTemp = document.getElementById("4pm-max-temp")
  const fourPMMinTemp = document.getElementById("4pm-min-temp")
  const fourPMWindSpeed = document.getElementById("4pm-wind-speed")
  const fourPMRainChance = document.getElementById("4pm-rain-chance")
  const sixAMMaxTemp = document.getElementById("6pm-max-temp")
  const sixAMMaxTemp = document.getElementById("6pm-min-temp")
  const sixAMMaxTemp = document.getElementById("6pm-wind-speed")
  const sixAMMaxTemp = document.getElementById("6pm-rain-chance")
  const sixAMMaxTemp = document.getElementById("8pm-max-temp")
  const sixAMMaxTemp = document.getElementById("8pm-min-temp")
  const sixAMMaxTemp = document.getElementById("8pm-wind-speed")
  const sixAMMaxTemp = document.getElementById("8pm-rain-chance")
  const sixAMMaxTemp = document.getElementById("10pm-max-temp")
  const sixAMMaxTemp = document.getElementById("10pm-min-temp")
  const sixAMMaxTemp = document.getElementById("10pm-wind-speed")
  const sixAMMaxTemp = document.getElementById("10pm-rain-chance")
  const sixAMMaxTemp = document.getElementById("12am-max-temp")
  const sixAMMaxTemp = document.getElementById("12am-min-temp")
  const sixAMMaxTemp = document.getElementById("12am-wind-speed")
  const sixAMMaxTemp = document.getElementById("12am-rain-chance")
  const sixAMMaxTemp = document.getElementById("2am-max-temp")
  const sixAMMaxTemp = document.getElementById("2am-min-temp")
  const sixAMMaxTemp = document.getElementById("2am-wind-speed")
  const sixAMMaxTemp = document.getElementById("2am-rain-chance")
  const sixAMMaxTemp = document.getElementById("4am-max-temp")
  const sixAMMaxTemp = document.getElementById("4am-min-temp")
  const sixAMMaxTemp = document.getElementById("4am-wind-speed")
  const sixAMMaxTemp = document.getElementById("4am-rain-chance")
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
    hourlyClicked = true;
    cards.classList.remove("daily");
    cards.classList.add("gap-10");
    cards.classList.add("hourly");
    cards.classList.add("overflow-x-auto");
    hourlyCards.forEach((card) => {
      card.classList.remove("hidden");
      card.classList.remove("hover:scale-105");
      card.classList.add("hover:bg-slate-900");
      card.classList.add("flex");
    });
    dailyCards.forEach((card) => {
      card.classList.remove("flex");
      card.classList.add("hidden");
    });
    dailyButton.addEventListener("click", () => {
      hourlyClicked = false;
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
        const responseCurrent = await Promise.all([
          fetch(
            `http://api.weatherapi.com/v1/history.json?dt=${formattedYesterdayDate}&key=4062a6c99201445190e72941240103&q=${searchInput.value}`
          ),
          fetch(
            `http://api.weatherapi.com/v1/forecast.json?days=4&key=4062a6c99201445190e72941240103&q=${searchInput.value}`
          ),
        ]);
        const historyData = await responseCurrent[0].json();
        const data = await responseCurrent[1].json();
        console.log(historyData);
        const currentData = data.current;
        currentTemperature.classList.replace("opacity-100", "opacity-0");
        location.classList.replace("opacity-100", "opacity-0");
        locationDate.classList.replace("opacity-100", "opacity-0");
        currentFeelsLike.classList.replace("opacity-100", "opacity-0");
        currentCondition.classList.replace("opacity-100", "opacity-0");
        conditionImg.classList.replace("opacity-100", "opacity-0");
        currentFeelsLikeIcon.classList.replace("opacity-100", "opacity-0");
        currentTemperatureIcon.classList.replace("opacity-100", "opacity-0");
        humidityDiv.classList.replace("opacity-100", "opacity-0");
        windSpeedDiv.classList.replace("opacity-100", "opacity-0");
        gustDiv.classList.replace("opacity-100", "opacity-0");
        maxTempDiv.classList.replace("opacity-100", "opacity-0");
        minTempDiv.classList.replace("opacity-100", "opacity-0");
        rainPercentDiv.classList.replace("opacity-100", "opacity-0");
        tommorowMaxTemp.classList.replace("opacity-100", "opacity-0");
        tommorowMinTemp.classList.replace("opacity-100", "opacity-0");
        tommorowWindSpeed.classList.replace("opacity-100", "opacity-0");
        tommorowRainChance.classList.replace("opacity-100", "opacity-0");
        tommorowDay.classList.replace("opacity-100", "opacity-0");
        afterTommorowDay.classList.replace("opacity-100", "opacity-0");
        afterTommorowMaxTemp.classList.replace("opacity-100", "opacity-0");
        afterTommorowMinTemp.classList.replace("opacity-100", "opacity-0");
        afterTommorowWindSpeed.classList.replace("opacity-100", "opacity-0");
        afterTommorowRainChance.classList.replace("opacity-100", "opacity-0");
        after2TommorowDay.classList.replace("opacity-100", "opacity-0");
        after2TommorowMaxTemp.classList.replace("opacity-100", "opacity-0");
        after2TommorowMinTemp.classList.replace("opacity-100", "opacity-0");
        after2TommorowWindSpeed.classList.replace("opacity-100", "opacity-0");
        after2TommorowRainChance.classList.replace("opacity-100", "opacity-0");
        yesterdayDay.classList.replace("opacity-100", "opacity-0");
        yesterdayMaxTemp.classList.replace("opacity-100", "opacity-0");
        yesterdayMinTemp.classList.replace("opacity-100", "opacity-0");
        yesterdayWindSpeed.classList.replace("opacity-100", "opacity-0");
        yesterdayRainChance.classList.replace("opacity-100", "opacity-0");
        sixAMHour.classList.replace("opacity-100", "opacity-0");
        eightAMHour.classList.replace("opacity-100", "opacity-0");
        tenAMHour.classList.replace("opacity-100", "opacity-0");
        twelvePMHour.classList.replace("opacity-100", "opacity-0");
        twoPMHour.classList.replace("opacity-100", "opacity-0");
        fourPMHour.classList.replace("opacity-100", "opacity-0");
        sixPMHour.classList.replace("opacity-100", "opacity-0");
        eightPMHour.classList.replace("opacity-100", "opacity-0");
        tenPMHour.classList.replace("opacity-100", "opacity-0");
        twelveAMHour.classList.replace("opacity-100", "opacity-0");
        twoAMHour.classList.replace("opacity-100", "opacity-0");
        fourAMHour.classList.replace("opacity-100", "opacity-0");

        console.log(data);
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

        if (currentData.condition.code === 1000 && currentData.condition.text.trim() === "Clear") {
          conditionImg.src = clear;
          setTimeout(() => {
            conditionImg.classList.replace("opacity-0", "opacity-100");
            conditionDiv.insertBefore(conditionImg, currentCondition);
          }, 300);
        } else if (currentData.condition.code === 1000 && currentData.condition.text.trim() === "Sunny") {
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
        } else if (currentData.condition.code === 1030) {
          conditionImg.src = mist;
          setTimeout(() => {
            conditionImg.classList.replace("opacity-0", "opacity-100");

            conditionDiv.insertBefore(conditionImg, currentCondition);
          }, 300);
        } else if (
          currentData.condition.code === 1053 ||
          currentData.condition.code === 1183 ||
          currentData.condition.code === 1089 ||
          currentData.condition.code === 1240 ||
          currentData.condition.code === 1249 ||
          currentData.condition.code === 1153
        ) {
          conditionImg.src = lightRain;
          setTimeout(() => {
            conditionImg.classList.replace("opacity-0", "opacity-100");

            conditionDiv.insertBefore(conditionImg, currentCondition);
          }, 300);
        } else if (
          currentData.condition.code === 1066 ||
          currentData.condition.code === 1072 ||
          currentData.condition.code === 1210 ||
          currentData.condition.code === 1216
        ) {
          conditionImg.src = possibleSnow;
          setTimeout(() => {
            conditionImg.classList.replace("opacity-0", "opacity-100");

            conditionDiv.insertBefore(conditionImg, currentCondition);
          }, 300);
        } else if (
          currentData.condition.code === 1063 ||
          currentData.condition.code === 1150 ||
          currentData.condition.code === 1180 ||
          currentData.condition.code === 1186
        ) {
          conditionImg.src = possibleRain;
          setTimeout(() => {
            conditionImg.classList.replace("opacity-0", "opacity-100");

            conditionDiv.insertBefore(conditionImg, currentCondition);
          }, 300);
        } else if (currentData.condition.code === 1069 || currentData.condition.code === 1204) {
          conditionImg.src = possibleSleet;
          setTimeout(() => {
            conditionImg.classList.replace("opacity-0", "opacity-100");

            conditionDiv.insertBefore(conditionImg, currentCondition);
          }, 300);
        } else if (
          currentData.condition.code === 1087 ||
          currentData.condition.code === 1117 ||
          currentData.condition.code === 1273 ||
          currentData.condition.code === 1276 ||
          currentData.condition.code === 1279 ||
          currentData.condition.code === 1282
        ) {
          conditionImg.src = blizzard;
          setTimeout(() => {
            conditionImg.classList.replace("opacity-0", "opacity-100");

            conditionDiv.insertBefore(conditionImg, currentCondition);
          }, 300);
        } else if (
          currentData.condition.code === 1246 ||
          currentData.condition.code === 1171 ||
          currentData.condition.code === 1189 ||
          currentData.condition.code === 1192 ||
          currentData.condition.code === 1195 ||
          currentData.condition.code === 1201 ||
          currentData.condition.code === 1207 ||
          currentData.condition.code === 1243 ||
          currentData.condition.code === 1252
        ) {
          conditionImg.src = heavyRain;
          setTimeout(() => {
            conditionImg.classList.replace("opacity-0", "opacity-100");

            conditionDiv.insertBefore(conditionImg, currentCondition);
          }, 300);
        } else if (currentData.condition.code === 1135 || currentData.condition.code === 1147) {
          conditionImg.src = fog;
          setTimeout(() => {
            conditionImg.classList.replace("opacity-0", "opacity-100");

            conditionDiv.insertBefore(conditionImg, currentCondition);
          }, 300);
        } else if (
          currentData.condition.code === 1168 ||
          currentData.condition.code === 1198 ||
          currentData.condition.code === 1213 ||
          currentData.condition.code === 1255
        ) {
          conditionImg.src = lightSnow;
          setTimeout(() => {
            conditionImg.classList.replace("opacity-0", "opacity-100");

            conditionDiv.insertBefore(conditionImg, currentCondition);
          }, 300);
        } else if (
          currentData.condition.code === 1114 ||
          currentData.condition.code === 1219 ||
          currentData.condition.code === 1222 ||
          currentData.condition.code === 1225 ||
          currentData.condition.code === 1237 ||
          currentData.condition.code === 1258 ||
          currentData.condition.code === 1261 ||
          currentData.condition.code === 1264
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

          locationDate.classList.replace("opacity-0", "opacity-100");
          locationDate.textContent = `${formatDate(data.location.localtime)}`;

          currentCondition.classList.replace("opacity-0", "opacity-100");
          currentCondition.textContent = currentData.condition.text;

          currentTemperature.classList.replace("opacity-0", "opacity-100");
          currentTemperature.textContent = `${currentData.temp_c}°C`;
          currentFeelsLike.classList.replace("opacity-0", "opacity-100");
          currentFeelsLike.textContent = `${currentData.feelslike_c}°C`;

          currentFeelsLikeIcon.classList.replace("opacity-0", "opacity-100");

          currentTemperatureIcon.classList.replace("opacity-0", "opacity-100");

          humidityDiv.classList.replace("opacity-0", "opacity-100");
          humidity.textContent = `${currentData.humidity}%`;

          windSpeedDiv.classList.replace("opacity-0", "opacity-100");
          currentWindSpeed.textContent = `${currentData.wind_kph}km/h`;

          gustDiv.classList.replace("opacity-0", "opacity-100");
          gust.textContent = `${currentData.gust_kph}km/h`;
          maxTempDiv.classList.replace("opacity-0", "opacity-100");
          currentMaxTemp.textContent = `${data.forecast.forecastday[0].day.maxtemp_c}°C`;

          minTempDiv.classList.replace("opacity-0", "opacity-100");
          currentMinTemp.textContent = `${data.forecast.forecastday[0].day.mintemp_c}°C`;

          rainPercentDiv.classList.replace("opacity-0", "opacity-100");
          currentRainPercent.textContent = `${data.forecast.forecastday[0].day.daily_chance_of_rain}%`;

          tommorowDay.classList.replace("opacity-0", "opacity-100");

          tommorowMaxTemp.classList.replace("opacity-0", "opacity-100");
          tommorowMaxTemp.textContent = `${data.forecast.forecastday[1].day.maxtemp_c}°C`;

          tommorowMinTemp.classList.replace("opacity-0", "opacity-100");
          tommorowMinTemp.textContent = `${data.forecast.forecastday[1].day.mintemp_c}°C`;
          tommorowWindSpeed.classList.replace("opacity-0", "opacity-100");
          tommorowWindSpeed.textContent = `${data.forecast.forecastday[1].day.maxwind_kph}km/h`;

          tommorowRainChance.classList.replace("opacity-0", "opacity-100");
          tommorowRainChance.textContent = `${data.forecast.forecastday[1].day.daily_chance_of_rain}%`;

          afterTommorowMaxTemp.classList.replace("opacity-0", "opacity-100");
          afterTommorowMaxTemp.textContent = `${data.forecast.forecastday[2].day.maxtemp_c}°C`;

          afterTommorowMinTemp.classList.replace("opacity-0", "opacity-100");
          afterTommorowMinTemp.textContent = `${data.forecast.forecastday[2].day.mintemp_c}°C`;

          afterTommorowWindSpeed.classList.replace("opacity-0", "opacity-100");
          afterTommorowWindSpeed.textContent = `${data.forecast.forecastday[2].day.maxwind_kph}km/h`;
          afterTommorowRainChance.classList.replace("opacity-0", "opacity-100");
          afterTommorowRainChance.textContent = `${data.forecast.forecastday[2].day.daily_chance_of_rain}%`;

          after2TommorowMaxTemp.textContent = `${data.forecast.forecastday[3].day.maxtemp_c}°C`;
          after2TommorowMaxTemp.classList.replace("opacity-0", "opacity-100");
          after2TommorowMinTemp.classList.replace("opacity-0", "opacity-100");
          after2TommorowMinTemp.textContent = `${data.forecast.forecastday[3].day.mintemp_c}°C`;
          after2TommorowWindSpeed.classList.replace("opacity-0", "opacity-100");
          after2TommorowWindSpeed.textContent = `${data.forecast.forecastday[3].day.maxwind_kph}km/h`;
          after2TommorowRainChance.classList.replace("opacity-0", "opacity-100");
          after2TommorowRainChance.textContent = `${data.forecast.forecastday[3].day.daily_chance_of_rain}%`;

          yesterdayDay.classList.replace("opacity-0", "opacity-100");
          yesterdayMaxTemp.classList.replace("opacity-0", "opacity-100");
          yesterdayMaxTemp.textContent = `${historyData.forecast.forecastday[0].day.maxtemp_c}°C`;
          yesterdayMinTemp.classList.replace("opacity-0", "opacity-100");
          yesterdayMinTemp.textContent = `${historyData.forecast.forecastday[0].day.mintemp_c}°C`;
          yesterdayWindSpeed.classList.replace("opacity-0", "opacity-100");
          yesterdayWindSpeed.textContent = `${historyData.forecast.forecastday[0].day.maxwind_kph}km/h`;
          yesterdayRainChance.classList.replace("opacity-0", "opacity-100");
          yesterdayRainChance.textContent = `${historyData.forecast.forecastday[0].day.daily_chance_of_rain}%`;
          if (hourlyClicked) {
            sixAMHour.classList.replace("opacity-0", "opacity-100");
            sixAMHour.textContent = `${data.forecast.forecastday[0].hour[6].}`;
          }
        }, 300);
      } catch (error) {
        console.log(error);
      }
    }
  }
  enterButton.addEventListener("click", getWeather);
  document.addEventListener("keydown", getWeather);
})();
