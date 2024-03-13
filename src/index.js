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
  const sixAMTemp = document.getElementById("6am-temp");
  const sixAMHumidity = document.getElementById("6am-humidity");
  const sixAMWindSpeed = document.getElementById("6am-wind-speed");
  const sixAMRainChance = document.getElementById("6am-rain-chance");
  const eightAMTemp = document.getElementById("8am-temp");
  const eightAMHumidity = document.getElementById("8am-humidity");
  const eightAMWindSpeed = document.getElementById("8am-wind-speed");
  const eightAMRainChance = document.getElementById("8am-rain-chance");
  const tenAMTemp = document.getElementById("10am-temp");
  const tenAMHumidity = document.getElementById("10am-humidity");
  const tenAMWindSpeed = document.getElementById("10am-wind-speed");
  const tenAMRainChance = document.getElementById("10am-rain-chance");
  const twelvePMTemp = document.getElementById("12pm-temp");
  const twelvePMHumidity = document.getElementById("12pm-humidity");
  const twelvePMWindSpeed = document.getElementById("12pm-wind-speed");
  const twelvePMRainChance = document.getElementById("12pm-rain-chance");
  const twoPMTemp = document.getElementById("2pm-temp");
  const twoPMHumidity = document.getElementById("2pm-humidity");
  const twoPMWindSpeed = document.getElementById("2pm-wind-speed");
  const twoPMRainChance = document.getElementById("2pm-rain-chance");
  const fourPMTemp = document.getElementById("4pm-temp");
  const fourPMHumidity = document.getElementById("4pm-humidity");
  const fourPMWindSpeed = document.getElementById("4pm-wind-speed");
  const fourPMRainChance = document.getElementById("4pm-rain-chance");
  const sixPMTemp = document.getElementById("6pm-temp");
  const sixPMHumidity = document.getElementById("6pm-humidity");
  const sixPMWindSpeed = document.getElementById("6pm-wind-speed");
  const sixPMRainChance = document.getElementById("6pm-rain-chance");
  const eightPMTemp = document.getElementById("8pm-temp");
  const eightPMHumidity = document.getElementById("8pm-humidity");
  const eightPMWindSpeed = document.getElementById("8pm-wind-speed");
  const eightPMRainChance = document.getElementById("8pm-rain-chance");
  const tenPMTemp = document.getElementById("10pm-temp");
  const tenPMHumidity = document.getElementById("10pm-humidity");
  const tenPMWindSpeed = document.getElementById("10pm-wind-speed");
  const tenPMRainChance = document.getElementById("10pm-rain-chance");
  const twelveAMTemp = document.getElementById("12am-temp");
  const twelveAMHumidity = document.getElementById("12am-humidity");
  const twelveAmWindSpeed = document.getElementById("12am-wind-speed");
  const twelveAMRainChance = document.getElementById("12am-rain-chance");
  const twoAMTemp = document.getElementById("2am-temp");
  const twoAMHumidity = document.getElementById("2am-humidity");
  const twoAMWindSpeed = document.getElementById("2am-wind-speed");
  const twoAMRainChance = document.getElementById("2am-rain-chance");
  const fourAMTemp = document.getElementById("4am-temp");
  const fourAMHumidity = document.getElementById("4am-humidity");
  const fourAMWindSpeed = document.getElementById("4am-wind-speed");
  const fourAMRainChance = document.getElementById("4am-rain-chance");
  const yesterdayDiv = document.getElementById("yesterday-div");
  const tommorowDiv = document.getElementById("tommorow-div");
  const afterTommorowDiv = document.getElementById("after-tommorow-div");
  const after2TommorowDiv = document.getElementById("after2-tommorow-div");
  const conditionDiv = document.getElementById("condition");
  const conditionImg = document.createElement("img");
  const conditionImgYesterday = document.createElement("img");
  const conditionImgTommorow = document.createElement("img");
  const conditionImgAfterTommorow = document.createElement("img");
  const conditionImgAfter2Tommorow = document.createElement("img");
  const currentFeelsLikeIcon = document.getElementById("current-feelslike-icon");
  const currentTemperatureIcon = document.getElementById("current-temp-icon");
  const errorText = document.getElementById("error");
  conditionImg.title = "Current Condition Icon";
  conditionImg.alt = "current condition";
  conditionImg.style.width = "55px";
  conditionImg.style.height = "55px";
  conditionImg.classList.add("opacity-0");

  conditionImgYesterday.title = "Current Condition Icon";
  conditionImgYesterday.alt = "current condition";
  conditionImgYesterday.style.width = "25px";
  conditionImgYesterday.style.height = "25px";
  conditionImgYesterday.classList.add("opacity-0");

  conditionImgTommorow.title = "Current Condition Icon";
  conditionImgTommorow.alt = "current condition";
  conditionImgTommorow.style.width = "25px";
  conditionImgTommorow.style.height = "25px";
  conditionImgTommorow.classList.add("opacity-0");

  conditionImgAfterTommorow.title = "Current Condition Icon";
  conditionImgAfterTommorow.alt = "current condition";
  conditionImgAfterTommorow.style.width = "25px";
  conditionImgAfterTommorow.style.height = "25px";
  conditionImgAfterTommorow.classList.add("opacity-0");

  conditionImgAfter2Tommorow.title = "Current Condition Icon";
  conditionImgAfter2Tommorow.alt = "current condition";
  conditionImgAfter2Tommorow.style.width = "25px";
  conditionImgAfter2Tommorow.style.height = "25px";
  conditionImgAfter2Tommorow.classList.add("opacity-0");

  hourlyButton.addEventListener("click", () => {
    hourlyClicked = true;
    hourlyButton.classList.remove("bg-slate-800");
    hourlyButton.classList.remove("border-black");
    hourlyButton.classList.add("border-white");
    hourlyButton.classList.add("bg-slate-500");

    dailyButton.classList.add("bg-slate-800");
    dailyButton.classList.add("border-black");
    dailyButton.classList.remove("border-white");
    dailyButton.classList.remove("bg-slate-500");

    cards.classList.remove("daily");
    cards.classList.remove("md:overflow-visible");
    cards.classList.add("gap-10");
    cards.classList.add("hourly");
    cards.classList.add("overflow-x-auto");

    const cardsScrollLeft = 50;
    setTimeout(() => {
      cards.scrollTo({
        left: cardsScrollLeft,
        behavior: "smooth",
      });
    }, 300);
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
  });
  dailyButton.addEventListener("click", () => {
    hourlyClicked = false;
    dailyButton.classList.remove("bg-slate-800");
    dailyButton.classList.remove("border-black");
    dailyButton.classList.add("border-white");
    dailyButton.classList.add("bg-slate-500");

    hourlyButton.classList.add("bg-slate-800");
    hourlyButton.classList.add("border-black");
    hourlyButton.classList.remove("border-white");
    hourlyButton.classList.remove("bg-slate-500");

    cards.classList.add("md:overflow-visible");
    cards.classList.remove("hourly");
    cards.classList.remove("gap-10");
    cards.classList.add("daily");
    hourlyCards.forEach((card) => {
      card.classList.add("hidden");
      card.classList.remove("hover:scale-105");
      card.classList.remove("hover:bg-slate-900");
    });
    dailyCards.forEach((card) => {
      card.classList.add("flex");
      card.classList.remove("hidden");
    });
  });

  hourlyCards.forEach((card) => {
    card.addEventListener("click", () => {
      card.scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  async function getWeather(ev) {
    if (
      (ev.type === "keydown" && ev.keyCode === 13 && searchInput.value !== "") ||
      (ev.type === "click" && searchInput.value !== "")
    ) {
      try {
        const responseCurrent = await Promise.all([
          fetch(
            `https://api.weatherapi.com/v1/history.json?dt=${formattedYesterdayDate}&key=4062a6c99201445190e72941240103&q=${searchInput.value}`
          ),
          fetch(
            `https://api.weatherapi.com/v1/forecast.json?days=4&key=4062a6c99201445190e72941240103&q=${searchInput.value}`
          ),
        ]);
        const historyData = await responseCurrent[0].json();
        const data = await responseCurrent[1].json();
        const currentData = data.current;
        currentTemperature.classList.replace("opacity-100", "opacity-0");
        location.classList.replace("opacity-100", "opacity-0");
        locationDate.classList.replace("opacity-100", "opacity-0");
        currentFeelsLike.classList.replace("opacity-100", "opacity-0");
        currentCondition.classList.replace("opacity-100", "opacity-0");
        conditionImg.classList.replace("opacity-100", "opacity-0");
        conditionImgYesterday.classList.replace("opacity-100", "opacity-0");
        conditionImgTommorow.classList.replace("opacity-100", "opacity-0");
        conditionImgAfterTommorow.classList.replace("opacity-100", "opacity-0");
        conditionImgAfter2Tommorow.classList.replace("opacity-100", "opacity-0");
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
        sixAMTemp.classList.replace("opacity-100", "opacity-0");
        sixAMHumidity.classList.replace("opacity-100", "opacity-0");
        sixAMWindSpeed.classList.replace("opacity-100", "opacity-0");
        sixAMRainChance.classList.replace("opacity-100", "opacity-0");
        eightAMTemp.classList.replace("opacity-100", "opacity-0");
        eightAMHumidity.classList.replace("opacity-100", "opacity-0");
        eightAMWindSpeed.classList.replace("opacity-100", "opacity-0");
        eightAMRainChance.classList.replace("opacity-100", "opacity-0");
        tenAMTemp.classList.replace("opacity-100", "opacity-0");
        tenAMHumidity.classList.replace("opacity-100", "opacity-0");
        tenAMWindSpeed.classList.replace("opacity-100", "opacity-0");
        tenAMRainChance.classList.replace("opacity-100", "opacity-0");
        twelvePMTemp.classList.replace("opacity-100", "opacity-0");
        twelvePMHumidity.classList.replace("opacity-100", "opacity-0");
        twelvePMWindSpeed.classList.replace("opacity-100", "opacity-0");
        twelvePMRainChance.classList.replace("opacity-100", "opacity-0");
        twoPMTemp.classList.replace("opacity-100", "opacity-0");
        twoPMHumidity.classList.replace("opacity-100", "opacity-0");
        twoPMWindSpeed.classList.replace("opacity-100", "opacity-0");
        twoPMRainChance.classList.replace("opacity-100", "opacity-0");
        fourPMTemp.classList.replace("opacity-100", "opacity-0");
        fourPMHumidity.classList.replace("opacity-100", "opacity-0");
        fourPMWindSpeed.classList.replace("opacity-100", "opacity-0");
        fourPMRainChance.classList.replace("opacity-100", "opacity-0");
        sixPMTemp.classList.replace("opacity-100", "opacity-0");
        sixPMHumidity.classList.replace("opacity-100", "opacity-0");
        sixPMWindSpeed.classList.replace("opacity-100", "opacity-0");
        sixPMRainChance.classList.replace("opacity-100", "opacity-0");
        eightPMTemp.classList.replace("opacity-100", "opacity-0");
        eightPMHumidity.classList.replace("opacity-100", "opacity-0");
        eightPMWindSpeed.classList.replace("opacity-100", "opacity-0");
        eightPMRainChance.classList.replace("opacity-100", "opacity-0");
        tenPMTemp.classList.replace("opacity-100", "opacity-0");
        tenPMHumidity.classList.replace("opacity-100", "opacity-0");
        tenPMWindSpeed.classList.replace("opacity-100", "opacity-0");
        tenPMRainChance.classList.replace("opacity-100", "opacity-0");
        twelveAMTemp.classList.replace("opacity-100", "opacity-0");
        twelveAMHumidity.classList.replace("opacity-100", "opacity-0");
        twelveAmWindSpeed.classList.replace("opacity-100", "opacity-0");
        twelveAMRainChance.classList.replace("opacity-100", "opacity-0");
        twoAMTemp.classList.replace("opacity-100", "opacity-0");
        twoAMHumidity.classList.replace("opacity-100", "opacity-0");
        twoAMWindSpeed.classList.replace("opacity-100", "opacity-0");
        twoAMRainChance.classList.replace("opacity-100", "opacity-0");
        fourAMTemp.classList.replace("opacity-100", "opacity-0");
        fourAMHumidity.classList.replace("opacity-100", "opacity-0");
        fourAMWindSpeed.classList.replace("opacity-100", "opacity-0");
        fourAMRainChance.classList.replace("opacity-100", "opacity-0");
        errorText.classList.replace("opacity-100", "opacity-0");

        if (data.error) {
          throw new Error(data.error.message);
        }

        const forecastDays = data.forecast.forecastday.map((forecast) => {
          const date = new Date(forecast.date);
          const dayName = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][
            date.getDay()
          ];
          return dayName;
        });

        celsiusButton.addEventListener("click", function () {
          celsiusClicked = true;
          if (celsiusClicked) {
            currentTemperature.classList.replace("opacity-100", "opacity-0");
            location.classList.replace("opacity-100", "opacity-0");
            locationDate.classList.replace("opacity-100", "opacity-0");
            currentFeelsLike.classList.replace("opacity-100", "opacity-0");
            currentCondition.classList.replace("opacity-100", "opacity-0");
            conditionImg.classList.replace("opacity-100", "opacity-0");
            conditionImgYesterday.classList.replace("opacity-100", "opacity-0");
            conditionImgTommorow.classList.replace("opacity-100", "opacity-0");
            conditionImgAfterTommorow.classList.replace("opacity-100", "opacity-0");
            conditionImgAfter2Tommorow.classList.replace("opacity-100", "opacity-0");
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
            sixAMTemp.classList.replace("opacity-100", "opacity-0");
            sixAMHumidity.classList.replace("opacity-100", "opacity-0");
            sixAMWindSpeed.classList.replace("opacity-100", "opacity-0");
            sixAMRainChance.classList.replace("opacity-100", "opacity-0");
            eightAMTemp.classList.replace("opacity-100", "opacity-0");
            eightAMHumidity.classList.replace("opacity-100", "opacity-0");
            eightAMWindSpeed.classList.replace("opacity-100", "opacity-0");
            eightAMRainChance.classList.replace("opacity-100", "opacity-0");
            tenAMTemp.classList.replace("opacity-100", "opacity-0");
            tenAMHumidity.classList.replace("opacity-100", "opacity-0");
            tenAMWindSpeed.classList.replace("opacity-100", "opacity-0");
            tenAMRainChance.classList.replace("opacity-100", "opacity-0");
            twelvePMTemp.classList.replace("opacity-100", "opacity-0");
            twelvePMHumidity.classList.replace("opacity-100", "opacity-0");
            twelvePMWindSpeed.classList.replace("opacity-100", "opacity-0");
            twelvePMRainChance.classList.replace("opacity-100", "opacity-0");
            twoPMTemp.classList.replace("opacity-100", "opacity-0");
            twoPMHumidity.classList.replace("opacity-100", "opacity-0");
            twoPMWindSpeed.classList.replace("opacity-100", "opacity-0");
            twoPMRainChance.classList.replace("opacity-100", "opacity-0");
            fourPMTemp.classList.replace("opacity-100", "opacity-0");
            fourPMHumidity.classList.replace("opacity-100", "opacity-0");
            fourPMWindSpeed.classList.replace("opacity-100", "opacity-0");
            fourPMRainChance.classList.replace("opacity-100", "opacity-0");
            sixPMTemp.classList.replace("opacity-100", "opacity-0");
            sixPMHumidity.classList.replace("opacity-100", "opacity-0");
            sixPMWindSpeed.classList.replace("opacity-100", "opacity-0");
            sixPMRainChance.classList.replace("opacity-100", "opacity-0");
            eightPMTemp.classList.replace("opacity-100", "opacity-0");
            eightPMHumidity.classList.replace("opacity-100", "opacity-0");
            eightPMWindSpeed.classList.replace("opacity-100", "opacity-0");
            eightPMRainChance.classList.replace("opacity-100", "opacity-0");
            tenPMTemp.classList.replace("opacity-100", "opacity-0");
            tenPMHumidity.classList.replace("opacity-100", "opacity-0");
            tenPMWindSpeed.classList.replace("opacity-100", "opacity-0");
            tenPMRainChance.classList.replace("opacity-100", "opacity-0");
            twelveAMTemp.classList.replace("opacity-100", "opacity-0");
            twelveAMHumidity.classList.replace("opacity-100", "opacity-0");
            twelveAmWindSpeed.classList.replace("opacity-100", "opacity-0");
            twelveAMRainChance.classList.replace("opacity-100", "opacity-0");
            twoAMTemp.classList.replace("opacity-100", "opacity-0");
            twoAMHumidity.classList.replace("opacity-100", "opacity-0");
            twoAMWindSpeed.classList.replace("opacity-100", "opacity-0");
            twoAMRainChance.classList.replace("opacity-100", "opacity-0");
            fourAMTemp.classList.replace("opacity-100", "opacity-0");
            fourAMHumidity.classList.replace("opacity-100", "opacity-0");
            fourAMWindSpeed.classList.replace("opacity-100", "opacity-0");
            fourAMRainChance.classList.replace("opacity-100", "opacity-0");

            this.classList.remove("bg-slate-800");
            this.classList.remove("border-black");
            this.classList.add("border-white");
            this.classList.add("bg-slate-500");

            fahrenheitButton.classList.add("bg-slate-800");
            fahrenheitButton.classList.add("border-black");
            fahrenheitButton.classList.remove("border-white");
            fahrenheitButton.classList.remove("bg-slate-500");
            setTimeout(() => {
              conditionImg.classList.replace("opacity-0", "opacity-100");
              conditionImgYesterday.classList.replace("opacity-0", "opacity-100");
              conditionImgTommorow.classList.replace("opacity-0", "opacity-100");
              conditionImgAfterTommorow.classList.replace("opacity-0", "opacity-100");
              conditionImgAfter2Tommorow.classList.replace("opacity-0", "opacity-100");

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

              afterTommorowDay.classList.replace("opacity-0", "opacity-100");
              afterTommorowDay.textContent = `${forecastDays[2]}`;
              afterTommorowMaxTemp.classList.replace("opacity-0", "opacity-100");
              afterTommorowMaxTemp.textContent = `${data.forecast.forecastday[2].day.maxtemp_c}°C`;

              afterTommorowMinTemp.classList.replace("opacity-0", "opacity-100");
              afterTommorowMinTemp.textContent = `${data.forecast.forecastday[2].day.mintemp_c}°C`;

              afterTommorowWindSpeed.classList.replace("opacity-0", "opacity-100");
              afterTommorowWindSpeed.textContent = `${data.forecast.forecastday[2].day.maxwind_kph}km/h`;
              afterTommorowRainChance.classList.replace("opacity-0", "opacity-100");
              afterTommorowRainChance.textContent = `${data.forecast.forecastday[2].day.daily_chance_of_rain}%`;

              after2TommorowDay.classList.replace("opacity-0", "opacity-100");
              after2TommorowDay.textContent = `${forecastDays[3]}`;
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

              sixAMHour.classList.replace("opacity-0", "opacity-100");
              sixAMTemp.classList.replace("opacity-0", "opacity-100");
              sixAMTemp.textContent = `${data.forecast.forecastday[0].hour[6].temp_c}°C`;
              sixAMHumidity.classList.replace("opacity-0", "opacity-100");
              sixAMHumidity.textContent = `${data.forecast.forecastday[0].hour[6].humidity}%`;
              sixAMWindSpeed.classList.replace("opacity-0", "opacity-100");
              sixAMWindSpeed.textContent = `${data.forecast.forecastday[0].hour[6].wind_kph}km/h`;
              sixAMRainChance.classList.replace("opacity-0", "opacity-100");
              sixAMRainChance.textContent = `${data.forecast.forecastday[0].hour[6].chance_of_rain}%`;

              eightAMHour.classList.replace("opacity-0", "opacity-100");
              eightAMTemp.classList.replace("opacity-0", "opacity-100");
              eightAMTemp.textContent = `${data.forecast.forecastday[0].hour[8].temp_c}°C`;
              eightAMHumidity.classList.replace("opacity-0", "opacity-100");
              eightAMHumidity.textContent = `${data.forecast.forecastday[0].hour[8].humidity}%`;
              eightAMWindSpeed.classList.replace("opacity-0", "opacity-100");
              eightAMWindSpeed.textContent = `${data.forecast.forecastday[0].hour[8].wind_kph}km/h`;
              eightAMRainChance.classList.replace("opacity-0", "opacity-100");
              eightAMRainChance.textContent = `${data.forecast.forecastday[0].hour[8].chance_of_rain}%`;

              tenAMHour.classList.replace("opacity-0", "opacity-100");
              tenAMTemp.classList.replace("opacity-0", "opacity-100");
              tenAMTemp.textContent = `${data.forecast.forecastday[0].hour[10].temp_c}°C`;
              tenAMHumidity.classList.replace("opacity-0", "opacity-100");
              tenAMHumidity.textContent = `${data.forecast.forecastday[0].hour[10].humidity}%`;
              tenAMWindSpeed.classList.replace("opacity-0", "opacity-100");
              tenAMWindSpeed.textContent = `${data.forecast.forecastday[0].hour[10].wind_kph}km/h`;
              tenAMRainChance.classList.replace("opacity-0", "opacity-100");
              tenAMRainChance.textContent = `${data.forecast.forecastday[0].hour[10].chance_of_rain}%`;

              twelvePMHour.classList.replace("opacity-0", "opacity-100");
              twelvePMTemp.classList.replace("opacity-0", "opacity-100");
              twelvePMTemp.textContent = `${data.forecast.forecastday[0].hour[12].temp_c}°C`;
              twelvePMHumidity.classList.replace("opacity-0", "opacity-100");
              twelvePMHumidity.textContent = `${data.forecast.forecastday[0].hour[12].humidity}%`;
              twelvePMWindSpeed.classList.replace("opacity-0", "opacity-100");
              twelvePMWindSpeed.textContent = `${data.forecast.forecastday[0].hour[12].wind_kph}km/h`;
              twelvePMRainChance.classList.replace("opacity-0", "opacity-100");
              twelvePMRainChance.textContent = `${data.forecast.forecastday[0].hour[12].chance_of_rain}%`;

              twoPMHour.classList.replace("opacity-0", "opacity-100");
              twoPMTemp.classList.replace("opacity-0", "opacity-100");
              twoPMTemp.textContent = `${data.forecast.forecastday[0].hour[14].temp_c}°C`;
              twoPMHumidity.classList.replace("opacity-0", "opacity-100");
              twoPMHumidity.textContent = `${data.forecast.forecastday[0].hour[14].humidity}%`;
              twoPMWindSpeed.classList.replace("opacity-0", "opacity-100");
              twoPMWindSpeed.textContent = `${data.forecast.forecastday[0].hour[14].wind_kph}km/h`;
              twoPMRainChance.classList.replace("opacity-0", "opacity-100");
              twoPMRainChance.textContent = `${data.forecast.forecastday[0].hour[14].chance_of_rain}%`;

              fourPMHour.classList.replace("opacity-0", "opacity-100");
              fourPMTemp.classList.replace("opacity-0", "opacity-100");
              fourPMTemp.textContent = `${data.forecast.forecastday[0].hour[16].temp_c}°C`;
              fourPMHumidity.classList.replace("opacity-0", "opacity-100");
              fourPMHumidity.textContent = `${data.forecast.forecastday[0].hour[16].humidity}%`;
              fourPMWindSpeed.classList.replace("opacity-0", "opacity-100");
              fourPMWindSpeed.textContent = `${data.forecast.forecastday[0].hour[16].wind_kph}km/h`;
              fourPMRainChance.classList.replace("opacity-0", "opacity-100");
              fourPMRainChance.textContent = `${data.forecast.forecastday[0].hour[16].chance_of_rain}%`;

              sixPMHour.classList.replace("opacity-0", "opacity-100");
              sixPMTemp.classList.replace("opacity-0", "opacity-100");
              sixPMTemp.textContent = `${data.forecast.forecastday[0].hour[18].temp_c}°C`;
              sixPMHumidity.classList.replace("opacity-0", "opacity-100");
              sixPMHumidity.textContent = `${data.forecast.forecastday[0].hour[18].humidity}%`;
              sixPMWindSpeed.classList.replace("opacity-0", "opacity-100");
              sixPMWindSpeed.textContent = `${data.forecast.forecastday[0].hour[18].wind_kph}km/h`;
              sixPMRainChance.classList.replace("opacity-0", "opacity-100");
              sixPMRainChance.textContent = `${data.forecast.forecastday[0].hour[18].chance_of_rain}%`;

              eightPMHour.classList.replace("opacity-0", "opacity-100");
              eightPMTemp.classList.replace("opacity-0", "opacity-100");
              eightPMTemp.textContent = `${data.forecast.forecastday[0].hour[20].temp_c}°C`;
              eightPMHumidity.classList.replace("opacity-0", "opacity-100");
              eightPMHumidity.textContent = `${data.forecast.forecastday[0].hour[20].humidity}%`;
              eightPMWindSpeed.classList.replace("opacity-0", "opacity-100");
              eightPMWindSpeed.textContent = `${data.forecast.forecastday[0].hour[20].wind_kph}km/h`;
              eightPMRainChance.classList.replace("opacity-0", "opacity-100");
              eightPMRainChance.textContent = `${data.forecast.forecastday[0].hour[20].chance_of_rain}%`;

              tenPMHour.classList.replace("opacity-0", "opacity-100");
              tenPMTemp.classList.replace("opacity-0", "opacity-100");
              tenPMTemp.textContent = `${data.forecast.forecastday[0].hour[22].temp_c}°C`;
              tenPMHumidity.classList.replace("opacity-0", "opacity-100");
              tenPMHumidity.textContent = `${data.forecast.forecastday[0].hour[22].humidity}%`;
              tenPMWindSpeed.classList.replace("opacity-0", "opacity-100");
              tenPMWindSpeed.textContent = `${data.forecast.forecastday[0].hour[22].wind_kph}km/h`;
              tenPMRainChance.classList.replace("opacity-0", "opacity-100");
              tenPMRainChance.textContent = `${data.forecast.forecastday[0].hour[22].chance_of_rain}%`;

              twelveAMHour.classList.replace("opacity-0", "opacity-100");
              twelveAMTemp.classList.replace("opacity-0", "opacity-100");
              twelveAMTemp.textContent = `${data.forecast.forecastday[0].hour[0].temp_c}°C`;
              twelveAMHumidity.classList.replace("opacity-0", "opacity-100");
              twelveAMHumidity.textContent = `${data.forecast.forecastday[0].hour[0].humidity}%`;
              twelveAmWindSpeed.classList.replace("opacity-0", "opacity-100");
              twelveAmWindSpeed.textContent = `${data.forecast.forecastday[0].hour[0].wind_kph}km/h`;
              twelveAMRainChance.classList.replace("opacity-0", "opacity-100");
              twelveAMRainChance.textContent = `${data.forecast.forecastday[0].hour[0].chance_of_rain}%`;

              twoAMHour.classList.replace("opacity-0", "opacity-100");
              twoAMTemp.classList.replace("opacity-0", "opacity-100");
              twoAMTemp.textContent = `${data.forecast.forecastday[0].hour[2].temp_c}°C`;
              twoAMHumidity.classList.replace("opacity-0", "opacity-100");
              twoAMHumidity.textContent = `${data.forecast.forecastday[0].hour[2].humidity}%`;
              twoAMWindSpeed.classList.replace("opacity-0", "opacity-100");
              twoAMWindSpeed.textContent = `${data.forecast.forecastday[0].hour[2].wind_kph}km/h`;
              twoAMRainChance.classList.replace("opacity-0", "opacity-100");
              twoAMRainChance.textContent = `${data.forecast.forecastday[0].hour[2].chance_of_rain}%`;

              fourAMHour.classList.replace("opacity-0", "opacity-100");
              fourAMTemp.classList.replace("opacity-0", "opacity-100");
              fourAMTemp.textContent = `${data.forecast.forecastday[0].hour[4].temp_c}°C`;
              fourAMHumidity.classList.replace("opacity-0", "opacity-100");
              fourAMHumidity.textContent = `${data.forecast.forecastday[0].hour[4].humidity}%`;
              fourAMWindSpeed.classList.replace("opacity-0", "opacity-100");
              fourAMWindSpeed.textContent = `${data.forecast.forecastday[0].hour[4].wind_kph}km/h`;
              fourAMRainChance.classList.replace("opacity-0", "opacity-100");
              fourAMRainChance.textContent = `${data.forecast.forecastday[0].hour[4].chance_of_rain}%`;
            }, 300);
          }
        });
        fahrenheitButton.addEventListener("click", function () {
          fahrenheitClicked = true;
          if (fahrenheitButton) {
            currentTemperature.classList.replace("opacity-100", "opacity-0");
            location.classList.replace("opacity-100", "opacity-0");
            locationDate.classList.replace("opacity-100", "opacity-0");
            currentFeelsLike.classList.replace("opacity-100", "opacity-0");
            currentCondition.classList.replace("opacity-100", "opacity-0");
            conditionImg.classList.replace("opacity-100", "opacity-0");
            conditionImgYesterday.classList.replace("opacity-100", "opacity-0");
            conditionImgTommorow.classList.replace("opacity-100", "opacity-0");
            conditionImgAfterTommorow.classList.replace("opacity-100", "opacity-0");
            conditionImgAfter2Tommorow.classList.replace("opacity-100", "opacity-0");
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
            sixAMTemp.classList.replace("opacity-100", "opacity-0");
            sixAMHumidity.classList.replace("opacity-100", "opacity-0");
            sixAMWindSpeed.classList.replace("opacity-100", "opacity-0");
            sixAMRainChance.classList.replace("opacity-100", "opacity-0");
            eightAMTemp.classList.replace("opacity-100", "opacity-0");
            eightAMHumidity.classList.replace("opacity-100", "opacity-0");
            eightAMWindSpeed.classList.replace("opacity-100", "opacity-0");
            eightAMRainChance.classList.replace("opacity-100", "opacity-0");
            tenAMTemp.classList.replace("opacity-100", "opacity-0");
            tenAMHumidity.classList.replace("opacity-100", "opacity-0");
            tenAMWindSpeed.classList.replace("opacity-100", "opacity-0");
            tenAMRainChance.classList.replace("opacity-100", "opacity-0");
            twelvePMTemp.classList.replace("opacity-100", "opacity-0");
            twelvePMHumidity.classList.replace("opacity-100", "opacity-0");
            twelvePMWindSpeed.classList.replace("opacity-100", "opacity-0");
            twelvePMRainChance.classList.replace("opacity-100", "opacity-0");
            twoPMTemp.classList.replace("opacity-100", "opacity-0");
            twoPMHumidity.classList.replace("opacity-100", "opacity-0");
            twoPMWindSpeed.classList.replace("opacity-100", "opacity-0");
            twoPMRainChance.classList.replace("opacity-100", "opacity-0");
            fourPMTemp.classList.replace("opacity-100", "opacity-0");
            fourPMHumidity.classList.replace("opacity-100", "opacity-0");
            fourPMWindSpeed.classList.replace("opacity-100", "opacity-0");
            fourPMRainChance.classList.replace("opacity-100", "opacity-0");
            sixPMTemp.classList.replace("opacity-100", "opacity-0");
            sixPMHumidity.classList.replace("opacity-100", "opacity-0");
            sixPMWindSpeed.classList.replace("opacity-100", "opacity-0");
            sixPMRainChance.classList.replace("opacity-100", "opacity-0");
            eightPMTemp.classList.replace("opacity-100", "opacity-0");
            eightPMHumidity.classList.replace("opacity-100", "opacity-0");
            eightPMWindSpeed.classList.replace("opacity-100", "opacity-0");
            eightPMRainChance.classList.replace("opacity-100", "opacity-0");
            tenPMTemp.classList.replace("opacity-100", "opacity-0");
            tenPMHumidity.classList.replace("opacity-100", "opacity-0");
            tenPMWindSpeed.classList.replace("opacity-100", "opacity-0");
            tenPMRainChance.classList.replace("opacity-100", "opacity-0");
            twelveAMTemp.classList.replace("opacity-100", "opacity-0");
            twelveAMHumidity.classList.replace("opacity-100", "opacity-0");
            twelveAmWindSpeed.classList.replace("opacity-100", "opacity-0");
            twelveAMRainChance.classList.replace("opacity-100", "opacity-0");
            twoAMTemp.classList.replace("opacity-100", "opacity-0");
            twoAMHumidity.classList.replace("opacity-100", "opacity-0");
            twoAMWindSpeed.classList.replace("opacity-100", "opacity-0");
            twoAMRainChance.classList.replace("opacity-100", "opacity-0");
            fourAMTemp.classList.replace("opacity-100", "opacity-0");
            fourAMHumidity.classList.replace("opacity-100", "opacity-0");
            fourAMWindSpeed.classList.replace("opacity-100", "opacity-0");
            fourAMRainChance.classList.replace("opacity-100", "opacity-0");

            this.classList.remove("bg-slate-800");
            this.classList.remove("border-black");
            this.classList.add("border-white");
            this.classList.add("bg-slate-500");

            celsiusButton.classList.add("bg-slate-800");
            celsiusButton.classList.add("border-black");
            celsiusButton.classList.remove("border-white");
            celsiusButton.classList.remove("bg-slate-500");

            setTimeout(() => {
              conditionImg.classList.replace("opacity-0", "opacity-100");
              conditionImgYesterday.classList.replace("opacity-0", "opacity-100");
              conditionImgTommorow.classList.replace("opacity-0", "opacity-100");
              conditionImgAfterTommorow.classList.replace("opacity-0", "opacity-100");
              conditionImgAfter2Tommorow.classList.replace("opacity-0", "opacity-100");

              location.classList.replace("opacity-0", "opacity-100");
              location.textContent = `${data.location.country} ${data.location.region}`;

              locationDate.classList.replace("opacity-0", "opacity-100");
              locationDate.textContent = `${formatDate(data.location.localtime)}`;

              currentCondition.classList.replace("opacity-0", "opacity-100");
              currentCondition.textContent = currentData.condition.text;

              currentTemperature.classList.replace("opacity-0", "opacity-100");
              currentTemperature.textContent = `${currentData.temp_f}°F`;
              currentFeelsLike.classList.replace("opacity-0", "opacity-100");
              currentFeelsLike.textContent = `${currentData.feelslike_f}°F`;

              currentFeelsLikeIcon.classList.replace("opacity-0", "opacity-100");

              currentTemperatureIcon.classList.replace("opacity-0", "opacity-100");

              humidityDiv.classList.replace("opacity-0", "opacity-100");
              humidity.textContent = `${currentData.humidity}%`;

              windSpeedDiv.classList.replace("opacity-0", "opacity-100");
              currentWindSpeed.textContent = `${currentData.wind_mph}mph/h`;

              gustDiv.classList.replace("opacity-0", "opacity-100");
              gust.textContent = `${currentData.gust_mph}mph/h`;
              maxTempDiv.classList.replace("opacity-0", "opacity-100");
              currentMaxTemp.textContent = `${data.forecast.forecastday[0].day.maxtemp_f}°F`;

              minTempDiv.classList.replace("opacity-0", "opacity-100");
              currentMinTemp.textContent = `${data.forecast.forecastday[0].day.mintemp_f}°F`;

              rainPercentDiv.classList.replace("opacity-0", "opacity-100");
              currentRainPercent.textContent = `${data.forecast.forecastday[0].day.daily_chance_of_rain}%`;

              tommorowDay.classList.replace("opacity-0", "opacity-100");

              tommorowMaxTemp.classList.replace("opacity-0", "opacity-100");
              tommorowMaxTemp.textContent = `${data.forecast.forecastday[1].day.maxtemp_f}°F`;

              tommorowMinTemp.classList.replace("opacity-0", "opacity-100");
              tommorowMinTemp.textContent = `${data.forecast.forecastday[1].day.mintemp_f}°F`;
              tommorowWindSpeed.classList.replace("opacity-0", "opacity-100");
              tommorowWindSpeed.textContent = `${data.forecast.forecastday[1].day.maxwind_mph}mp/h`;

              tommorowRainChance.classList.replace("opacity-0", "opacity-100");
              tommorowRainChance.textContent = `${data.forecast.forecastday[1].day.daily_chance_of_rain}%`;

              afterTommorowDay.classList.replace("opacity-0", "opacity-100");
              afterTommorowDay.textContent = `${forecastDays[2]}`;
              afterTommorowMaxTemp.classList.replace("opacity-0", "opacity-100");
              afterTommorowMaxTemp.textContent = `${data.forecast.forecastday[2].day.maxtemp_f}°F`;

              afterTommorowMinTemp.classList.replace("opacity-0", "opacity-100");
              afterTommorowMinTemp.textContent = `${data.forecast.forecastday[2].day.mintemp_f}°F`;

              afterTommorowWindSpeed.classList.replace("opacity-0", "opacity-100");
              afterTommorowWindSpeed.textContent = `${data.forecast.forecastday[2].day.maxwind_mph}mp/h`;
              afterTommorowRainChance.classList.replace("opacity-0", "opacity-100");
              afterTommorowRainChance.textContent = `${data.forecast.forecastday[2].day.daily_chance_of_rain}%`;

              after2TommorowDay.classList.replace("opacity-0", "opacity-100");
              after2TommorowDay.textContent = `${forecastDays[3]}`;
              after2TommorowMaxTemp.textContent = `${data.forecast.forecastday[3].day.maxtemp_f}°F`;
              after2TommorowMaxTemp.classList.replace("opacity-0", "opacity-100");
              after2TommorowMinTemp.classList.replace("opacity-0", "opacity-100");
              after2TommorowMinTemp.textContent = `${data.forecast.forecastday[3].day.mintemp_f}°F`;
              after2TommorowWindSpeed.classList.replace("opacity-0", "opacity-100");
              after2TommorowWindSpeed.textContent = `${data.forecast.forecastday[3].day.maxwind_mph}mp/h`;
              after2TommorowRainChance.classList.replace("opacity-0", "opacity-100");
              after2TommorowRainChance.textContent = `${data.forecast.forecastday[3].day.daily_chance_of_rain}%`;

              yesterdayDay.classList.replace("opacity-0", "opacity-100");
              yesterdayMaxTemp.classList.replace("opacity-0", "opacity-100");
              yesterdayMaxTemp.textContent = `${historyData.forecast.forecastday[0].day.maxtemp_f}°F`;
              yesterdayMinTemp.classList.replace("opacity-0", "opacity-100");
              yesterdayMinTemp.textContent = `${historyData.forecast.forecastday[0].day.mintemp_f}°F`;
              yesterdayWindSpeed.classList.replace("opacity-0", "opacity-100");
              yesterdayWindSpeed.textContent = `${historyData.forecast.forecastday[0].day.maxwind_mph}mp/h`;
              yesterdayRainChance.classList.replace("opacity-0", "opacity-100");
              yesterdayRainChance.textContent = `${historyData.forecast.forecastday[0].day.daily_chance_of_rain}%`;

              sixAMHour.classList.replace("opacity-0", "opacity-100");
              sixAMTemp.classList.replace("opacity-0", "opacity-100");
              sixAMTemp.textContent = `${data.forecast.forecastday[0].hour[6].temp_f}°F`;
              sixAMHumidity.classList.replace("opacity-0", "opacity-100");
              sixAMHumidity.textContent = `${data.forecast.forecastday[0].hour[6].humidity}%`;
              sixAMWindSpeed.classList.replace("opacity-0", "opacity-100");
              sixAMWindSpeed.textContent = `${data.forecast.forecastday[0].hour[6].wind_mph}mp/h`;
              sixAMRainChance.classList.replace("opacity-0", "opacity-100");
              sixAMRainChance.textContent = `${data.forecast.forecastday[0].hour[6].chance_of_rain}%`;

              eightAMHour.classList.replace("opacity-0", "opacity-100");
              eightAMTemp.classList.replace("opacity-0", "opacity-100");
              eightAMTemp.textContent = `${data.forecast.forecastday[0].hour[8].temp_f}°F`;
              eightAMHumidity.classList.replace("opacity-0", "opacity-100");
              eightAMHumidity.textContent = `${data.forecast.forecastday[0].hour[8].humidity}%`;
              eightAMWindSpeed.classList.replace("opacity-0", "opacity-100");
              eightAMWindSpeed.textContent = `${data.forecast.forecastday[0].hour[8].wind_mph}mp/h`;
              eightAMRainChance.classList.replace("opacity-0", "opacity-100");
              eightAMRainChance.textContent = `${data.forecast.forecastday[0].hour[8].chance_of_rain}%`;

              tenAMHour.classList.replace("opacity-0", "opacity-100");
              tenAMTemp.classList.replace("opacity-0", "opacity-100");
              tenAMTemp.textContent = `${data.forecast.forecastday[0].hour[10].temp_f}°F`;
              tenAMHumidity.classList.replace("opacity-0", "opacity-100");
              tenAMHumidity.textContent = `${data.forecast.forecastday[0].hour[10].humidity}%`;
              tenAMWindSpeed.classList.replace("opacity-0", "opacity-100");
              tenAMWindSpeed.textContent = `${data.forecast.forecastday[0].hour[10].wind_mph}mp/h`;
              tenAMRainChance.classList.replace("opacity-0", "opacity-100");
              tenAMRainChance.textContent = `${data.forecast.forecastday[0].hour[10].chance_of_rain}%`;

              twelvePMHour.classList.replace("opacity-0", "opacity-100");
              twelvePMTemp.classList.replace("opacity-0", "opacity-100");
              twelvePMTemp.textContent = `${data.forecast.forecastday[0].hour[12].temp_f}°F`;
              twelvePMHumidity.classList.replace("opacity-0", "opacity-100");
              twelvePMHumidity.textContent = `${data.forecast.forecastday[0].hour[12].humidity}%`;
              twelvePMWindSpeed.classList.replace("opacity-0", "opacity-100");
              twelvePMWindSpeed.textContent = `${data.forecast.forecastday[0].hour[12].wind_mph}mp/h`;
              twelvePMRainChance.classList.replace("opacity-0", "opacity-100");
              twelvePMRainChance.textContent = `${data.forecast.forecastday[0].hour[12].chance_of_rain}%`;

              twoPMHour.classList.replace("opacity-0", "opacity-100");
              twoPMTemp.classList.replace("opacity-0", "opacity-100");
              twoPMTemp.textContent = `${data.forecast.forecastday[0].hour[14].temp_f}°F`;
              twoPMHumidity.classList.replace("opacity-0", "opacity-100");
              twoPMHumidity.textContent = `${data.forecast.forecastday[0].hour[14].humidity}%`;
              twoPMWindSpeed.classList.replace("opacity-0", "opacity-100");
              twoPMWindSpeed.textContent = `${data.forecast.forecastday[0].hour[14].wind_mph}mp/h`;
              twoPMRainChance.classList.replace("opacity-0", "opacity-100");
              twoPMRainChance.textContent = `${data.forecast.forecastday[0].hour[14].chance_of_rain}%`;

              fourPMHour.classList.replace("opacity-0", "opacity-100");
              fourPMTemp.classList.replace("opacity-0", "opacity-100");
              fourPMTemp.textContent = `${data.forecast.forecastday[0].hour[16].temp_f}°F`;
              fourPMHumidity.classList.replace("opacity-0", "opacity-100");
              fourPMHumidity.textContent = `${data.forecast.forecastday[0].hour[16].humidity}%`;
              fourPMWindSpeed.classList.replace("opacity-0", "opacity-100");
              fourPMWindSpeed.textContent = `${data.forecast.forecastday[0].hour[16].wind_mph}mp/h`;
              fourPMRainChance.classList.replace("opacity-0", "opacity-100");
              fourPMRainChance.textContent = `${data.forecast.forecastday[0].hour[16].chance_of_rain}%`;

              sixPMHour.classList.replace("opacity-0", "opacity-100");
              sixPMTemp.classList.replace("opacity-0", "opacity-100");
              sixPMTemp.textContent = `${data.forecast.forecastday[0].hour[18].temp_f}°F`;
              sixPMHumidity.classList.replace("opacity-0", "opacity-100");
              sixPMHumidity.textContent = `${data.forecast.forecastday[0].hour[18].humidity}%`;
              sixPMWindSpeed.classList.replace("opacity-0", "opacity-100");
              sixPMWindSpeed.textContent = `${data.forecast.forecastday[0].hour[18].wind_mph}mp/h`;
              sixPMRainChance.classList.replace("opacity-0", "opacity-100");
              sixPMRainChance.textContent = `${data.forecast.forecastday[0].hour[18].chance_of_rain}%`;

              eightPMHour.classList.replace("opacity-0", "opacity-100");
              eightPMTemp.classList.replace("opacity-0", "opacity-100");
              eightPMTemp.textContent = `${data.forecast.forecastday[0].hour[20].temp_f}°F`;
              eightPMHumidity.classList.replace("opacity-0", "opacity-100");
              eightPMHumidity.textContent = `${data.forecast.forecastday[0].hour[20].humidity}%`;
              eightPMWindSpeed.classList.replace("opacity-0", "opacity-100");
              eightPMWindSpeed.textContent = `${data.forecast.forecastday[0].hour[20].wind_mph}mp/h`;
              eightPMRainChance.classList.replace("opacity-0", "opacity-100");
              eightPMRainChance.textContent = `${data.forecast.forecastday[0].hour[20].chance_of_rain}%`;

              tenPMHour.classList.replace("opacity-0", "opacity-100");
              tenPMTemp.classList.replace("opacity-0", "opacity-100");
              tenPMTemp.textContent = `${data.forecast.forecastday[0].hour[22].temp_f}°F`;
              tenPMHumidity.classList.replace("opacity-0", "opacity-100");
              tenPMHumidity.textContent = `${data.forecast.forecastday[0].hour[22].humidity}%`;
              tenPMWindSpeed.classList.replace("opacity-0", "opacity-100");
              tenPMWindSpeed.textContent = `${data.forecast.forecastday[0].hour[22].wind_mph}mp/h`;
              tenPMRainChance.classList.replace("opacity-0", "opacity-100");
              tenPMRainChance.textContent = `${data.forecast.forecastday[0].hour[22].chance_of_rain}%`;

              twelveAMHour.classList.replace("opacity-0", "opacity-100");
              twelveAMTemp.classList.replace("opacity-0", "opacity-100");
              twelveAMTemp.textContent = `${data.forecast.forecastday[0].hour[0].temp_f}°F`;
              twelveAMHumidity.classList.replace("opacity-0", "opacity-100");
              twelveAMHumidity.textContent = `${data.forecast.forecastday[0].hour[0].humidity}%`;
              twelveAmWindSpeed.classList.replace("opacity-0", "opacity-100");
              twelveAmWindSpeed.textContent = `${data.forecast.forecastday[0].hour[0].wind_mph}mp/h`;
              twelveAMRainChance.classList.replace("opacity-0", "opacity-100");
              twelveAMRainChance.textContent = `${data.forecast.forecastday[0].hour[0].chance_of_rain}%`;

              twoAMHour.classList.replace("opacity-0", "opacity-100");
              twoAMTemp.classList.replace("opacity-0", "opacity-100");
              twoAMTemp.textContent = `${data.forecast.forecastday[0].hour[2].temp_f}°F`;
              twoAMHumidity.classList.replace("opacity-0", "opacity-100");
              twoAMHumidity.textContent = `${data.forecast.forecastday[0].hour[2].humidity}%`;
              twoAMWindSpeed.classList.replace("opacity-0", "opacity-100");
              twoAMWindSpeed.textContent = `${data.forecast.forecastday[0].hour[2].wind_mph}mp/h`;
              twoAMRainChance.classList.replace("opacity-0", "opacity-100");
              twoAMRainChance.textContent = `${data.forecast.forecastday[0].hour[2].chance_of_rain}%`;

              fourAMHour.classList.replace("opacity-0", "opacity-100");
              fourAMTemp.classList.replace("opacity-0", "opacity-100");
              fourAMTemp.textContent = `${data.forecast.forecastday[0].hour[4].temp_f}°F`;
              fourAMHumidity.classList.replace("opacity-0", "opacity-100");
              fourAMHumidity.textContent = `${data.forecast.forecastday[0].hour[4].humidity}%`;
              fourAMWindSpeed.classList.replace("opacity-0", "opacity-100");
              fourAMWindSpeed.textContent = `${data.forecast.forecastday[0].hour[4].wind_mph}mp/h`;
              fourAMRainChance.classList.replace("opacity-0", "opacity-100");
              fourAMRainChance.textContent = `${data.forecast.forecastday[0].hour[4].chance_of_rain}%`;
            }, 300);
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

        if (
          historyData.forecast.forecastday[0].day.condition.code === 1000 &&
          historyData.forecast.forecastday[0].day.condition.text.trim() === "Clear"
        ) {
          conditionImgYesterday.src = clear;
          setTimeout(() => {
            conditionImgYesterday.classList.replace("opacity-0", "opacity-100");
            yesterdayDiv.insertBefore(conditionImgYesterday, yesterdayDay);
          }, 300);
        } else if (
          historyData.forecast.forecastday[0].day.condition.code === 1000 &&
          historyData.forecast.forecastday[0].day.condition.text.trim() === "Sunny"
        ) {
          conditionImgYesterday.src = sunny;
          setTimeout(() => {
            conditionImgYesterday.classList.replace("opacity-0", "opacity-100");

            yesterdayDiv.insertBefore(conditionImgYesterday, yesterdayDay);
          }, 300);
        } else if (historyData.forecast.forecastday[0].day.condition.code === 1003) {
          conditionImgYesterday.src = partlyCloudy;
          setTimeout(() => {
            conditionImgYesterday.classList.replace("opacity-0", "opacity-100");

            yesterdayDiv.insertBefore(conditionImgYesterday, yesterdayDay);
          }, 300);
        } else if (historyData.forecast.forecastday[0].day.condition.code === 1006) {
          conditionImgYesterday.src = cloudy;
          setTimeout(() => {
            conditionImgYesterday.classList.replace("opacity-0", "opacity-100");

            yesterdayDiv.insertBefore(conditionImgYesterday, yesterdayDay);
          }, 300);
        } else if (historyData.forecast.forecastday[0].day.condition.code === 1009) {
          conditionImgYesterday.src = overcast;
          setTimeout(() => {
            conditionImgYesterday.classList.replace("opacity-0", "opacity-100");

            yesterdayDiv.insertBefore(conditionImgYesterday, yesterdayDay);
          }, 300);
        } else if (historyData.forecast.forecastday[0].day.condition.code === 1030) {
          conditionImgYesterday.src = mist;
          setTimeout(() => {
            conditionImgYesterday.classList.replace("opacity-0", "opacity-100");

            yesterdayDiv.insertBefore(conditionImgYesterday, yesterdayDay);
          }, 300);
        } else if (
          historyData.forecast.forecastday[0].day.condition.code === 1053 ||
          historyData.forecast.forecastday[0].day.condition.code === 1183 ||
          historyData.forecast.forecastday[0].day.condition.code === 1089 ||
          historyData.forecast.forecastday[0].day.condition.code === 1240 ||
          historyData.forecast.forecastday[0].day.condition.code === 1249 ||
          historyData.forecast.forecastday[0].day.condition.code === 1153
        ) {
          conditionImgYesterday.src = lightRain;
          setTimeout(() => {
            conditionImgYesterday.classList.replace("opacity-0", "opacity-100");

            yesterdayDiv.insertBefore(conditionImgYesterday, yesterdayDay);
          }, 300);
        } else if (
          historyData.forecast.forecastday[0].day.condition.code === 1066 ||
          historyData.forecast.forecastday[0].day.condition.code === 1072 ||
          historyData.forecast.forecastday[0].day.condition.code === 1210 ||
          historyData.forecast.forecastday[0].day.condition.code === 1216
        ) {
          conditionImgYesterday.src = possibleSnow;
          setTimeout(() => {
            conditionImgYesterday.classList.replace("opacity-0", "opacity-100");

            yesterdayDiv.insertBefore(conditionImgYesterday, yesterdayDay);
          }, 300);
        } else if (
          historyData.forecast.forecastday[0].day.condition.code === 1063 ||
          historyData.forecast.forecastday[0].day.condition.code === 1150 ||
          historyData.forecast.forecastday[0].day.condition.code === 1180 ||
          historyData.forecast.forecastday[0].day.condition.code === 1186
        ) {
          conditionImgYesterday.src = possibleRain;
          setTimeout(() => {
            conditionImgYesterday.classList.replace("opacity-0", "opacity-100");

            yesterdayDiv.insertBefore(conditionImgYesterday, yesterdayDay);
          }, 300);
        } else if (
          historyData.forecast.forecastday[0].day.condition.code === 1069 ||
          historyData.forecast.forecastday[0].day.condition.code === 1204
        ) {
          conditionImgYesterday.src = possibleSleet;
          setTimeout(() => {
            conditionImgYesterday.classList.replace("opacity-0", "opacity-100");

            yesterdayDiv.insertBefore(conditionImgYesterday, yesterdayDay);
          }, 300);
        } else if (
          historyData.forecast.forecastday[0].day.condition.code === 1087 ||
          historyData.forecast.forecastday[0].day.condition.code === 1117 ||
          historyData.forecast.forecastday[0].day.condition.code === 1273 ||
          historyData.forecast.forecastday[0].day.condition.code === 1276 ||
          historyData.forecast.forecastday[0].day.condition.code === 1279 ||
          historyData.forecast.forecastday[0].day.condition.code === 1282
        ) {
          conditionImgYesterday.src = blizzard;
          setTimeout(() => {
            conditionImgYesterday.classList.replace("opacity-0", "opacity-100");

            yesterdayDiv.insertBefore(conditionImgYesterday, yesterdayDay);
          }, 300);
        } else if (
          historyData.forecast.forecastday[0].day.condition.code === 1246 ||
          historyData.forecast.forecastday[0].day.condition.code === 1171 ||
          historyData.forecast.forecastday[0].day.condition.code === 1189 ||
          historyData.forecast.forecastday[0].day.condition.code === 1192 ||
          historyData.forecast.forecastday[0].day.condition.code === 1195 ||
          historyData.forecast.forecastday[0].day.condition.code === 1201 ||
          historyData.forecast.forecastday[0].day.condition.code === 1207 ||
          historyData.forecast.forecastday[0].day.condition.code === 1243 ||
          historyData.forecast.forecastday[0].day.condition.code === 1252
        ) {
          conditionImgYesterday.src = heavyRain;
          setTimeout(() => {
            conditionImgYesterday.classList.replace("opacity-0", "opacity-100");

            yesterdayDiv.insertBefore(conditionImgYesterday, yesterdayDay);
          }, 300);
        } else if (
          historyData.forecast.forecastday[0].day.condition.code === 1135 ||
          historyData.forecast.forecastday[0].day.condition.code === 1147
        ) {
          conditionImgYesterday.src = fog;
          setTimeout(() => {
            conditionImgYesterday.classList.replace("opacity-0", "opacity-100");

            yesterdayDiv.insertBefore(conditionImgYesterday, yesterdayDay);
          }, 300);
        } else if (
          historyData.forecast.forecastday[0].day.condition.code === 1168 ||
          historyData.forecast.forecastday[0].day.condition.code === 1198 ||
          historyData.forecast.forecastday[0].day.condition.code === 1213 ||
          historyData.forecast.forecastday[0].day.condition.code === 1255
        ) {
          conditionImgYesterday.src = lightSnow;
          setTimeout(() => {
            conditionImgYesterday.classList.replace("opacity-0", "opacity-100");

            yesterdayDiv.insertBefore(conditionImgYesterday, yesterdayDay);
          }, 300);
        } else if (
          historyData.forecast.forecastday[0].day.condition.code === 1114 ||
          historyData.forecast.forecastday[0].day.condition.code === 1219 ||
          historyData.forecast.forecastday[0].day.condition.code === 1222 ||
          historyData.forecast.forecastday[0].day.condition.code === 1225 ||
          historyData.forecast.forecastday[0].day.condition.code === 1237 ||
          historyData.forecast.forecastday[0].day.condition.code === 1258 ||
          historyData.forecast.forecastday[0].day.condition.code === 1261 ||
          historyData.forecast.forecastday[0].day.condition.code === 1264
        ) {
          conditionImgYesterday.src = heavySnow;
          setTimeout(() => {
            conditionImgYesterday.classList.replace("opacity-0", "opacity-100");

            yesterdayDiv.insertBefore(conditionImgYesterday, yesterdayDay);
          }, 300);
        }

        if (
          data.forecast.forecastday[1].day.condition.code === 1000 &&
          data.forecast.forecastday[1].day.condition.text.trim() === "Clear"
        ) {
          conditionImgTommorow.src = clear;
          setTimeout(() => {
            conditionImgTommorow.classList.replace("opacity-0", "opacity-100");
            tommorowDiv.insertBefore(conditionImgTommorow, tommorowDay);
          }, 300);
        } else if (
          data.forecast.forecastday[1].day.condition.code === 1000 &&
          data.forecast.forecastday[1].day.condition.text.trim() === "Sunny"
        ) {
          conditionImgTommorow.src = sunny;
          setTimeout(() => {
            conditionImgTommorow.classList.replace("opacity-0", "opacity-100");

            tommorowDiv.insertBefore(conditionImgTommorow, tommorowDay);
          }, 300);
        } else if (data.forecast.forecastday[1].day.condition.code === 1003) {
          conditionImgTommorow.src = partlyCloudy;
          setTimeout(() => {
            conditionImgTommorow.classList.replace("opacity-0", "opacity-100");

            tommorowDiv.insertBefore(conditionImgTommorow, tommorowDay);
          }, 300);
        } else if (data.forecast.forecastday[1].day.condition.code === 1006) {
          conditionImgTommorow.src = cloudy;
          setTimeout(() => {
            conditionImgTommorow.classList.replace("opacity-0", "opacity-100");

            tommorowDiv.insertBefore(conditionImgTommorow, tommorowDay);
          }, 300);
        } else if (data.forecast.forecastday[1].day.condition.code === 1009) {
          conditionImgTommorow.src = overcast;
          setTimeout(() => {
            conditionImgTommorow.classList.replace("opacity-0", "opacity-100");

            tommorowDiv.insertBefore(conditionImgTommorow, tommorowDay);
          }, 300);
        } else if (data.forecast.forecastday[1].day.condition.code === 1030) {
          conditionImgTommorow.src = mist;
          setTimeout(() => {
            conditionImgTommorow.classList.replace("opacity-0", "opacity-100");

            tommorowDiv.insertBefore(conditionImgTommorow, tommorowDay);
          }, 300);
        } else if (
          data.forecast.forecastday[1].day.condition.code === 1053 ||
          data.forecast.forecastday[1].day.condition.code === 1183 ||
          data.forecast.forecastday[1].day.condition.code === 1089 ||
          data.forecast.forecastday[1].day.condition.code === 1240 ||
          data.forecast.forecastday[1].day.condition.code === 1249 ||
          data.forecast.forecastday[1].day.condition.code === 1153
        ) {
          conditionImgTommorow.src = lightRain;
          setTimeout(() => {
            conditionImgTommorow.classList.replace("opacity-0", "opacity-100");

            tommorowDiv.insertBefore(conditionImgTommorow, tommorowDay);
          }, 300);
        } else if (
          data.forecast.forecastday[1].day.condition.code === 1066 ||
          data.forecast.forecastday[1].day.condition.code === 1072 ||
          data.forecast.forecastday[1].day.condition.code === 1210 ||
          data.forecast.forecastday[1].day.condition.code === 1216
        ) {
          conditionImgTommorow.src = possibleSnow;
          setTimeout(() => {
            conditionImgTommorow.classList.replace("opacity-0", "opacity-100");

            tommorowDiv.insertBefore(conditionImgTommorow, tommorowDay);
          }, 300);
        } else if (
          data.forecast.forecastday[1].day.condition.code === 1063 ||
          data.forecast.forecastday[1].day.condition.code === 1150 ||
          data.forecast.forecastday[1].day.condition.code === 1180 ||
          data.forecast.forecastday[1].day.condition.code === 1186
        ) {
          conditionImgTommorow.src = possibleRain;
          setTimeout(() => {
            conditionImgTommorow.classList.replace("opacity-0", "opacity-100");

            tommorowDiv.insertBefore(conditionImgTommorow, tommorowDay);
          }, 300);
        } else if (
          data.forecast.forecastday[1].day.condition.code === 1069 ||
          data.forecast.forecastday[1].day.condition.code === 1204
        ) {
          conditionImgTommorow.src = possibleSleet;
          setTimeout(() => {
            conditionImgTommorow.classList.replace("opacity-0", "opacity-100");

            tommorowDiv.insertBefore(conditionImgTommorow, tommorowDay);
          }, 300);
        } else if (
          data.forecast.forecastday[1].day.condition.code === 1087 ||
          data.forecast.forecastday[1].day.condition.code === 1117 ||
          data.forecast.forecastday[1].day.condition.code === 1273 ||
          data.forecast.forecastday[1].day.condition.code === 1276 ||
          data.forecast.forecastday[1].day.condition.code === 1279 ||
          data.forecast.forecastday[1].day.condition.code === 1282
        ) {
          conditionImgTommorow.src = blizzard;
          setTimeout(() => {
            conditionImgTommorow.classList.replace("opacity-0", "opacity-100");

            tommorowDiv.insertBefore(conditionImgTommorow, tommorowDay);
          }, 300);
        } else if (
          data.forecast.forecastday[1].day.condition.code === 1246 ||
          data.forecast.forecastday[1].day.condition.code === 1171 ||
          data.forecast.forecastday[1].day.condition.code === 1189 ||
          data.forecast.forecastday[1].day.condition.code === 1192 ||
          data.forecast.forecastday[1].day.condition.code === 1195 ||
          data.forecast.forecastday[1].day.condition.code === 1201 ||
          data.forecast.forecastday[1].day.condition.code === 1207 ||
          data.forecast.forecastday[1].day.condition.code === 1243 ||
          data.forecast.forecastday[1].day.condition.code === 1252
        ) {
          conditionImgTommorow.src = heavyRain;
          setTimeout(() => {
            conditionImgTommorow.classList.replace("opacity-0", "opacity-100");

            tommorowDiv.insertBefore(conditionImgTommorow, tommorowDay);
          }, 300);
        } else if (
          data.forecast.forecastday[1].day.condition.code === 1135 ||
          data.forecast.forecastday[1].day.condition.code === 1147
        ) {
          conditionImgTommorow.src = fog;
          setTimeout(() => {
            conditionImgTommorow.classList.replace("opacity-0", "opacity-100");

            tommorowDiv.insertBefore(conditionImgTommorow, tommorowDay);
          }, 300);
        } else if (
          data.forecast.forecastday[1].day.condition.code === 1168 ||
          data.forecast.forecastday[1].day.condition.code === 1198 ||
          data.forecast.forecastday[1].day.condition.code === 1213 ||
          data.forecast.forecastday[1].day.condition.code === 1255
        ) {
          conditionImgTommorow.src = lightSnow;
          setTimeout(() => {
            conditionImgTommorow.classList.replace("opacity-0", "opacity-100");

            tommorowDiv.insertBefore(conditionImgTommorow, tommorowDay);
          }, 300);
        } else if (
          data.forecast.forecastday[1].day.condition.code === 1114 ||
          data.forecast.forecastday[1].day.condition.code === 1219 ||
          data.forecast.forecastday[1].day.condition.code === 1222 ||
          data.forecast.forecastday[1].day.condition.code === 1225 ||
          data.forecast.forecastday[1].day.condition.code === 1237 ||
          data.forecast.forecastday[1].day.condition.code === 1258 ||
          data.forecast.forecastday[1].day.condition.code === 1261 ||
          data.forecast.forecastday[1].day.condition.code === 1264
        ) {
          conditionImgTommorow.src = heavySnow;
          setTimeout(() => {
            conditionImgTommorow.classList.replace("opacity-0", "opacity-100");

            tommorowDiv.insertBefore(conditionImgTommorow, tommorowDay);
          }, 300);
        }

        if (
          data.forecast.forecastday[2].day.condition.code === 1000 &&
          data.forecast.forecastday[2].day.condition.text.trim() === "Clear"
        ) {
          conditionImgAfterTommorow.src = clear;
          setTimeout(() => {
            conditionImgAfterTommorow.classList.replace("opacity-0", "opacity-100");
            afterTommorowDiv.insertBefore(conditionImgAfterTommorow, afterTommorowDay);
          }, 300);
        } else if (
          data.forecast.forecastday[2].day.condition.code === 1000 &&
          data.forecast.forecastday[2].day.condition.text.trim() === "Sunny"
        ) {
          conditionImgAfterTommorow.src = sunny;
          setTimeout(() => {
            conditionImgAfterTommorow.classList.replace("opacity-0", "opacity-100");

            afterTommorowDiv.insertBefore(conditionImgAfterTommorow, afterTommorowDay);
          }, 300);
        } else if (data.forecast.forecastday[2].day.condition.code === 1003) {
          conditionImgAfterTommorow.src = partlyCloudy;
          setTimeout(() => {
            conditionImgAfterTommorow.classList.replace("opacity-0", "opacity-100");

            afterTommorowDiv.insertBefore(conditionImgAfterTommorow, afterTommorowDay);
          }, 300);
        } else if (data.forecast.forecastday[2].day.condition.code === 1006) {
          conditionImgAfterTommorow.src = cloudy;
          setTimeout(() => {
            conditionImgAfterTommorow.classList.replace("opacity-0", "opacity-100");

            afterTommorowDiv.insertBefore(conditionImgAfterTommorow, afterTommorowDay);
          }, 300);
        } else if (data.forecast.forecastday[2].day.condition.code === 1009) {
          conditionImgAfterTommorow.src = overcast;
          setTimeout(() => {
            conditionImgAfterTommorow.classList.replace("opacity-0", "opacity-100");

            afterTommorowDiv.insertBefore(conditionImgAfterTommorow, afterTommorowDay);
          }, 300);
        } else if (data.forecast.forecastday[2].day.condition.code === 1030) {
          conditionImgAfterTommorow.src = mist;
          setTimeout(() => {
            conditionImgAfterTommorow.classList.replace("opacity-0", "opacity-100");

            afterTommorowDiv.insertBefore(conditionImgAfterTommorow, afterTommorowDay);
          }, 300);
        } else if (
          data.forecast.forecastday[2].day.condition.code === 1053 ||
          data.forecast.forecastday[2].day.condition.code === 1183 ||
          data.forecast.forecastday[2].day.condition.code === 1089 ||
          data.forecast.forecastday[2].day.condition.code === 1240 ||
          data.forecast.forecastday[2].day.condition.code === 1249 ||
          data.forecast.forecastday[2].day.condition.code === 1153
        ) {
          conditionImgAfterTommorow.src = lightRain;
          setTimeout(() => {
            conditionImgAfterTommorow.classList.replace("opacity-0", "opacity-100");

            afterTommorowDiv.insertBefore(conditionImgAfterTommorow, afterTommorowDay);
          }, 300);
        } else if (
          data.forecast.forecastday[2].day.condition.code === 1066 ||
          data.forecast.forecastday[2].day.condition.code === 1072 ||
          data.forecast.forecastday[2].day.condition.code === 1210 ||
          data.forecast.forecastday[2].day.condition.code === 1216
        ) {
          conditionImgAfterTommorow.src = possibleSnow;
          setTimeout(() => {
            conditionImgAfterTommorow.classList.replace("opacity-0", "opacity-100");

            afterTommorowDiv.insertBefore(conditionImgAfterTommorow, afterTommorowDay);
          }, 300);
        } else if (
          data.forecast.forecastday[2].day.condition.code === 1063 ||
          data.forecast.forecastday[2].day.condition.code === 1150 ||
          data.forecast.forecastday[2].day.condition.code === 1180 ||
          data.forecast.forecastday[2].day.condition.code === 1186
        ) {
          conditionImgAfterTommorow.src = possibleRain;
          setTimeout(() => {
            conditionImgAfterTommorow.classList.replace("opacity-0", "opacity-100");

            afterTommorowDiv.insertBefore(conditionImgAfterTommorow, afterTommorowDay);
          }, 300);
        } else if (
          data.forecast.forecastday[2].day.condition.code === 1069 ||
          data.forecast.forecastday[2].day.condition.code === 1204
        ) {
          conditionImgAfterTommorow.src = possibleSleet;
          setTimeout(() => {
            conditionImgAfterTommorow.classList.replace("opacity-0", "opacity-100");

            afterTommorowDiv.insertBefore(conditionImgAfterTommorow, afterTommorowDay);
          }, 300);
        } else if (
          data.forecast.forecastday[2].day.condition.code === 1087 ||
          data.forecast.forecastday[2].day.condition.code === 1117 ||
          data.forecast.forecastday[2].day.condition.code === 1273 ||
          data.forecast.forecastday[2].day.condition.code === 1276 ||
          data.forecast.forecastday[2].day.condition.code === 1279 ||
          data.forecast.forecastday[2].day.condition.code === 1282
        ) {
          conditionImgAfterTommorow.src = blizzard;
          setTimeout(() => {
            conditionImgAfterTommorow.classList.replace("opacity-0", "opacity-100");

            afterTommorowDiv.insertBefore(conditionImgAfterTommorow, afterTommorowDay);
          }, 300);
        } else if (
          data.forecast.forecastday[2].day.condition.code === 1246 ||
          data.forecast.forecastday[2].day.condition.code === 1171 ||
          data.forecast.forecastday[2].day.condition.code === 1189 ||
          data.forecast.forecastday[2].day.condition.code === 1192 ||
          data.forecast.forecastday[2].day.condition.code === 1195 ||
          data.forecast.forecastday[2].day.condition.code === 1201 ||
          data.forecast.forecastday[2].day.condition.code === 1207 ||
          data.forecast.forecastday[2].day.condition.code === 1243 ||
          data.forecast.forecastday[2].day.condition.code === 1252
        ) {
          conditionImgAfterTommorow.src = heavyRain;
          setTimeout(() => {
            conditionImgAfterTommorow.classList.replace("opacity-0", "opacity-100");

            afterTommorowDiv.insertBefore(conditionImgAfterTommorow, afterTommorowDay);
          }, 300);
        } else if (
          data.forecast.forecastday[2].day.condition.code === 1135 ||
          data.forecast.forecastday[2].day.condition.code === 1147
        ) {
          conditionImgAfterTommorow.src = fog;
          setTimeout(() => {
            conditionImgAfterTommorow.classList.replace("opacity-0", "opacity-100");

            afterTommorowDiv.insertBefore(conditionImgAfterTommorow, afterTommorowDay);
          }, 300);
        } else if (
          data.forecast.forecastday[2].day.condition.code === 1168 ||
          data.forecast.forecastday[2].day.condition.code === 1198 ||
          data.forecast.forecastday[2].day.condition.code === 1213 ||
          data.forecast.forecastday[2].day.condition.code === 1255
        ) {
          conditionImgAfterTommorow.src = lightSnow;
          setTimeout(() => {
            conditionImgAfterTommorow.classList.replace("opacity-0", "opacity-100");

            afterTommorowDiv.insertBefore(conditionImgAfterTommorow, afterTommorowDay);
          }, 300);
        } else if (
          data.forecast.forecastday[2].day.condition.code === 1114 ||
          data.forecast.forecastday[2].day.condition.code === 1219 ||
          data.forecast.forecastday[2].day.condition.code === 1222 ||
          data.forecast.forecastday[2].day.condition.code === 1225 ||
          data.forecast.forecastday[2].day.condition.code === 1237 ||
          data.forecast.forecastday[2].day.condition.code === 1258 ||
          data.forecast.forecastday[2].day.condition.code === 1261 ||
          data.forecast.forecastday[2].day.condition.code === 1264
        ) {
          conditionImgAfterTommorow.src = heavySnow;
          setTimeout(() => {
            conditionImgAfterTommorow.classList.replace("opacity-0", "opacity-100");

            afterTommorowDiv.insertBefore(conditionImgAfterTommorow, afterTommorowDay);
          }, 300);
        }
        if (
          data.forecast.forecastday[3].day.condition.code === 1000 &&
          data.forecast.forecastday[3].day.condition.text.trim() === "Clear"
        ) {
          conditionImgAfter2Tommorow.src = clear;
          setTimeout(() => {
            conditionImgAfter2Tommorow.classList.replace("opacity-0", "opacity-100");
            after2TommorowDiv.insertBefore(conditionImgAfter2Tommorow, after2TommorowDay);
          }, 300);
        } else if (
          data.forecast.forecastday[3].day.condition.code === 1000 &&
          data.forecast.forecastday[3].day.condition.text.trim() === "Sunny"
        ) {
          conditionImgAfter2Tommorow.src = sunny;
          setTimeout(() => {
            conditionImgAfter2Tommorow.classList.replace("opacity-0", "opacity-100");

            after2TommorowDiv.insertBefore(conditionImgAfter2Tommorow, after2TommorowDay);
          }, 300);
        } else if (data.forecast.forecastday[3].day.condition.code === 1003) {
          conditionImgAfter2Tommorow.src = partlyCloudy;
          setTimeout(() => {
            conditionImgAfter2Tommorow.classList.replace("opacity-0", "opacity-100");

            after2TommorowDiv.insertBefore(conditionImgAfter2Tommorow, after2TommorowDay);
          }, 300);
        } else if (data.forecast.forecastday[3].day.condition.code === 1006) {
          conditionImgAfter2Tommorow.src = cloudy;
          setTimeout(() => {
            conditionImgAfter2Tommorow.classList.replace("opacity-0", "opacity-100");

            after2TommorowDiv.insertBefore(conditionImgAfter2Tommorow, after2TommorowDay);
          }, 300);
        } else if (data.forecast.forecastday[3].day.condition.code === 1009) {
          conditionImgAfter2Tommorow.src = overcast;
          setTimeout(() => {
            conditionImgAfter2Tommorow.classList.replace("opacity-0", "opacity-100");

            after2TommorowDiv.insertBefore(conditionImgAfter2Tommorow, after2TommorowDay);
          }, 300);
        } else if (data.forecast.forecastday[3].day.condition.code === 1030) {
          conditionImgAfter2Tommorow.src = mist;
          setTimeout(() => {
            conditionImgAfter2Tommorow.classList.replace("opacity-0", "opacity-100");

            after2TommorowDiv.insertBefore(conditionImgAfter2Tommorow, after2TommorowDay);
          }, 300);
        } else if (
          data.forecast.forecastday[3].day.condition.code === 1053 ||
          data.forecast.forecastday[3].day.condition.code === 1183 ||
          data.forecast.forecastday[3].day.condition.code === 1089 ||
          data.forecast.forecastday[3].day.condition.code === 1240 ||
          data.forecast.forecastday[3].day.condition.code === 1249 ||
          data.forecast.forecastday[3].day.condition.code === 1153
        ) {
          conditionImgAfter2Tommorow.src = lightRain;
          setTimeout(() => {
            conditionImgAfter2Tommorow.classList.replace("opacity-0", "opacity-100");

            after2TommorowDiv.insertBefore(conditionImgAfter2Tommorow, after2TommorowDay);
          }, 300);
        } else if (
          data.forecast.forecastday[3].day.condition.code === 1066 ||
          data.forecast.forecastday[3].day.condition.code === 1072 ||
          data.forecast.forecastday[3].day.condition.code === 1210 ||
          data.forecast.forecastday[3].day.condition.code === 1216
        ) {
          conditionImgAfter2Tommorow.src = possibleSnow;
          setTimeout(() => {
            conditionImgAfter2Tommorow.classList.replace("opacity-0", "opacity-100");

            after2TommorowDiv.insertBefore(conditionImgAfter2Tommorow, after2TommorowDay);
          }, 300);
        } else if (
          data.forecast.forecastday[3].day.condition.code === 1063 ||
          data.forecast.forecastday[3].day.condition.code === 1150 ||
          data.forecast.forecastday[3].day.condition.code === 1180 ||
          data.forecast.forecastday[3].day.condition.code === 1186
        ) {
          conditionImgAfter2Tommorow.src = possibleRain;
          setTimeout(() => {
            conditionImgAfter2Tommorow.classList.replace("opacity-0", "opacity-100");

            after2TommorowDiv.insertBefore(conditionImgAfter2Tommorow, after2TommorowDay);
          }, 300);
        } else if (
          data.forecast.forecastday[3].day.condition.code === 1069 ||
          data.forecast.forecastday[3].day.condition.code === 1204
        ) {
          conditionImgAfter2Tommorow.src = possibleSleet;
          setTimeout(() => {
            conditionImgAfter2Tommorow.classList.replace("opacity-0", "opacity-100");

            after2TommorowDiv.insertBefore(conditionImgAfter2Tommorow, after2TommorowDay);
          }, 300);
        } else if (
          data.forecast.forecastday[3].day.condition.code === 1087 ||
          data.forecast.forecastday[3].day.condition.code === 1117 ||
          data.forecast.forecastday[3].day.condition.code === 1273 ||
          data.forecast.forecastday[3].day.condition.code === 1276 ||
          data.forecast.forecastday[3].day.condition.code === 1279 ||
          data.forecast.forecastday[3].day.condition.code === 1282
        ) {
          conditionImgAfter2Tommorow.src = blizzard;
          setTimeout(() => {
            conditionImgAfter2Tommorow.classList.replace("opacity-0", "opacity-100");

            after2TommorowDiv.insertBefore(conditionImgAfter2Tommorow, after2TommorowDay);
          }, 300);
        } else if (
          data.forecast.forecastday[3].day.condition.code === 1246 ||
          data.forecast.forecastday[3].day.condition.code === 1171 ||
          data.forecast.forecastday[3].day.condition.code === 1189 ||
          data.forecast.forecastday[3].day.condition.code === 1192 ||
          data.forecast.forecastday[3].day.condition.code === 1195 ||
          data.forecast.forecastday[3].day.condition.code === 1201 ||
          data.forecast.forecastday[3].day.condition.code === 1207 ||
          data.forecast.forecastday[3].day.condition.code === 1243 ||
          data.forecast.forecastday[3].day.condition.code === 1252
        ) {
          conditionImgAfter2Tommorow.src = heavyRain;
          setTimeout(() => {
            conditionImgAfter2Tommorow.classList.replace("opacity-0", "opacity-100");

            after2TommorowDiv.insertBefore(conditionImgAfter2Tommorow, after2TommorowDay);
          }, 300);
        } else if (
          data.forecast.forecastday[3].day.condition.code === 1135 ||
          data.forecast.forecastday[3].day.condition.code === 1147
        ) {
          conditionImgAfter2Tommorow.src = fog;
          setTimeout(() => {
            conditionImgAfter2Tommorow.classList.replace("opacity-0", "opacity-100");

            after2TommorowDiv.insertBefore(conditionImgAfter2Tommorow, after2TommorowDay);
          }, 300);
        } else if (
          data.forecast.forecastday[3].day.condition.code === 1168 ||
          data.forecast.forecastday[3].day.condition.code === 1198 ||
          data.forecast.forecastday[3].day.condition.code === 1213 ||
          data.forecast.forecastday[3].day.condition.code === 1255
        ) {
          conditionImgAfter2Tommorow.src = lightSnow;
          setTimeout(() => {
            conditionImgAfter2Tommorow.classList.replace("opacity-0", "opacity-100");

            after2TommorowDiv.insertBefore(conditionImgAfter2Tommorow, after2TommorowDay);
          }, 300);
        } else if (
          data.forecast.forecastday[3].day.condition.code === 1114 ||
          data.forecast.forecastday[3].day.condition.code === 1219 ||
          data.forecast.forecastday[3].day.condition.code === 1222 ||
          data.forecast.forecastday[3].day.condition.code === 1225 ||
          data.forecast.forecastday[3].day.condition.code === 1237 ||
          data.forecast.forecastday[3].day.condition.code === 1258 ||
          data.forecast.forecastday[3].day.condition.code === 1261 ||
          data.forecast.forecastday[3].day.condition.code === 1264
        ) {
          conditionImgAfter2Tommorow.src = heavySnow;
          setTimeout(() => {
            conditionImgAfter2Tommorow.classList.replace("opacity-0", "opacity-100");

            after2TommorowDiv.insertBefore(conditionImgAfter2Tommorow, after2TommorowDay);
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

          afterTommorowDay.classList.replace("opacity-0", "opacity-100");
          afterTommorowDay.textContent = `${forecastDays[2]}`;
          afterTommorowMaxTemp.classList.replace("opacity-0", "opacity-100");
          afterTommorowMaxTemp.textContent = `${data.forecast.forecastday[2].day.maxtemp_c}°C`;

          afterTommorowMinTemp.classList.replace("opacity-0", "opacity-100");
          afterTommorowMinTemp.textContent = `${data.forecast.forecastday[2].day.mintemp_c}°C`;

          afterTommorowWindSpeed.classList.replace("opacity-0", "opacity-100");
          afterTommorowWindSpeed.textContent = `${data.forecast.forecastday[2].day.maxwind_kph}km/h`;
          afterTommorowRainChance.classList.replace("opacity-0", "opacity-100");
          afterTommorowRainChance.textContent = `${data.forecast.forecastday[2].day.daily_chance_of_rain}%`;

          after2TommorowDay.classList.replace("opacity-0", "opacity-100");
          after2TommorowDay.textContent = `${forecastDays[3]}`;
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

          sixAMHour.classList.replace("opacity-0", "opacity-100");
          sixAMTemp.classList.replace("opacity-0", "opacity-100");
          sixAMTemp.textContent = `${data.forecast.forecastday[0].hour[6].temp_c}°C`;
          sixAMHumidity.classList.replace("opacity-0", "opacity-100");
          sixAMHumidity.textContent = `${data.forecast.forecastday[0].hour[6].humidity}%`;
          sixAMWindSpeed.classList.replace("opacity-0", "opacity-100");
          sixAMWindSpeed.textContent = `${data.forecast.forecastday[0].hour[6].wind_kph}km/h`;
          sixAMRainChance.classList.replace("opacity-0", "opacity-100");
          sixAMRainChance.textContent = `${data.forecast.forecastday[0].hour[6].chance_of_rain}%`;

          eightAMHour.classList.replace("opacity-0", "opacity-100");
          eightAMTemp.classList.replace("opacity-0", "opacity-100");
          eightAMTemp.textContent = `${data.forecast.forecastday[0].hour[8].temp_c}°C`;
          eightAMHumidity.classList.replace("opacity-0", "opacity-100");
          eightAMHumidity.textContent = `${data.forecast.forecastday[0].hour[8].humidity}%`;
          eightAMWindSpeed.classList.replace("opacity-0", "opacity-100");
          eightAMWindSpeed.textContent = `${data.forecast.forecastday[0].hour[8].wind_kph}km/h`;
          eightAMRainChance.classList.replace("opacity-0", "opacity-100");
          eightAMRainChance.textContent = `${data.forecast.forecastday[0].hour[8].chance_of_rain}%`;

          tenAMHour.classList.replace("opacity-0", "opacity-100");
          tenAMTemp.classList.replace("opacity-0", "opacity-100");
          tenAMTemp.textContent = `${data.forecast.forecastday[0].hour[10].temp_c}°C`;
          tenAMHumidity.classList.replace("opacity-0", "opacity-100");
          tenAMHumidity.textContent = `${data.forecast.forecastday[0].hour[10].humidity}%`;
          tenAMWindSpeed.classList.replace("opacity-0", "opacity-100");
          tenAMWindSpeed.textContent = `${data.forecast.forecastday[0].hour[10].wind_kph}km/h`;
          tenAMRainChance.classList.replace("opacity-0", "opacity-100");
          tenAMRainChance.textContent = `${data.forecast.forecastday[0].hour[10].chance_of_rain}%`;

          twelvePMHour.classList.replace("opacity-0", "opacity-100");
          twelvePMTemp.classList.replace("opacity-0", "opacity-100");
          twelvePMTemp.textContent = `${data.forecast.forecastday[0].hour[12].temp_c}°C`;
          twelvePMHumidity.classList.replace("opacity-0", "opacity-100");
          twelvePMHumidity.textContent = `${data.forecast.forecastday[0].hour[12].humidity}%`;
          twelvePMWindSpeed.classList.replace("opacity-0", "opacity-100");
          twelvePMWindSpeed.textContent = `${data.forecast.forecastday[0].hour[12].wind_kph}km/h`;
          twelvePMRainChance.classList.replace("opacity-0", "opacity-100");
          twelvePMRainChance.textContent = `${data.forecast.forecastday[0].hour[12].chance_of_rain}%`;

          twoPMHour.classList.replace("opacity-0", "opacity-100");
          twoPMTemp.classList.replace("opacity-0", "opacity-100");
          twoPMTemp.textContent = `${data.forecast.forecastday[0].hour[14].temp_c}°C`;
          twoPMHumidity.classList.replace("opacity-0", "opacity-100");
          twoPMHumidity.textContent = `${data.forecast.forecastday[0].hour[14].humidity}%`;
          twoPMWindSpeed.classList.replace("opacity-0", "opacity-100");
          twoPMWindSpeed.textContent = `${data.forecast.forecastday[0].hour[14].wind_kph}km/h`;
          twoPMRainChance.classList.replace("opacity-0", "opacity-100");
          twoPMRainChance.textContent = `${data.forecast.forecastday[0].hour[14].chance_of_rain}%`;

          fourPMHour.classList.replace("opacity-0", "opacity-100");
          fourPMTemp.classList.replace("opacity-0", "opacity-100");
          fourPMTemp.textContent = `${data.forecast.forecastday[0].hour[16].temp_c}°C`;
          fourPMHumidity.classList.replace("opacity-0", "opacity-100");
          fourPMHumidity.textContent = `${data.forecast.forecastday[0].hour[16].humidity}%`;
          fourPMWindSpeed.classList.replace("opacity-0", "opacity-100");
          fourPMWindSpeed.textContent = `${data.forecast.forecastday[0].hour[16].wind_kph}km/h`;
          fourPMRainChance.classList.replace("opacity-0", "opacity-100");
          fourPMRainChance.textContent = `${data.forecast.forecastday[0].hour[16].chance_of_rain}%`;

          sixPMHour.classList.replace("opacity-0", "opacity-100");
          sixPMTemp.classList.replace("opacity-0", "opacity-100");
          sixPMTemp.textContent = `${data.forecast.forecastday[0].hour[18].temp_c}°C`;
          sixPMHumidity.classList.replace("opacity-0", "opacity-100");
          sixPMHumidity.textContent = `${data.forecast.forecastday[0].hour[18].humidity}%`;
          sixPMWindSpeed.classList.replace("opacity-0", "opacity-100");
          sixPMWindSpeed.textContent = `${data.forecast.forecastday[0].hour[18].wind_kph}km/h`;
          sixPMRainChance.classList.replace("opacity-0", "opacity-100");
          sixPMRainChance.textContent = `${data.forecast.forecastday[0].hour[18].chance_of_rain}%`;

          eightPMHour.classList.replace("opacity-0", "opacity-100");
          eightPMTemp.classList.replace("opacity-0", "opacity-100");
          eightPMTemp.textContent = `${data.forecast.forecastday[0].hour[20].temp_c}°C`;
          eightPMHumidity.classList.replace("opacity-0", "opacity-100");
          eightPMHumidity.textContent = `${data.forecast.forecastday[0].hour[20].humidity}%`;
          eightPMWindSpeed.classList.replace("opacity-0", "opacity-100");
          eightPMWindSpeed.textContent = `${data.forecast.forecastday[0].hour[20].wind_kph}km/h`;
          eightPMRainChance.classList.replace("opacity-0", "opacity-100");
          eightPMRainChance.textContent = `${data.forecast.forecastday[0].hour[20].chance_of_rain}%`;

          tenPMHour.classList.replace("opacity-0", "opacity-100");
          tenPMTemp.classList.replace("opacity-0", "opacity-100");
          tenPMTemp.textContent = `${data.forecast.forecastday[0].hour[22].temp_c}°C`;
          tenPMHumidity.classList.replace("opacity-0", "opacity-100");
          tenPMHumidity.textContent = `${data.forecast.forecastday[0].hour[22].humidity}%`;
          tenPMWindSpeed.classList.replace("opacity-0", "opacity-100");
          tenPMWindSpeed.textContent = `${data.forecast.forecastday[0].hour[22].wind_kph}km/h`;
          tenPMRainChance.classList.replace("opacity-0", "opacity-100");
          tenPMRainChance.textContent = `${data.forecast.forecastday[0].hour[22].chance_of_rain}%`;

          twelveAMHour.classList.replace("opacity-0", "opacity-100");
          twelveAMTemp.classList.replace("opacity-0", "opacity-100");
          twelveAMTemp.textContent = `${data.forecast.forecastday[0].hour[0].temp_c}°C`;
          twelveAMHumidity.classList.replace("opacity-0", "opacity-100");
          twelveAMHumidity.textContent = `${data.forecast.forecastday[0].hour[0].humidity}%`;
          twelveAmWindSpeed.classList.replace("opacity-0", "opacity-100");
          twelveAmWindSpeed.textContent = `${data.forecast.forecastday[0].hour[0].wind_kph}km/h`;
          twelveAMRainChance.classList.replace("opacity-0", "opacity-100");
          twelveAMRainChance.textContent = `${data.forecast.forecastday[0].hour[0].chance_of_rain}%`;

          twoAMHour.classList.replace("opacity-0", "opacity-100");
          twoAMTemp.classList.replace("opacity-0", "opacity-100");
          twoAMTemp.textContent = `${data.forecast.forecastday[0].hour[2].temp_c}°C`;
          twoAMHumidity.classList.replace("opacity-0", "opacity-100");
          twoAMHumidity.textContent = `${data.forecast.forecastday[0].hour[2].humidity}%`;
          twoAMWindSpeed.classList.replace("opacity-0", "opacity-100");
          twoAMWindSpeed.textContent = `${data.forecast.forecastday[0].hour[2].wind_kph}km/h`;
          twoAMRainChance.classList.replace("opacity-0", "opacity-100");
          twoAMRainChance.textContent = `${data.forecast.forecastday[0].hour[2].chance_of_rain}%`;

          fourAMHour.classList.replace("opacity-0", "opacity-100");
          fourAMTemp.classList.replace("opacity-0", "opacity-100");
          fourAMTemp.textContent = `${data.forecast.forecastday[0].hour[4].temp_c}°C`;
          fourAMHumidity.classList.replace("opacity-0", "opacity-100");
          fourAMHumidity.textContent = `${data.forecast.forecastday[0].hour[4].humidity}%`;
          fourAMWindSpeed.classList.replace("opacity-0", "opacity-100");
          fourAMWindSpeed.textContent = `${data.forecast.forecastday[0].hour[4].wind_kph}km/h`;
          fourAMRainChance.classList.replace("opacity-0", "opacity-100");
          fourAMRainChance.textContent = `${data.forecast.forecastday[0].hour[4].chance_of_rain}%`;
        }, 300);
      } catch (error) {
        errorText.classList.replace("opacity-0", "opacity-100");
        errorText.textContent = error;
        setTimeout(() => {
          errorText.classList.replace("opacity-100", "opacity-0");
        }, 1500);
        console.log(error);
      }
    } else if (ev.type === "DOMContentLoaded") {
      try {
        navigator.geolocation.getCurrentPosition(async (position) => {
          const { latitude } = position.coords;
          const { longitude } = position.coords;

          const responseCurrent = await Promise.all([
            fetch(
              `https://api.weatherapi.com/v1/history.json?dt=${formattedYesterdayDate}&key=4062a6c99201445190e72941240103&q=${latitude},${longitude}`
            ),
            fetch(
              `https://api.weatherapi.com/v1/forecast.json?days=4&key=4062a6c99201445190e72941240103&q=${latitude},${longitude}`
            ),
          ]);
          const historyData = await responseCurrent[0].json();
          const data = await responseCurrent[1].json();
          const currentData = data.current;
          currentTemperature.classList.replace("opacity-100", "opacity-0");
          location.classList.replace("opacity-100", "opacity-0");
          locationDate.classList.replace("opacity-100", "opacity-0");
          currentFeelsLike.classList.replace("opacity-100", "opacity-0");
          currentCondition.classList.replace("opacity-100", "opacity-0");
          conditionImg.classList.replace("opacity-100", "opacity-0");
          conditionImgYesterday.classList.replace("opacity-100", "opacity-0");
          conditionImgTommorow.classList.replace("opacity-100", "opacity-0");
          conditionImgAfterTommorow.classList.replace("opacity-100", "opacity-0");
          conditionImgAfter2Tommorow.classList.replace("opacity-100", "opacity-0");
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
          sixAMTemp.classList.replace("opacity-100", "opacity-0");
          sixAMHumidity.classList.replace("opacity-100", "opacity-0");
          sixAMWindSpeed.classList.replace("opacity-100", "opacity-0");
          sixAMRainChance.classList.replace("opacity-100", "opacity-0");
          eightAMTemp.classList.replace("opacity-100", "opacity-0");
          eightAMHumidity.classList.replace("opacity-100", "opacity-0");
          eightAMWindSpeed.classList.replace("opacity-100", "opacity-0");
          eightAMRainChance.classList.replace("opacity-100", "opacity-0");
          tenAMTemp.classList.replace("opacity-100", "opacity-0");
          tenAMHumidity.classList.replace("opacity-100", "opacity-0");
          tenAMWindSpeed.classList.replace("opacity-100", "opacity-0");
          tenAMRainChance.classList.replace("opacity-100", "opacity-0");
          twelvePMTemp.classList.replace("opacity-100", "opacity-0");
          twelvePMHumidity.classList.replace("opacity-100", "opacity-0");
          twelvePMWindSpeed.classList.replace("opacity-100", "opacity-0");
          twelvePMRainChance.classList.replace("opacity-100", "opacity-0");
          twoPMTemp.classList.replace("opacity-100", "opacity-0");
          twoPMHumidity.classList.replace("opacity-100", "opacity-0");
          twoPMWindSpeed.classList.replace("opacity-100", "opacity-0");
          twoPMRainChance.classList.replace("opacity-100", "opacity-0");
          fourPMTemp.classList.replace("opacity-100", "opacity-0");
          fourPMHumidity.classList.replace("opacity-100", "opacity-0");
          fourPMWindSpeed.classList.replace("opacity-100", "opacity-0");
          fourPMRainChance.classList.replace("opacity-100", "opacity-0");
          sixPMTemp.classList.replace("opacity-100", "opacity-0");
          sixPMHumidity.classList.replace("opacity-100", "opacity-0");
          sixPMWindSpeed.classList.replace("opacity-100", "opacity-0");
          sixPMRainChance.classList.replace("opacity-100", "opacity-0");
          eightPMTemp.classList.replace("opacity-100", "opacity-0");
          eightPMHumidity.classList.replace("opacity-100", "opacity-0");
          eightPMWindSpeed.classList.replace("opacity-100", "opacity-0");
          eightPMRainChance.classList.replace("opacity-100", "opacity-0");
          tenPMTemp.classList.replace("opacity-100", "opacity-0");
          tenPMHumidity.classList.replace("opacity-100", "opacity-0");
          tenPMWindSpeed.classList.replace("opacity-100", "opacity-0");
          tenPMRainChance.classList.replace("opacity-100", "opacity-0");
          twelveAMTemp.classList.replace("opacity-100", "opacity-0");
          twelveAMHumidity.classList.replace("opacity-100", "opacity-0");
          twelveAmWindSpeed.classList.replace("opacity-100", "opacity-0");
          twelveAMRainChance.classList.replace("opacity-100", "opacity-0");
          twoAMTemp.classList.replace("opacity-100", "opacity-0");
          twoAMHumidity.classList.replace("opacity-100", "opacity-0");
          twoAMWindSpeed.classList.replace("opacity-100", "opacity-0");
          twoAMRainChance.classList.replace("opacity-100", "opacity-0");
          fourAMTemp.classList.replace("opacity-100", "opacity-0");
          fourAMHumidity.classList.replace("opacity-100", "opacity-0");
          fourAMWindSpeed.classList.replace("opacity-100", "opacity-0");
          fourAMRainChance.classList.replace("opacity-100", "opacity-0");
          errorText.classList.replace("opacity-100", "opacity-0");

          if (data.error) {
            throw new Error(data.error.message);
          }
          const forecastDays = data.forecast.forecastday.map((forecast) => {
            const date = new Date(forecast.date);
            const dayName = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][
              date.getDay()
            ];
            return dayName;
          });

          celsiusButton.addEventListener("click", function () {
            celsiusClicked = true;
            if (celsiusClicked) {
              currentTemperature.classList.replace("opacity-100", "opacity-0");
              location.classList.replace("opacity-100", "opacity-0");
              locationDate.classList.replace("opacity-100", "opacity-0");
              currentFeelsLike.classList.replace("opacity-100", "opacity-0");
              currentCondition.classList.replace("opacity-100", "opacity-0");
              conditionImg.classList.replace("opacity-100", "opacity-0");
              conditionImgYesterday.classList.replace("opacity-100", "opacity-0");
              conditionImgTommorow.classList.replace("opacity-100", "opacity-0");
              conditionImgAfterTommorow.classList.replace("opacity-100", "opacity-0");
              conditionImgAfter2Tommorow.classList.replace("opacity-100", "opacity-0");
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
              sixAMTemp.classList.replace("opacity-100", "opacity-0");
              sixAMHumidity.classList.replace("opacity-100", "opacity-0");
              sixAMWindSpeed.classList.replace("opacity-100", "opacity-0");
              sixAMRainChance.classList.replace("opacity-100", "opacity-0");
              eightAMTemp.classList.replace("opacity-100", "opacity-0");
              eightAMHumidity.classList.replace("opacity-100", "opacity-0");
              eightAMWindSpeed.classList.replace("opacity-100", "opacity-0");
              eightAMRainChance.classList.replace("opacity-100", "opacity-0");
              tenAMTemp.classList.replace("opacity-100", "opacity-0");
              tenAMHumidity.classList.replace("opacity-100", "opacity-0");
              tenAMWindSpeed.classList.replace("opacity-100", "opacity-0");
              tenAMRainChance.classList.replace("opacity-100", "opacity-0");
              twelvePMTemp.classList.replace("opacity-100", "opacity-0");
              twelvePMHumidity.classList.replace("opacity-100", "opacity-0");
              twelvePMWindSpeed.classList.replace("opacity-100", "opacity-0");
              twelvePMRainChance.classList.replace("opacity-100", "opacity-0");
              twoPMTemp.classList.replace("opacity-100", "opacity-0");
              twoPMHumidity.classList.replace("opacity-100", "opacity-0");
              twoPMWindSpeed.classList.replace("opacity-100", "opacity-0");
              twoPMRainChance.classList.replace("opacity-100", "opacity-0");
              fourPMTemp.classList.replace("opacity-100", "opacity-0");
              fourPMHumidity.classList.replace("opacity-100", "opacity-0");
              fourPMWindSpeed.classList.replace("opacity-100", "opacity-0");
              fourPMRainChance.classList.replace("opacity-100", "opacity-0");
              sixPMTemp.classList.replace("opacity-100", "opacity-0");
              sixPMHumidity.classList.replace("opacity-100", "opacity-0");
              sixPMWindSpeed.classList.replace("opacity-100", "opacity-0");
              sixPMRainChance.classList.replace("opacity-100", "opacity-0");
              eightPMTemp.classList.replace("opacity-100", "opacity-0");
              eightPMHumidity.classList.replace("opacity-100", "opacity-0");
              eightPMWindSpeed.classList.replace("opacity-100", "opacity-0");
              eightPMRainChance.classList.replace("opacity-100", "opacity-0");
              tenPMTemp.classList.replace("opacity-100", "opacity-0");
              tenPMHumidity.classList.replace("opacity-100", "opacity-0");
              tenPMWindSpeed.classList.replace("opacity-100", "opacity-0");
              tenPMRainChance.classList.replace("opacity-100", "opacity-0");
              twelveAMTemp.classList.replace("opacity-100", "opacity-0");
              twelveAMHumidity.classList.replace("opacity-100", "opacity-0");
              twelveAmWindSpeed.classList.replace("opacity-100", "opacity-0");
              twelveAMRainChance.classList.replace("opacity-100", "opacity-0");
              twoAMTemp.classList.replace("opacity-100", "opacity-0");
              twoAMHumidity.classList.replace("opacity-100", "opacity-0");
              twoAMWindSpeed.classList.replace("opacity-100", "opacity-0");
              twoAMRainChance.classList.replace("opacity-100", "opacity-0");
              fourAMTemp.classList.replace("opacity-100", "opacity-0");
              fourAMHumidity.classList.replace("opacity-100", "opacity-0");
              fourAMWindSpeed.classList.replace("opacity-100", "opacity-0");
              fourAMRainChance.classList.replace("opacity-100", "opacity-0");

              this.classList.remove("bg-slate-800");
              this.classList.remove("border-black");
              this.classList.add("border-white");
              this.classList.add("bg-slate-500");

              fahrenheitButton.classList.add("bg-slate-800");
              fahrenheitButton.classList.add("border-black");
              fahrenheitButton.classList.remove("border-white");
              fahrenheitButton.classList.remove("bg-slate-500");
              setTimeout(() => {
                conditionImg.classList.replace("opacity-0", "opacity-100");
                conditionImgYesterday.classList.replace("opacity-0", "opacity-100");
                conditionImgTommorow.classList.replace("opacity-0", "opacity-100");
                conditionImgAfterTommorow.classList.replace("opacity-0", "opacity-100");
                conditionImgAfter2Tommorow.classList.replace("opacity-0", "opacity-100");

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

                afterTommorowDay.classList.replace("opacity-0", "opacity-100");
                afterTommorowDay.textContent = `${forecastDays[2]}`;
                afterTommorowMaxTemp.classList.replace("opacity-0", "opacity-100");
                afterTommorowMaxTemp.textContent = `${data.forecast.forecastday[2].day.maxtemp_c}°C`;

                afterTommorowMinTemp.classList.replace("opacity-0", "opacity-100");
                afterTommorowMinTemp.textContent = `${data.forecast.forecastday[2].day.mintemp_c}°C`;

                afterTommorowWindSpeed.classList.replace("opacity-0", "opacity-100");
                afterTommorowWindSpeed.textContent = `${data.forecast.forecastday[2].day.maxwind_kph}km/h`;
                afterTommorowRainChance.classList.replace("opacity-0", "opacity-100");
                afterTommorowRainChance.textContent = `${data.forecast.forecastday[2].day.daily_chance_of_rain}%`;

                after2TommorowDay.classList.replace("opacity-0", "opacity-100");
                after2TommorowDay.textContent = `${forecastDays[3]}`;
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

                sixAMHour.classList.replace("opacity-0", "opacity-100");
                sixAMTemp.classList.replace("opacity-0", "opacity-100");
                sixAMTemp.textContent = `${data.forecast.forecastday[0].hour[6].temp_c}°C`;
                sixAMHumidity.classList.replace("opacity-0", "opacity-100");
                sixAMHumidity.textContent = `${data.forecast.forecastday[0].hour[6].humidity}%`;
                sixAMWindSpeed.classList.replace("opacity-0", "opacity-100");
                sixAMWindSpeed.textContent = `${data.forecast.forecastday[0].hour[6].wind_kph}km/h`;
                sixAMRainChance.classList.replace("opacity-0", "opacity-100");
                sixAMRainChance.textContent = `${data.forecast.forecastday[0].hour[6].chance_of_rain}%`;

                eightAMHour.classList.replace("opacity-0", "opacity-100");
                eightAMTemp.classList.replace("opacity-0", "opacity-100");
                eightAMTemp.textContent = `${data.forecast.forecastday[0].hour[8].temp_c}°C`;
                eightAMHumidity.classList.replace("opacity-0", "opacity-100");
                eightAMHumidity.textContent = `${data.forecast.forecastday[0].hour[8].humidity}%`;
                eightAMWindSpeed.classList.replace("opacity-0", "opacity-100");
                eightAMWindSpeed.textContent = `${data.forecast.forecastday[0].hour[8].wind_kph}km/h`;
                eightAMRainChance.classList.replace("opacity-0", "opacity-100");
                eightAMRainChance.textContent = `${data.forecast.forecastday[0].hour[8].chance_of_rain}%`;

                tenAMHour.classList.replace("opacity-0", "opacity-100");
                tenAMTemp.classList.replace("opacity-0", "opacity-100");
                tenAMTemp.textContent = `${data.forecast.forecastday[0].hour[10].temp_c}°C`;
                tenAMHumidity.classList.replace("opacity-0", "opacity-100");
                tenAMHumidity.textContent = `${data.forecast.forecastday[0].hour[10].humidity}%`;
                tenAMWindSpeed.classList.replace("opacity-0", "opacity-100");
                tenAMWindSpeed.textContent = `${data.forecast.forecastday[0].hour[10].wind_kph}km/h`;
                tenAMRainChance.classList.replace("opacity-0", "opacity-100");
                tenAMRainChance.textContent = `${data.forecast.forecastday[0].hour[10].chance_of_rain}%`;

                twelvePMHour.classList.replace("opacity-0", "opacity-100");
                twelvePMTemp.classList.replace("opacity-0", "opacity-100");
                twelvePMTemp.textContent = `${data.forecast.forecastday[0].hour[12].temp_c}°C`;
                twelvePMHumidity.classList.replace("opacity-0", "opacity-100");
                twelvePMHumidity.textContent = `${data.forecast.forecastday[0].hour[12].humidity}%`;
                twelvePMWindSpeed.classList.replace("opacity-0", "opacity-100");
                twelvePMWindSpeed.textContent = `${data.forecast.forecastday[0].hour[12].wind_kph}km/h`;
                twelvePMRainChance.classList.replace("opacity-0", "opacity-100");
                twelvePMRainChance.textContent = `${data.forecast.forecastday[0].hour[12].chance_of_rain}%`;

                twoPMHour.classList.replace("opacity-0", "opacity-100");
                twoPMTemp.classList.replace("opacity-0", "opacity-100");
                twoPMTemp.textContent = `${data.forecast.forecastday[0].hour[14].temp_c}°C`;
                twoPMHumidity.classList.replace("opacity-0", "opacity-100");
                twoPMHumidity.textContent = `${data.forecast.forecastday[0].hour[14].humidity}%`;
                twoPMWindSpeed.classList.replace("opacity-0", "opacity-100");
                twoPMWindSpeed.textContent = `${data.forecast.forecastday[0].hour[14].wind_kph}km/h`;
                twoPMRainChance.classList.replace("opacity-0", "opacity-100");
                twoPMRainChance.textContent = `${data.forecast.forecastday[0].hour[14].chance_of_rain}%`;

                fourPMHour.classList.replace("opacity-0", "opacity-100");
                fourPMTemp.classList.replace("opacity-0", "opacity-100");
                fourPMTemp.textContent = `${data.forecast.forecastday[0].hour[16].temp_c}°C`;
                fourPMHumidity.classList.replace("opacity-0", "opacity-100");
                fourPMHumidity.textContent = `${data.forecast.forecastday[0].hour[16].humidity}%`;
                fourPMWindSpeed.classList.replace("opacity-0", "opacity-100");
                fourPMWindSpeed.textContent = `${data.forecast.forecastday[0].hour[16].wind_kph}km/h`;
                fourPMRainChance.classList.replace("opacity-0", "opacity-100");
                fourPMRainChance.textContent = `${data.forecast.forecastday[0].hour[16].chance_of_rain}%`;

                sixPMHour.classList.replace("opacity-0", "opacity-100");
                sixPMTemp.classList.replace("opacity-0", "opacity-100");
                sixPMTemp.textContent = `${data.forecast.forecastday[0].hour[18].temp_c}°C`;
                sixPMHumidity.classList.replace("opacity-0", "opacity-100");
                sixPMHumidity.textContent = `${data.forecast.forecastday[0].hour[18].humidity}%`;
                sixPMWindSpeed.classList.replace("opacity-0", "opacity-100");
                sixPMWindSpeed.textContent = `${data.forecast.forecastday[0].hour[18].wind_kph}km/h`;
                sixPMRainChance.classList.replace("opacity-0", "opacity-100");
                sixPMRainChance.textContent = `${data.forecast.forecastday[0].hour[18].chance_of_rain}%`;

                eightPMHour.classList.replace("opacity-0", "opacity-100");
                eightPMTemp.classList.replace("opacity-0", "opacity-100");
                eightPMTemp.textContent = `${data.forecast.forecastday[0].hour[20].temp_c}°C`;
                eightPMHumidity.classList.replace("opacity-0", "opacity-100");
                eightPMHumidity.textContent = `${data.forecast.forecastday[0].hour[20].humidity}%`;
                eightPMWindSpeed.classList.replace("opacity-0", "opacity-100");
                eightPMWindSpeed.textContent = `${data.forecast.forecastday[0].hour[20].wind_kph}km/h`;
                eightPMRainChance.classList.replace("opacity-0", "opacity-100");
                eightPMRainChance.textContent = `${data.forecast.forecastday[0].hour[20].chance_of_rain}%`;

                tenPMHour.classList.replace("opacity-0", "opacity-100");
                tenPMTemp.classList.replace("opacity-0", "opacity-100");
                tenPMTemp.textContent = `${data.forecast.forecastday[0].hour[22].temp_c}°C`;
                tenPMHumidity.classList.replace("opacity-0", "opacity-100");
                tenPMHumidity.textContent = `${data.forecast.forecastday[0].hour[22].humidity}%`;
                tenPMWindSpeed.classList.replace("opacity-0", "opacity-100");
                tenPMWindSpeed.textContent = `${data.forecast.forecastday[0].hour[22].wind_kph}km/h`;
                tenPMRainChance.classList.replace("opacity-0", "opacity-100");
                tenPMRainChance.textContent = `${data.forecast.forecastday[0].hour[22].chance_of_rain}%`;

                twelveAMHour.classList.replace("opacity-0", "opacity-100");
                twelveAMTemp.classList.replace("opacity-0", "opacity-100");
                twelveAMTemp.textContent = `${data.forecast.forecastday[0].hour[0].temp_c}°C`;
                twelveAMHumidity.classList.replace("opacity-0", "opacity-100");
                twelveAMHumidity.textContent = `${data.forecast.forecastday[0].hour[0].humidity}%`;
                twelveAmWindSpeed.classList.replace("opacity-0", "opacity-100");
                twelveAmWindSpeed.textContent = `${data.forecast.forecastday[0].hour[0].wind_kph}km/h`;
                twelveAMRainChance.classList.replace("opacity-0", "opacity-100");
                twelveAMRainChance.textContent = `${data.forecast.forecastday[0].hour[0].chance_of_rain}%`;

                twoAMHour.classList.replace("opacity-0", "opacity-100");
                twoAMTemp.classList.replace("opacity-0", "opacity-100");
                twoAMTemp.textContent = `${data.forecast.forecastday[0].hour[2].temp_c}°C`;
                twoAMHumidity.classList.replace("opacity-0", "opacity-100");
                twoAMHumidity.textContent = `${data.forecast.forecastday[0].hour[2].humidity}%`;
                twoAMWindSpeed.classList.replace("opacity-0", "opacity-100");
                twoAMWindSpeed.textContent = `${data.forecast.forecastday[0].hour[2].wind_kph}km/h`;
                twoAMRainChance.classList.replace("opacity-0", "opacity-100");
                twoAMRainChance.textContent = `${data.forecast.forecastday[0].hour[2].chance_of_rain}%`;

                fourAMHour.classList.replace("opacity-0", "opacity-100");
                fourAMTemp.classList.replace("opacity-0", "opacity-100");
                fourAMTemp.textContent = `${data.forecast.forecastday[0].hour[4].temp_c}°C`;
                fourAMHumidity.classList.replace("opacity-0", "opacity-100");
                fourAMHumidity.textContent = `${data.forecast.forecastday[0].hour[4].humidity}%`;
                fourAMWindSpeed.classList.replace("opacity-0", "opacity-100");
                fourAMWindSpeed.textContent = `${data.forecast.forecastday[0].hour[4].wind_kph}km/h`;
                fourAMRainChance.classList.replace("opacity-0", "opacity-100");
                fourAMRainChance.textContent = `${data.forecast.forecastday[0].hour[4].chance_of_rain}%`;
              }, 300);
            }
          });
          fahrenheitButton.addEventListener("click", function () {
            fahrenheitClicked = true;
            if (fahrenheitButton) {
              currentTemperature.classList.replace("opacity-100", "opacity-0");
              location.classList.replace("opacity-100", "opacity-0");
              locationDate.classList.replace("opacity-100", "opacity-0");
              currentFeelsLike.classList.replace("opacity-100", "opacity-0");
              currentCondition.classList.replace("opacity-100", "opacity-0");
              conditionImg.classList.replace("opacity-100", "opacity-0");
              conditionImgYesterday.classList.replace("opacity-100", "opacity-0");
              conditionImgTommorow.classList.replace("opacity-100", "opacity-0");
              conditionImgAfterTommorow.classList.replace("opacity-100", "opacity-0");
              conditionImgAfter2Tommorow.classList.replace("opacity-100", "opacity-0");
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
              sixAMTemp.classList.replace("opacity-100", "opacity-0");
              sixAMHumidity.classList.replace("opacity-100", "opacity-0");
              sixAMWindSpeed.classList.replace("opacity-100", "opacity-0");
              sixAMRainChance.classList.replace("opacity-100", "opacity-0");
              eightAMTemp.classList.replace("opacity-100", "opacity-0");
              eightAMHumidity.classList.replace("opacity-100", "opacity-0");
              eightAMWindSpeed.classList.replace("opacity-100", "opacity-0");
              eightAMRainChance.classList.replace("opacity-100", "opacity-0");
              tenAMTemp.classList.replace("opacity-100", "opacity-0");
              tenAMHumidity.classList.replace("opacity-100", "opacity-0");
              tenAMWindSpeed.classList.replace("opacity-100", "opacity-0");
              tenAMRainChance.classList.replace("opacity-100", "opacity-0");
              twelvePMTemp.classList.replace("opacity-100", "opacity-0");
              twelvePMHumidity.classList.replace("opacity-100", "opacity-0");
              twelvePMWindSpeed.classList.replace("opacity-100", "opacity-0");
              twelvePMRainChance.classList.replace("opacity-100", "opacity-0");
              twoPMTemp.classList.replace("opacity-100", "opacity-0");
              twoPMHumidity.classList.replace("opacity-100", "opacity-0");
              twoPMWindSpeed.classList.replace("opacity-100", "opacity-0");
              twoPMRainChance.classList.replace("opacity-100", "opacity-0");
              fourPMTemp.classList.replace("opacity-100", "opacity-0");
              fourPMHumidity.classList.replace("opacity-100", "opacity-0");
              fourPMWindSpeed.classList.replace("opacity-100", "opacity-0");
              fourPMRainChance.classList.replace("opacity-100", "opacity-0");
              sixPMTemp.classList.replace("opacity-100", "opacity-0");
              sixPMHumidity.classList.replace("opacity-100", "opacity-0");
              sixPMWindSpeed.classList.replace("opacity-100", "opacity-0");
              sixPMRainChance.classList.replace("opacity-100", "opacity-0");
              eightPMTemp.classList.replace("opacity-100", "opacity-0");
              eightPMHumidity.classList.replace("opacity-100", "opacity-0");
              eightPMWindSpeed.classList.replace("opacity-100", "opacity-0");
              eightPMRainChance.classList.replace("opacity-100", "opacity-0");
              tenPMTemp.classList.replace("opacity-100", "opacity-0");
              tenPMHumidity.classList.replace("opacity-100", "opacity-0");
              tenPMWindSpeed.classList.replace("opacity-100", "opacity-0");
              tenPMRainChance.classList.replace("opacity-100", "opacity-0");
              twelveAMTemp.classList.replace("opacity-100", "opacity-0");
              twelveAMHumidity.classList.replace("opacity-100", "opacity-0");
              twelveAmWindSpeed.classList.replace("opacity-100", "opacity-0");
              twelveAMRainChance.classList.replace("opacity-100", "opacity-0");
              twoAMTemp.classList.replace("opacity-100", "opacity-0");
              twoAMHumidity.classList.replace("opacity-100", "opacity-0");
              twoAMWindSpeed.classList.replace("opacity-100", "opacity-0");
              twoAMRainChance.classList.replace("opacity-100", "opacity-0");
              fourAMTemp.classList.replace("opacity-100", "opacity-0");
              fourAMHumidity.classList.replace("opacity-100", "opacity-0");
              fourAMWindSpeed.classList.replace("opacity-100", "opacity-0");
              fourAMRainChance.classList.replace("opacity-100", "opacity-0");

              this.classList.remove("bg-slate-800");
              this.classList.remove("border-black");
              this.classList.add("border-white");
              this.classList.add("bg-slate-500");

              celsiusButton.classList.add("bg-slate-800");
              celsiusButton.classList.add("border-black");
              celsiusButton.classList.remove("border-white");
              celsiusButton.classList.remove("bg-slate-500");

              setTimeout(() => {
                conditionImg.classList.replace("opacity-0", "opacity-100");
                conditionImgYesterday.classList.replace("opacity-0", "opacity-100");
                conditionImgTommorow.classList.replace("opacity-0", "opacity-100");
                conditionImgAfterTommorow.classList.replace("opacity-0", "opacity-100");
                conditionImgAfter2Tommorow.classList.replace("opacity-0", "opacity-100");

                location.classList.replace("opacity-0", "opacity-100");
                location.textContent = `${data.location.country} ${data.location.region}`;

                locationDate.classList.replace("opacity-0", "opacity-100");
                locationDate.textContent = `${formatDate(data.location.localtime)}`;

                currentCondition.classList.replace("opacity-0", "opacity-100");
                currentCondition.textContent = currentData.condition.text;

                currentTemperature.classList.replace("opacity-0", "opacity-100");
                currentTemperature.textContent = `${currentData.temp_f}°F`;
                currentFeelsLike.classList.replace("opacity-0", "opacity-100");
                currentFeelsLike.textContent = `${currentData.feelslike_f}°F`;

                currentFeelsLikeIcon.classList.replace("opacity-0", "opacity-100");

                currentTemperatureIcon.classList.replace("opacity-0", "opacity-100");

                humidityDiv.classList.replace("opacity-0", "opacity-100");
                humidity.textContent = `${currentData.humidity}%`;

                windSpeedDiv.classList.replace("opacity-0", "opacity-100");
                currentWindSpeed.textContent = `${currentData.wind_mph}mph/h`;

                gustDiv.classList.replace("opacity-0", "opacity-100");
                gust.textContent = `${currentData.gust_mph}mph/h`;
                maxTempDiv.classList.replace("opacity-0", "opacity-100");
                currentMaxTemp.textContent = `${data.forecast.forecastday[0].day.maxtemp_f}°F`;

                minTempDiv.classList.replace("opacity-0", "opacity-100");
                currentMinTemp.textContent = `${data.forecast.forecastday[0].day.mintemp_f}°F`;

                rainPercentDiv.classList.replace("opacity-0", "opacity-100");
                currentRainPercent.textContent = `${data.forecast.forecastday[0].day.daily_chance_of_rain}%`;

                tommorowDay.classList.replace("opacity-0", "opacity-100");

                tommorowMaxTemp.classList.replace("opacity-0", "opacity-100");
                tommorowMaxTemp.textContent = `${data.forecast.forecastday[1].day.maxtemp_f}°F`;

                tommorowMinTemp.classList.replace("opacity-0", "opacity-100");
                tommorowMinTemp.textContent = `${data.forecast.forecastday[1].day.mintemp_f}°F`;
                tommorowWindSpeed.classList.replace("opacity-0", "opacity-100");
                tommorowWindSpeed.textContent = `${data.forecast.forecastday[1].day.maxwind_mph}mp/h`;

                tommorowRainChance.classList.replace("opacity-0", "opacity-100");
                tommorowRainChance.textContent = `${data.forecast.forecastday[1].day.daily_chance_of_rain}%`;

                afterTommorowDay.classList.replace("opacity-0", "opacity-100");
                afterTommorowDay.textContent = `${forecastDays[2]}`;
                afterTommorowMaxTemp.classList.replace("opacity-0", "opacity-100");
                afterTommorowMaxTemp.textContent = `${data.forecast.forecastday[2].day.maxtemp_f}°F`;

                afterTommorowMinTemp.classList.replace("opacity-0", "opacity-100");
                afterTommorowMinTemp.textContent = `${data.forecast.forecastday[2].day.mintemp_f}°F`;

                afterTommorowWindSpeed.classList.replace("opacity-0", "opacity-100");
                afterTommorowWindSpeed.textContent = `${data.forecast.forecastday[2].day.maxwind_mph}mp/h`;
                afterTommorowRainChance.classList.replace("opacity-0", "opacity-100");
                afterTommorowRainChance.textContent = `${data.forecast.forecastday[2].day.daily_chance_of_rain}%`;

                after2TommorowDay.classList.replace("opacity-0", "opacity-100");
                after2TommorowDay.textContent = `${forecastDays[3]}`;
                after2TommorowMaxTemp.textContent = `${data.forecast.forecastday[3].day.maxtemp_f}°F`;
                after2TommorowMaxTemp.classList.replace("opacity-0", "opacity-100");
                after2TommorowMinTemp.classList.replace("opacity-0", "opacity-100");
                after2TommorowMinTemp.textContent = `${data.forecast.forecastday[3].day.mintemp_f}°F`;
                after2TommorowWindSpeed.classList.replace("opacity-0", "opacity-100");
                after2TommorowWindSpeed.textContent = `${data.forecast.forecastday[3].day.maxwind_mph}mp/h`;
                after2TommorowRainChance.classList.replace("opacity-0", "opacity-100");
                after2TommorowRainChance.textContent = `${data.forecast.forecastday[3].day.daily_chance_of_rain}%`;

                yesterdayDay.classList.replace("opacity-0", "opacity-100");
                yesterdayMaxTemp.classList.replace("opacity-0", "opacity-100");
                yesterdayMaxTemp.textContent = `${historyData.forecast.forecastday[0].day.maxtemp_f}°F`;
                yesterdayMinTemp.classList.replace("opacity-0", "opacity-100");
                yesterdayMinTemp.textContent = `${historyData.forecast.forecastday[0].day.mintemp_f}°F`;
                yesterdayWindSpeed.classList.replace("opacity-0", "opacity-100");
                yesterdayWindSpeed.textContent = `${historyData.forecast.forecastday[0].day.maxwind_mph}mp/h`;
                yesterdayRainChance.classList.replace("opacity-0", "opacity-100");
                yesterdayRainChance.textContent = `${historyData.forecast.forecastday[0].day.daily_chance_of_rain}%`;

                sixAMHour.classList.replace("opacity-0", "opacity-100");
                sixAMTemp.classList.replace("opacity-0", "opacity-100");
                sixAMTemp.textContent = `${data.forecast.forecastday[0].hour[6].temp_f}°F`;
                sixAMHumidity.classList.replace("opacity-0", "opacity-100");
                sixAMHumidity.textContent = `${data.forecast.forecastday[0].hour[6].humidity}%`;
                sixAMWindSpeed.classList.replace("opacity-0", "opacity-100");
                sixAMWindSpeed.textContent = `${data.forecast.forecastday[0].hour[6].wind_mph}mp/h`;
                sixAMRainChance.classList.replace("opacity-0", "opacity-100");
                sixAMRainChance.textContent = `${data.forecast.forecastday[0].hour[6].chance_of_rain}%`;

                eightAMHour.classList.replace("opacity-0", "opacity-100");
                eightAMTemp.classList.replace("opacity-0", "opacity-100");
                eightAMTemp.textContent = `${data.forecast.forecastday[0].hour[8].temp_f}°F`;
                eightAMHumidity.classList.replace("opacity-0", "opacity-100");
                eightAMHumidity.textContent = `${data.forecast.forecastday[0].hour[8].humidity}%`;
                eightAMWindSpeed.classList.replace("opacity-0", "opacity-100");
                eightAMWindSpeed.textContent = `${data.forecast.forecastday[0].hour[8].wind_mph}mp/h`;
                eightAMRainChance.classList.replace("opacity-0", "opacity-100");
                eightAMRainChance.textContent = `${data.forecast.forecastday[0].hour[8].chance_of_rain}%`;

                tenAMHour.classList.replace("opacity-0", "opacity-100");
                tenAMTemp.classList.replace("opacity-0", "opacity-100");
                tenAMTemp.textContent = `${data.forecast.forecastday[0].hour[10].temp_f}°F`;
                tenAMHumidity.classList.replace("opacity-0", "opacity-100");
                tenAMHumidity.textContent = `${data.forecast.forecastday[0].hour[10].humidity}%`;
                tenAMWindSpeed.classList.replace("opacity-0", "opacity-100");
                tenAMWindSpeed.textContent = `${data.forecast.forecastday[0].hour[10].wind_mph}mp/h`;
                tenAMRainChance.classList.replace("opacity-0", "opacity-100");
                tenAMRainChance.textContent = `${data.forecast.forecastday[0].hour[10].chance_of_rain}%`;

                twelvePMHour.classList.replace("opacity-0", "opacity-100");
                twelvePMTemp.classList.replace("opacity-0", "opacity-100");
                twelvePMTemp.textContent = `${data.forecast.forecastday[0].hour[12].temp_f}°F`;
                twelvePMHumidity.classList.replace("opacity-0", "opacity-100");
                twelvePMHumidity.textContent = `${data.forecast.forecastday[0].hour[12].humidity}%`;
                twelvePMWindSpeed.classList.replace("opacity-0", "opacity-100");
                twelvePMWindSpeed.textContent = `${data.forecast.forecastday[0].hour[12].wind_mph}mp/h`;
                twelvePMRainChance.classList.replace("opacity-0", "opacity-100");
                twelvePMRainChance.textContent = `${data.forecast.forecastday[0].hour[12].chance_of_rain}%`;

                twoPMHour.classList.replace("opacity-0", "opacity-100");
                twoPMTemp.classList.replace("opacity-0", "opacity-100");
                twoPMTemp.textContent = `${data.forecast.forecastday[0].hour[14].temp_f}°F`;
                twoPMHumidity.classList.replace("opacity-0", "opacity-100");
                twoPMHumidity.textContent = `${data.forecast.forecastday[0].hour[14].humidity}%`;
                twoPMWindSpeed.classList.replace("opacity-0", "opacity-100");
                twoPMWindSpeed.textContent = `${data.forecast.forecastday[0].hour[14].wind_mph}mp/h`;
                twoPMRainChance.classList.replace("opacity-0", "opacity-100");
                twoPMRainChance.textContent = `${data.forecast.forecastday[0].hour[14].chance_of_rain}%`;

                fourPMHour.classList.replace("opacity-0", "opacity-100");
                fourPMTemp.classList.replace("opacity-0", "opacity-100");
                fourPMTemp.textContent = `${data.forecast.forecastday[0].hour[16].temp_f}°F`;
                fourPMHumidity.classList.replace("opacity-0", "opacity-100");
                fourPMHumidity.textContent = `${data.forecast.forecastday[0].hour[16].humidity}%`;
                fourPMWindSpeed.classList.replace("opacity-0", "opacity-100");
                fourPMWindSpeed.textContent = `${data.forecast.forecastday[0].hour[16].wind_mph}mp/h`;
                fourPMRainChance.classList.replace("opacity-0", "opacity-100");
                fourPMRainChance.textContent = `${data.forecast.forecastday[0].hour[16].chance_of_rain}%`;

                sixPMHour.classList.replace("opacity-0", "opacity-100");
                sixPMTemp.classList.replace("opacity-0", "opacity-100");
                sixPMTemp.textContent = `${data.forecast.forecastday[0].hour[18].temp_f}°F`;
                sixPMHumidity.classList.replace("opacity-0", "opacity-100");
                sixPMHumidity.textContent = `${data.forecast.forecastday[0].hour[18].humidity}%`;
                sixPMWindSpeed.classList.replace("opacity-0", "opacity-100");
                sixPMWindSpeed.textContent = `${data.forecast.forecastday[0].hour[18].wind_mph}mp/h`;
                sixPMRainChance.classList.replace("opacity-0", "opacity-100");
                sixPMRainChance.textContent = `${data.forecast.forecastday[0].hour[18].chance_of_rain}%`;

                eightPMHour.classList.replace("opacity-0", "opacity-100");
                eightPMTemp.classList.replace("opacity-0", "opacity-100");
                eightPMTemp.textContent = `${data.forecast.forecastday[0].hour[20].temp_f}°F`;
                eightPMHumidity.classList.replace("opacity-0", "opacity-100");
                eightPMHumidity.textContent = `${data.forecast.forecastday[0].hour[20].humidity}%`;
                eightPMWindSpeed.classList.replace("opacity-0", "opacity-100");
                eightPMWindSpeed.textContent = `${data.forecast.forecastday[0].hour[20].wind_mph}mp/h`;
                eightPMRainChance.classList.replace("opacity-0", "opacity-100");
                eightPMRainChance.textContent = `${data.forecast.forecastday[0].hour[20].chance_of_rain}%`;

                tenPMHour.classList.replace("opacity-0", "opacity-100");
                tenPMTemp.classList.replace("opacity-0", "opacity-100");
                tenPMTemp.textContent = `${data.forecast.forecastday[0].hour[22].temp_f}°F`;
                tenPMHumidity.classList.replace("opacity-0", "opacity-100");
                tenPMHumidity.textContent = `${data.forecast.forecastday[0].hour[22].humidity}%`;
                tenPMWindSpeed.classList.replace("opacity-0", "opacity-100");
                tenPMWindSpeed.textContent = `${data.forecast.forecastday[0].hour[22].wind_mph}mp/h`;
                tenPMRainChance.classList.replace("opacity-0", "opacity-100");
                tenPMRainChance.textContent = `${data.forecast.forecastday[0].hour[22].chance_of_rain}%`;

                twelveAMHour.classList.replace("opacity-0", "opacity-100");
                twelveAMTemp.classList.replace("opacity-0", "opacity-100");
                twelveAMTemp.textContent = `${data.forecast.forecastday[0].hour[0].temp_f}°F`;
                twelveAMHumidity.classList.replace("opacity-0", "opacity-100");
                twelveAMHumidity.textContent = `${data.forecast.forecastday[0].hour[0].humidity}%`;
                twelveAmWindSpeed.classList.replace("opacity-0", "opacity-100");
                twelveAmWindSpeed.textContent = `${data.forecast.forecastday[0].hour[0].wind_mph}mp/h`;
                twelveAMRainChance.classList.replace("opacity-0", "opacity-100");
                twelveAMRainChance.textContent = `${data.forecast.forecastday[0].hour[0].chance_of_rain}%`;

                twoAMHour.classList.replace("opacity-0", "opacity-100");
                twoAMTemp.classList.replace("opacity-0", "opacity-100");
                twoAMTemp.textContent = `${data.forecast.forecastday[0].hour[2].temp_f}°F`;
                twoAMHumidity.classList.replace("opacity-0", "opacity-100");
                twoAMHumidity.textContent = `${data.forecast.forecastday[0].hour[2].humidity}%`;
                twoAMWindSpeed.classList.replace("opacity-0", "opacity-100");
                twoAMWindSpeed.textContent = `${data.forecast.forecastday[0].hour[2].wind_mph}mp/h`;
                twoAMRainChance.classList.replace("opacity-0", "opacity-100");
                twoAMRainChance.textContent = `${data.forecast.forecastday[0].hour[2].chance_of_rain}%`;

                fourAMHour.classList.replace("opacity-0", "opacity-100");
                fourAMTemp.classList.replace("opacity-0", "opacity-100");
                fourAMTemp.textContent = `${data.forecast.forecastday[0].hour[4].temp_f}°F`;
                fourAMHumidity.classList.replace("opacity-0", "opacity-100");
                fourAMHumidity.textContent = `${data.forecast.forecastday[0].hour[4].humidity}%`;
                fourAMWindSpeed.classList.replace("opacity-0", "opacity-100");
                fourAMWindSpeed.textContent = `${data.forecast.forecastday[0].hour[4].wind_mph}mp/h`;
                fourAMRainChance.classList.replace("opacity-0", "opacity-100");
                fourAMRainChance.textContent = `${data.forecast.forecastday[0].hour[4].chance_of_rain}%`;
              }, 300);
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

          if (
            historyData.forecast.forecastday[0].day.condition.code === 1000 &&
            historyData.forecast.forecastday[0].day.condition.text.trim() === "Clear"
          ) {
            conditionImgYesterday.src = clear;
            setTimeout(() => {
              conditionImgYesterday.classList.replace("opacity-0", "opacity-100");
              yesterdayDiv.insertBefore(conditionImgYesterday, yesterdayDay);
            }, 300);
          } else if (
            historyData.forecast.forecastday[0].day.condition.code === 1000 &&
            historyData.forecast.forecastday[0].day.condition.text.trim() === "Sunny"
          ) {
            conditionImgYesterday.src = sunny;
            setTimeout(() => {
              conditionImgYesterday.classList.replace("opacity-0", "opacity-100");

              yesterdayDiv.insertBefore(conditionImgYesterday, yesterdayDay);
            }, 300);
          } else if (historyData.forecast.forecastday[0].day.condition.code === 1003) {
            conditionImgYesterday.src = partlyCloudy;
            setTimeout(() => {
              conditionImgYesterday.classList.replace("opacity-0", "opacity-100");

              yesterdayDiv.insertBefore(conditionImgYesterday, yesterdayDay);
            }, 300);
          } else if (historyData.forecast.forecastday[0].day.condition.code === 1006) {
            conditionImgYesterday.src = cloudy;
            setTimeout(() => {
              conditionImgYesterday.classList.replace("opacity-0", "opacity-100");

              yesterdayDiv.insertBefore(conditionImgYesterday, yesterdayDay);
            }, 300);
          } else if (historyData.forecast.forecastday[0].day.condition.code === 1009) {
            conditionImgYesterday.src = overcast;
            setTimeout(() => {
              conditionImgYesterday.classList.replace("opacity-0", "opacity-100");

              yesterdayDiv.insertBefore(conditionImgYesterday, yesterdayDay);
            }, 300);
          } else if (historyData.forecast.forecastday[0].day.condition.code === 1030) {
            conditionImgYesterday.src = mist;
            setTimeout(() => {
              conditionImgYesterday.classList.replace("opacity-0", "opacity-100");

              yesterdayDiv.insertBefore(conditionImgYesterday, yesterdayDay);
            }, 300);
          } else if (
            historyData.forecast.forecastday[0].day.condition.code === 1053 ||
            historyData.forecast.forecastday[0].day.condition.code === 1183 ||
            historyData.forecast.forecastday[0].day.condition.code === 1089 ||
            historyData.forecast.forecastday[0].day.condition.code === 1240 ||
            historyData.forecast.forecastday[0].day.condition.code === 1249 ||
            historyData.forecast.forecastday[0].day.condition.code === 1153
          ) {
            conditionImgYesterday.src = lightRain;
            setTimeout(() => {
              conditionImgYesterday.classList.replace("opacity-0", "opacity-100");

              yesterdayDiv.insertBefore(conditionImgYesterday, yesterdayDay);
            }, 300);
          } else if (
            historyData.forecast.forecastday[0].day.condition.code === 1066 ||
            historyData.forecast.forecastday[0].day.condition.code === 1072 ||
            historyData.forecast.forecastday[0].day.condition.code === 1210 ||
            historyData.forecast.forecastday[0].day.condition.code === 1216
          ) {
            conditionImgYesterday.src = possibleSnow;
            setTimeout(() => {
              conditionImgYesterday.classList.replace("opacity-0", "opacity-100");

              yesterdayDiv.insertBefore(conditionImgYesterday, yesterdayDay);
            }, 300);
          } else if (
            historyData.forecast.forecastday[0].day.condition.code === 1063 ||
            historyData.forecast.forecastday[0].day.condition.code === 1150 ||
            historyData.forecast.forecastday[0].day.condition.code === 1180 ||
            historyData.forecast.forecastday[0].day.condition.code === 1186
          ) {
            conditionImgYesterday.src = possibleRain;
            setTimeout(() => {
              conditionImgYesterday.classList.replace("opacity-0", "opacity-100");

              yesterdayDiv.insertBefore(conditionImgYesterday, yesterdayDay);
            }, 300);
          } else if (
            historyData.forecast.forecastday[0].day.condition.code === 1069 ||
            historyData.forecast.forecastday[0].day.condition.code === 1204
          ) {
            conditionImgYesterday.src = possibleSleet;
            setTimeout(() => {
              conditionImgYesterday.classList.replace("opacity-0", "opacity-100");

              yesterdayDiv.insertBefore(conditionImgYesterday, yesterdayDay);
            }, 300);
          } else if (
            historyData.forecast.forecastday[0].day.condition.code === 1087 ||
            historyData.forecast.forecastday[0].day.condition.code === 1117 ||
            historyData.forecast.forecastday[0].day.condition.code === 1273 ||
            historyData.forecast.forecastday[0].day.condition.code === 1276 ||
            historyData.forecast.forecastday[0].day.condition.code === 1279 ||
            historyData.forecast.forecastday[0].day.condition.code === 1282
          ) {
            conditionImgYesterday.src = blizzard;
            setTimeout(() => {
              conditionImgYesterday.classList.replace("opacity-0", "opacity-100");

              yesterdayDiv.insertBefore(conditionImgYesterday, yesterdayDay);
            }, 300);
          } else if (
            historyData.forecast.forecastday[0].day.condition.code === 1246 ||
            historyData.forecast.forecastday[0].day.condition.code === 1171 ||
            historyData.forecast.forecastday[0].day.condition.code === 1189 ||
            historyData.forecast.forecastday[0].day.condition.code === 1192 ||
            historyData.forecast.forecastday[0].day.condition.code === 1195 ||
            historyData.forecast.forecastday[0].day.condition.code === 1201 ||
            historyData.forecast.forecastday[0].day.condition.code === 1207 ||
            historyData.forecast.forecastday[0].day.condition.code === 1243 ||
            historyData.forecast.forecastday[0].day.condition.code === 1252
          ) {
            conditionImgYesterday.src = heavyRain;
            setTimeout(() => {
              conditionImgYesterday.classList.replace("opacity-0", "opacity-100");

              yesterdayDiv.insertBefore(conditionImgYesterday, yesterdayDay);
            }, 300);
          } else if (
            historyData.forecast.forecastday[0].day.condition.code === 1135 ||
            historyData.forecast.forecastday[0].day.condition.code === 1147
          ) {
            conditionImgYesterday.src = fog;
            setTimeout(() => {
              conditionImgYesterday.classList.replace("opacity-0", "opacity-100");

              yesterdayDiv.insertBefore(conditionImgYesterday, yesterdayDay);
            }, 300);
          } else if (
            historyData.forecast.forecastday[0].day.condition.code === 1168 ||
            historyData.forecast.forecastday[0].day.condition.code === 1198 ||
            historyData.forecast.forecastday[0].day.condition.code === 1213 ||
            historyData.forecast.forecastday[0].day.condition.code === 1255
          ) {
            conditionImgYesterday.src = lightSnow;
            setTimeout(() => {
              conditionImgYesterday.classList.replace("opacity-0", "opacity-100");

              yesterdayDiv.insertBefore(conditionImgYesterday, yesterdayDay);
            }, 300);
          } else if (
            historyData.forecast.forecastday[0].day.condition.code === 1114 ||
            historyData.forecast.forecastday[0].day.condition.code === 1219 ||
            historyData.forecast.forecastday[0].day.condition.code === 1222 ||
            historyData.forecast.forecastday[0].day.condition.code === 1225 ||
            historyData.forecast.forecastday[0].day.condition.code === 1237 ||
            historyData.forecast.forecastday[0].day.condition.code === 1258 ||
            historyData.forecast.forecastday[0].day.condition.code === 1261 ||
            historyData.forecast.forecastday[0].day.condition.code === 1264
          ) {
            conditionImgYesterday.src = heavySnow;
            setTimeout(() => {
              conditionImgYesterday.classList.replace("opacity-0", "opacity-100");

              yesterdayDiv.insertBefore(conditionImgYesterday, yesterdayDay);
            }, 300);
          }

          if (
            data.forecast.forecastday[1].day.condition.code === 1000 &&
            data.forecast.forecastday[1].day.condition.text.trim() === "Clear"
          ) {
            conditionImgTommorow.src = clear;
            setTimeout(() => {
              conditionImgTommorow.classList.replace("opacity-0", "opacity-100");
              tommorowDiv.insertBefore(conditionImgTommorow, tommorowDay);
            }, 300);
          } else if (
            data.forecast.forecastday[1].day.condition.code === 1000 &&
            data.forecast.forecastday[1].day.condition.text.trim() === "Sunny"
          ) {
            conditionImgTommorow.src = sunny;
            setTimeout(() => {
              conditionImgTommorow.classList.replace("opacity-0", "opacity-100");

              tommorowDiv.insertBefore(conditionImgTommorow, tommorowDay);
            }, 300);
          } else if (data.forecast.forecastday[1].day.condition.code === 1003) {
            conditionImgTommorow.src = partlyCloudy;
            setTimeout(() => {
              conditionImgTommorow.classList.replace("opacity-0", "opacity-100");

              tommorowDiv.insertBefore(conditionImgTommorow, tommorowDay);
            }, 300);
          } else if (data.forecast.forecastday[1].day.condition.code === 1006) {
            conditionImgTommorow.src = cloudy;
            setTimeout(() => {
              conditionImgTommorow.classList.replace("opacity-0", "opacity-100");

              tommorowDiv.insertBefore(conditionImgTommorow, tommorowDay);
            }, 300);
          } else if (data.forecast.forecastday[1].day.condition.code === 1009) {
            conditionImgTommorow.src = overcast;
            setTimeout(() => {
              conditionImgTommorow.classList.replace("opacity-0", "opacity-100");

              tommorowDiv.insertBefore(conditionImgTommorow, tommorowDay);
            }, 300);
          } else if (data.forecast.forecastday[1].day.condition.code === 1030) {
            conditionImgTommorow.src = mist;
            setTimeout(() => {
              conditionImgTommorow.classList.replace("opacity-0", "opacity-100");

              tommorowDiv.insertBefore(conditionImgTommorow, tommorowDay);
            }, 300);
          } else if (
            data.forecast.forecastday[1].day.condition.code === 1053 ||
            data.forecast.forecastday[1].day.condition.code === 1183 ||
            data.forecast.forecastday[1].day.condition.code === 1089 ||
            data.forecast.forecastday[1].day.condition.code === 1240 ||
            data.forecast.forecastday[1].day.condition.code === 1249 ||
            data.forecast.forecastday[1].day.condition.code === 1153
          ) {
            conditionImgTommorow.src = lightRain;
            setTimeout(() => {
              conditionImgTommorow.classList.replace("opacity-0", "opacity-100");

              tommorowDiv.insertBefore(conditionImgTommorow, tommorowDay);
            }, 300);
          } else if (
            data.forecast.forecastday[1].day.condition.code === 1066 ||
            data.forecast.forecastday[1].day.condition.code === 1072 ||
            data.forecast.forecastday[1].day.condition.code === 1210 ||
            data.forecast.forecastday[1].day.condition.code === 1216
          ) {
            conditionImgTommorow.src = possibleSnow;
            setTimeout(() => {
              conditionImgTommorow.classList.replace("opacity-0", "opacity-100");

              tommorowDiv.insertBefore(conditionImgTommorow, tommorowDay);
            }, 300);
          } else if (
            data.forecast.forecastday[1].day.condition.code === 1063 ||
            data.forecast.forecastday[1].day.condition.code === 1150 ||
            data.forecast.forecastday[1].day.condition.code === 1180 ||
            data.forecast.forecastday[1].day.condition.code === 1186
          ) {
            conditionImgTommorow.src = possibleRain;
            setTimeout(() => {
              conditionImgTommorow.classList.replace("opacity-0", "opacity-100");

              tommorowDiv.insertBefore(conditionImgTommorow, tommorowDay);
            }, 300);
          } else if (
            data.forecast.forecastday[1].day.condition.code === 1069 ||
            data.forecast.forecastday[1].day.condition.code === 1204
          ) {
            conditionImgTommorow.src = possibleSleet;
            setTimeout(() => {
              conditionImgTommorow.classList.replace("opacity-0", "opacity-100");

              tommorowDiv.insertBefore(conditionImgTommorow, tommorowDay);
            }, 300);
          } else if (
            data.forecast.forecastday[1].day.condition.code === 1087 ||
            data.forecast.forecastday[1].day.condition.code === 1117 ||
            data.forecast.forecastday[1].day.condition.code === 1273 ||
            data.forecast.forecastday[1].day.condition.code === 1276 ||
            data.forecast.forecastday[1].day.condition.code === 1279 ||
            data.forecast.forecastday[1].day.condition.code === 1282
          ) {
            conditionImgTommorow.src = blizzard;
            setTimeout(() => {
              conditionImgTommorow.classList.replace("opacity-0", "opacity-100");

              tommorowDiv.insertBefore(conditionImgTommorow, tommorowDay);
            }, 300);
          } else if (
            data.forecast.forecastday[1].day.condition.code === 1246 ||
            data.forecast.forecastday[1].day.condition.code === 1171 ||
            data.forecast.forecastday[1].day.condition.code === 1189 ||
            data.forecast.forecastday[1].day.condition.code === 1192 ||
            data.forecast.forecastday[1].day.condition.code === 1195 ||
            data.forecast.forecastday[1].day.condition.code === 1201 ||
            data.forecast.forecastday[1].day.condition.code === 1207 ||
            data.forecast.forecastday[1].day.condition.code === 1243 ||
            data.forecast.forecastday[1].day.condition.code === 1252
          ) {
            conditionImgTommorow.src = heavyRain;
            setTimeout(() => {
              conditionImgTommorow.classList.replace("opacity-0", "opacity-100");

              tommorowDiv.insertBefore(conditionImgTommorow, tommorowDay);
            }, 300);
          } else if (
            data.forecast.forecastday[1].day.condition.code === 1135 ||
            data.forecast.forecastday[1].day.condition.code === 1147
          ) {
            conditionImgTommorow.src = fog;
            setTimeout(() => {
              conditionImgTommorow.classList.replace("opacity-0", "opacity-100");

              tommorowDiv.insertBefore(conditionImgTommorow, tommorowDay);
            }, 300);
          } else if (
            data.forecast.forecastday[1].day.condition.code === 1168 ||
            data.forecast.forecastday[1].day.condition.code === 1198 ||
            data.forecast.forecastday[1].day.condition.code === 1213 ||
            data.forecast.forecastday[1].day.condition.code === 1255
          ) {
            conditionImgTommorow.src = lightSnow;
            setTimeout(() => {
              conditionImgTommorow.classList.replace("opacity-0", "opacity-100");

              tommorowDiv.insertBefore(conditionImgTommorow, tommorowDay);
            }, 300);
          } else if (
            data.forecast.forecastday[1].day.condition.code === 1114 ||
            data.forecast.forecastday[1].day.condition.code === 1219 ||
            data.forecast.forecastday[1].day.condition.code === 1222 ||
            data.forecast.forecastday[1].day.condition.code === 1225 ||
            data.forecast.forecastday[1].day.condition.code === 1237 ||
            data.forecast.forecastday[1].day.condition.code === 1258 ||
            data.forecast.forecastday[1].day.condition.code === 1261 ||
            data.forecast.forecastday[1].day.condition.code === 1264
          ) {
            conditionImgTommorow.src = heavySnow;
            setTimeout(() => {
              conditionImgTommorow.classList.replace("opacity-0", "opacity-100");

              tommorowDiv.insertBefore(conditionImgTommorow, tommorowDay);
            }, 300);
          }

          if (
            data.forecast.forecastday[2].day.condition.code === 1000 &&
            data.forecast.forecastday[2].day.condition.text.trim() === "Clear"
          ) {
            conditionImgAfterTommorow.src = clear;
            setTimeout(() => {
              conditionImgAfterTommorow.classList.replace("opacity-0", "opacity-100");
              afterTommorowDiv.insertBefore(conditionImgAfterTommorow, afterTommorowDay);
            }, 300);
          } else if (
            data.forecast.forecastday[2].day.condition.code === 1000 &&
            data.forecast.forecastday[2].day.condition.text.trim() === "Sunny"
          ) {
            conditionImgAfterTommorow.src = sunny;
            setTimeout(() => {
              conditionImgAfterTommorow.classList.replace("opacity-0", "opacity-100");

              afterTommorowDiv.insertBefore(conditionImgAfterTommorow, afterTommorowDay);
            }, 300);
          } else if (data.forecast.forecastday[2].day.condition.code === 1003) {
            conditionImgAfterTommorow.src = partlyCloudy;
            setTimeout(() => {
              conditionImgAfterTommorow.classList.replace("opacity-0", "opacity-100");

              afterTommorowDiv.insertBefore(conditionImgAfterTommorow, afterTommorowDay);
            }, 300);
          } else if (data.forecast.forecastday[2].day.condition.code === 1006) {
            conditionImgAfterTommorow.src = cloudy;
            setTimeout(() => {
              conditionImgAfterTommorow.classList.replace("opacity-0", "opacity-100");

              afterTommorowDiv.insertBefore(conditionImgAfterTommorow, afterTommorowDay);
            }, 300);
          } else if (data.forecast.forecastday[2].day.condition.code === 1009) {
            conditionImgAfterTommorow.src = overcast;
            setTimeout(() => {
              conditionImgAfterTommorow.classList.replace("opacity-0", "opacity-100");

              afterTommorowDiv.insertBefore(conditionImgAfterTommorow, afterTommorowDay);
            }, 300);
          } else if (data.forecast.forecastday[2].day.condition.code === 1030) {
            conditionImgAfterTommorow.src = mist;
            setTimeout(() => {
              conditionImgAfterTommorow.classList.replace("opacity-0", "opacity-100");

              afterTommorowDiv.insertBefore(conditionImgAfterTommorow, afterTommorowDay);
            }, 300);
          } else if (
            data.forecast.forecastday[2].day.condition.code === 1053 ||
            data.forecast.forecastday[2].day.condition.code === 1183 ||
            data.forecast.forecastday[2].day.condition.code === 1089 ||
            data.forecast.forecastday[2].day.condition.code === 1240 ||
            data.forecast.forecastday[2].day.condition.code === 1249 ||
            data.forecast.forecastday[2].day.condition.code === 1153
          ) {
            conditionImgAfterTommorow.src = lightRain;
            setTimeout(() => {
              conditionImgAfterTommorow.classList.replace("opacity-0", "opacity-100");

              afterTommorowDiv.insertBefore(conditionImgAfterTommorow, afterTommorowDay);
            }, 300);
          } else if (
            data.forecast.forecastday[2].day.condition.code === 1066 ||
            data.forecast.forecastday[2].day.condition.code === 1072 ||
            data.forecast.forecastday[2].day.condition.code === 1210 ||
            data.forecast.forecastday[2].day.condition.code === 1216
          ) {
            conditionImgAfterTommorow.src = possibleSnow;
            setTimeout(() => {
              conditionImgAfterTommorow.classList.replace("opacity-0", "opacity-100");

              afterTommorowDiv.insertBefore(conditionImgAfterTommorow, afterTommorowDay);
            }, 300);
          } else if (
            data.forecast.forecastday[2].day.condition.code === 1063 ||
            data.forecast.forecastday[2].day.condition.code === 1150 ||
            data.forecast.forecastday[2].day.condition.code === 1180 ||
            data.forecast.forecastday[2].day.condition.code === 1186
          ) {
            conditionImgAfterTommorow.src = possibleRain;
            setTimeout(() => {
              conditionImgAfterTommorow.classList.replace("opacity-0", "opacity-100");

              afterTommorowDiv.insertBefore(conditionImgAfterTommorow, afterTommorowDay);
            }, 300);
          } else if (
            data.forecast.forecastday[2].day.condition.code === 1069 ||
            data.forecast.forecastday[2].day.condition.code === 1204
          ) {
            conditionImgAfterTommorow.src = possibleSleet;
            setTimeout(() => {
              conditionImgAfterTommorow.classList.replace("opacity-0", "opacity-100");

              afterTommorowDiv.insertBefore(conditionImgAfterTommorow, afterTommorowDay);
            }, 300);
          } else if (
            data.forecast.forecastday[2].day.condition.code === 1087 ||
            data.forecast.forecastday[2].day.condition.code === 1117 ||
            data.forecast.forecastday[2].day.condition.code === 1273 ||
            data.forecast.forecastday[2].day.condition.code === 1276 ||
            data.forecast.forecastday[2].day.condition.code === 1279 ||
            data.forecast.forecastday[2].day.condition.code === 1282
          ) {
            conditionImgAfterTommorow.src = blizzard;
            setTimeout(() => {
              conditionImgAfterTommorow.classList.replace("opacity-0", "opacity-100");

              afterTommorowDiv.insertBefore(conditionImgAfterTommorow, afterTommorowDay);
            }, 300);
          } else if (
            data.forecast.forecastday[2].day.condition.code === 1246 ||
            data.forecast.forecastday[2].day.condition.code === 1171 ||
            data.forecast.forecastday[2].day.condition.code === 1189 ||
            data.forecast.forecastday[2].day.condition.code === 1192 ||
            data.forecast.forecastday[2].day.condition.code === 1195 ||
            data.forecast.forecastday[2].day.condition.code === 1201 ||
            data.forecast.forecastday[2].day.condition.code === 1207 ||
            data.forecast.forecastday[2].day.condition.code === 1243 ||
            data.forecast.forecastday[2].day.condition.code === 1252
          ) {
            conditionImgAfterTommorow.src = heavyRain;
            setTimeout(() => {
              conditionImgAfterTommorow.classList.replace("opacity-0", "opacity-100");

              afterTommorowDiv.insertBefore(conditionImgAfterTommorow, afterTommorowDay);
            }, 300);
          } else if (
            data.forecast.forecastday[2].day.condition.code === 1135 ||
            data.forecast.forecastday[2].day.condition.code === 1147
          ) {
            conditionImgAfterTommorow.src = fog;
            setTimeout(() => {
              conditionImgAfterTommorow.classList.replace("opacity-0", "opacity-100");

              afterTommorowDiv.insertBefore(conditionImgAfterTommorow, afterTommorowDay);
            }, 300);
          } else if (
            data.forecast.forecastday[2].day.condition.code === 1168 ||
            data.forecast.forecastday[2].day.condition.code === 1198 ||
            data.forecast.forecastday[2].day.condition.code === 1213 ||
            data.forecast.forecastday[2].day.condition.code === 1255
          ) {
            conditionImgAfterTommorow.src = lightSnow;
            setTimeout(() => {
              conditionImgAfterTommorow.classList.replace("opacity-0", "opacity-100");

              afterTommorowDiv.insertBefore(conditionImgAfterTommorow, afterTommorowDay);
            }, 300);
          } else if (
            data.forecast.forecastday[2].day.condition.code === 1114 ||
            data.forecast.forecastday[2].day.condition.code === 1219 ||
            data.forecast.forecastday[2].day.condition.code === 1222 ||
            data.forecast.forecastday[2].day.condition.code === 1225 ||
            data.forecast.forecastday[2].day.condition.code === 1237 ||
            data.forecast.forecastday[2].day.condition.code === 1258 ||
            data.forecast.forecastday[2].day.condition.code === 1261 ||
            data.forecast.forecastday[2].day.condition.code === 1264
          ) {
            conditionImgAfterTommorow.src = heavySnow;
            setTimeout(() => {
              conditionImgAfterTommorow.classList.replace("opacity-0", "opacity-100");

              afterTommorowDiv.insertBefore(conditionImgAfterTommorow, afterTommorowDay);
            }, 300);
          }
          if (
            data.forecast.forecastday[3].day.condition.code === 1000 &&
            data.forecast.forecastday[3].day.condition.text.trim() === "Clear"
          ) {
            conditionImgAfter2Tommorow.src = clear;
            setTimeout(() => {
              conditionImgAfter2Tommorow.classList.replace("opacity-0", "opacity-100");
              after2TommorowDiv.insertBefore(conditionImgAfter2Tommorow, after2TommorowDay);
            }, 300);
          } else if (
            data.forecast.forecastday[3].day.condition.code === 1000 &&
            data.forecast.forecastday[3].day.condition.text.trim() === "Sunny"
          ) {
            conditionImgAfter2Tommorow.src = sunny;
            setTimeout(() => {
              conditionImgAfter2Tommorow.classList.replace("opacity-0", "opacity-100");

              after2TommorowDiv.insertBefore(conditionImgAfter2Tommorow, after2TommorowDay);
            }, 300);
          } else if (data.forecast.forecastday[3].day.condition.code === 1003) {
            conditionImgAfter2Tommorow.src = partlyCloudy;
            setTimeout(() => {
              conditionImgAfter2Tommorow.classList.replace("opacity-0", "opacity-100");

              after2TommorowDiv.insertBefore(conditionImgAfter2Tommorow, after2TommorowDay);
            }, 300);
          } else if (data.forecast.forecastday[3].day.condition.code === 1006) {
            conditionImgAfter2Tommorow.src = cloudy;
            setTimeout(() => {
              conditionImgAfter2Tommorow.classList.replace("opacity-0", "opacity-100");

              after2TommorowDiv.insertBefore(conditionImgAfter2Tommorow, after2TommorowDay);
            }, 300);
          } else if (data.forecast.forecastday[3].day.condition.code === 1009) {
            conditionImgAfter2Tommorow.src = overcast;
            setTimeout(() => {
              conditionImgAfter2Tommorow.classList.replace("opacity-0", "opacity-100");

              after2TommorowDiv.insertBefore(conditionImgAfter2Tommorow, after2TommorowDay);
            }, 300);
          } else if (data.forecast.forecastday[3].day.condition.code === 1030) {
            conditionImgAfter2Tommorow.src = mist;
            setTimeout(() => {
              conditionImgAfter2Tommorow.classList.replace("opacity-0", "opacity-100");

              after2TommorowDiv.insertBefore(conditionImgAfter2Tommorow, after2TommorowDay);
            }, 300);
          } else if (
            data.forecast.forecastday[3].day.condition.code === 1053 ||
            data.forecast.forecastday[3].day.condition.code === 1183 ||
            data.forecast.forecastday[3].day.condition.code === 1089 ||
            data.forecast.forecastday[3].day.condition.code === 1240 ||
            data.forecast.forecastday[3].day.condition.code === 1249 ||
            data.forecast.forecastday[3].day.condition.code === 1153
          ) {
            conditionImgAfter2Tommorow.src = lightRain;
            setTimeout(() => {
              conditionImgAfter2Tommorow.classList.replace("opacity-0", "opacity-100");

              after2TommorowDiv.insertBefore(conditionImgAfter2Tommorow, after2TommorowDay);
            }, 300);
          } else if (
            data.forecast.forecastday[3].day.condition.code === 1066 ||
            data.forecast.forecastday[3].day.condition.code === 1072 ||
            data.forecast.forecastday[3].day.condition.code === 1210 ||
            data.forecast.forecastday[3].day.condition.code === 1216
          ) {
            conditionImgAfter2Tommorow.src = possibleSnow;
            setTimeout(() => {
              conditionImgAfter2Tommorow.classList.replace("opacity-0", "opacity-100");

              after2TommorowDiv.insertBefore(conditionImgAfter2Tommorow, after2TommorowDay);
            }, 300);
          } else if (
            data.forecast.forecastday[3].day.condition.code === 1063 ||
            data.forecast.forecastday[3].day.condition.code === 1150 ||
            data.forecast.forecastday[3].day.condition.code === 1180 ||
            data.forecast.forecastday[3].day.condition.code === 1186
          ) {
            conditionImgAfter2Tommorow.src = possibleRain;
            setTimeout(() => {
              conditionImgAfter2Tommorow.classList.replace("opacity-0", "opacity-100");

              after2TommorowDiv.insertBefore(conditionImgAfter2Tommorow, after2TommorowDay);
            }, 300);
          } else if (
            data.forecast.forecastday[3].day.condition.code === 1069 ||
            data.forecast.forecastday[3].day.condition.code === 1204
          ) {
            conditionImgAfter2Tommorow.src = possibleSleet;
            setTimeout(() => {
              conditionImgAfter2Tommorow.classList.replace("opacity-0", "opacity-100");

              after2TommorowDiv.insertBefore(conditionImgAfter2Tommorow, after2TommorowDay);
            }, 300);
          } else if (
            data.forecast.forecastday[3].day.condition.code === 1087 ||
            data.forecast.forecastday[3].day.condition.code === 1117 ||
            data.forecast.forecastday[3].day.condition.code === 1273 ||
            data.forecast.forecastday[3].day.condition.code === 1276 ||
            data.forecast.forecastday[3].day.condition.code === 1279 ||
            data.forecast.forecastday[3].day.condition.code === 1282
          ) {
            conditionImgAfter2Tommorow.src = blizzard;
            setTimeout(() => {
              conditionImgAfter2Tommorow.classList.replace("opacity-0", "opacity-100");

              after2TommorowDiv.insertBefore(conditionImgAfter2Tommorow, after2TommorowDay);
            }, 300);
          } else if (
            data.forecast.forecastday[3].day.condition.code === 1246 ||
            data.forecast.forecastday[3].day.condition.code === 1171 ||
            data.forecast.forecastday[3].day.condition.code === 1189 ||
            data.forecast.forecastday[3].day.condition.code === 1192 ||
            data.forecast.forecastday[3].day.condition.code === 1195 ||
            data.forecast.forecastday[3].day.condition.code === 1201 ||
            data.forecast.forecastday[3].day.condition.code === 1207 ||
            data.forecast.forecastday[3].day.condition.code === 1243 ||
            data.forecast.forecastday[3].day.condition.code === 1252
          ) {
            conditionImgAfter2Tommorow.src = heavyRain;
            setTimeout(() => {
              conditionImgAfter2Tommorow.classList.replace("opacity-0", "opacity-100");

              after2TommorowDiv.insertBefore(conditionImgAfter2Tommorow, after2TommorowDay);
            }, 300);
          } else if (
            data.forecast.forecastday[3].day.condition.code === 1135 ||
            data.forecast.forecastday[3].day.condition.code === 1147
          ) {
            conditionImgAfter2Tommorow.src = fog;
            setTimeout(() => {
              conditionImgAfter2Tommorow.classList.replace("opacity-0", "opacity-100");

              after2TommorowDiv.insertBefore(conditionImgAfter2Tommorow, after2TommorowDay);
            }, 300);
          } else if (
            data.forecast.forecastday[3].day.condition.code === 1168 ||
            data.forecast.forecastday[3].day.condition.code === 1198 ||
            data.forecast.forecastday[3].day.condition.code === 1213 ||
            data.forecast.forecastday[3].day.condition.code === 1255
          ) {
            conditionImgAfter2Tommorow.src = lightSnow;
            setTimeout(() => {
              conditionImgAfter2Tommorow.classList.replace("opacity-0", "opacity-100");

              after2TommorowDiv.insertBefore(conditionImgAfter2Tommorow, after2TommorowDay);
            }, 300);
          } else if (
            data.forecast.forecastday[3].day.condition.code === 1114 ||
            data.forecast.forecastday[3].day.condition.code === 1219 ||
            data.forecast.forecastday[3].day.condition.code === 1222 ||
            data.forecast.forecastday[3].day.condition.code === 1225 ||
            data.forecast.forecastday[3].day.condition.code === 1237 ||
            data.forecast.forecastday[3].day.condition.code === 1258 ||
            data.forecast.forecastday[3].day.condition.code === 1261 ||
            data.forecast.forecastday[3].day.condition.code === 1264
          ) {
            conditionImgAfter2Tommorow.src = heavySnow;
            setTimeout(() => {
              conditionImgAfter2Tommorow.classList.replace("opacity-0", "opacity-100");

              after2TommorowDiv.insertBefore(conditionImgAfter2Tommorow, after2TommorowDay);
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

            afterTommorowDay.classList.replace("opacity-0", "opacity-100");
            afterTommorowDay.textContent = `${forecastDays[2]}`;
            afterTommorowMaxTemp.classList.replace("opacity-0", "opacity-100");
            afterTommorowMaxTemp.textContent = `${data.forecast.forecastday[2].day.maxtemp_c}°C`;

            afterTommorowMinTemp.classList.replace("opacity-0", "opacity-100");
            afterTommorowMinTemp.textContent = `${data.forecast.forecastday[2].day.mintemp_c}°C`;

            afterTommorowWindSpeed.classList.replace("opacity-0", "opacity-100");
            afterTommorowWindSpeed.textContent = `${data.forecast.forecastday[2].day.maxwind_kph}km/h`;
            afterTommorowRainChance.classList.replace("opacity-0", "opacity-100");
            afterTommorowRainChance.textContent = `${data.forecast.forecastday[2].day.daily_chance_of_rain}%`;

            after2TommorowDay.classList.replace("opacity-0", "opacity-100");
            after2TommorowDay.textContent = `${forecastDays[3]}`;
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

            sixAMHour.classList.replace("opacity-0", "opacity-100");
            sixAMTemp.classList.replace("opacity-0", "opacity-100");
            sixAMTemp.textContent = `${data.forecast.forecastday[0].hour[6].temp_c}°C`;
            sixAMHumidity.classList.replace("opacity-0", "opacity-100");
            sixAMHumidity.textContent = `${data.forecast.forecastday[0].hour[6].humidity}%`;
            sixAMWindSpeed.classList.replace("opacity-0", "opacity-100");
            sixAMWindSpeed.textContent = `${data.forecast.forecastday[0].hour[6].wind_kph}km/h`;
            sixAMRainChance.classList.replace("opacity-0", "opacity-100");
            sixAMRainChance.textContent = `${data.forecast.forecastday[0].hour[6].chance_of_rain}%`;

            eightAMHour.classList.replace("opacity-0", "opacity-100");
            eightAMTemp.classList.replace("opacity-0", "opacity-100");
            eightAMTemp.textContent = `${data.forecast.forecastday[0].hour[8].temp_c}°C`;
            eightAMHumidity.classList.replace("opacity-0", "opacity-100");
            eightAMHumidity.textContent = `${data.forecast.forecastday[0].hour[8].humidity}%`;
            eightAMWindSpeed.classList.replace("opacity-0", "opacity-100");
            eightAMWindSpeed.textContent = `${data.forecast.forecastday[0].hour[8].wind_kph}km/h`;
            eightAMRainChance.classList.replace("opacity-0", "opacity-100");
            eightAMRainChance.textContent = `${data.forecast.forecastday[0].hour[8].chance_of_rain}%`;

            tenAMHour.classList.replace("opacity-0", "opacity-100");
            tenAMTemp.classList.replace("opacity-0", "opacity-100");
            tenAMTemp.textContent = `${data.forecast.forecastday[0].hour[10].temp_c}°C`;
            tenAMHumidity.classList.replace("opacity-0", "opacity-100");
            tenAMHumidity.textContent = `${data.forecast.forecastday[0].hour[10].humidity}%`;
            tenAMWindSpeed.classList.replace("opacity-0", "opacity-100");
            tenAMWindSpeed.textContent = `${data.forecast.forecastday[0].hour[10].wind_kph}km/h`;
            tenAMRainChance.classList.replace("opacity-0", "opacity-100");
            tenAMRainChance.textContent = `${data.forecast.forecastday[0].hour[10].chance_of_rain}%`;

            twelvePMHour.classList.replace("opacity-0", "opacity-100");
            twelvePMTemp.classList.replace("opacity-0", "opacity-100");
            twelvePMTemp.textContent = `${data.forecast.forecastday[0].hour[12].temp_c}°C`;
            twelvePMHumidity.classList.replace("opacity-0", "opacity-100");
            twelvePMHumidity.textContent = `${data.forecast.forecastday[0].hour[12].humidity}%`;
            twelvePMWindSpeed.classList.replace("opacity-0", "opacity-100");
            twelvePMWindSpeed.textContent = `${data.forecast.forecastday[0].hour[12].wind_kph}km/h`;
            twelvePMRainChance.classList.replace("opacity-0", "opacity-100");
            twelvePMRainChance.textContent = `${data.forecast.forecastday[0].hour[12].chance_of_rain}%`;

            twoPMHour.classList.replace("opacity-0", "opacity-100");
            twoPMTemp.classList.replace("opacity-0", "opacity-100");
            twoPMTemp.textContent = `${data.forecast.forecastday[0].hour[14].temp_c}°C`;
            twoPMHumidity.classList.replace("opacity-0", "opacity-100");
            twoPMHumidity.textContent = `${data.forecast.forecastday[0].hour[14].humidity}%`;
            twoPMWindSpeed.classList.replace("opacity-0", "opacity-100");
            twoPMWindSpeed.textContent = `${data.forecast.forecastday[0].hour[14].wind_kph}km/h`;
            twoPMRainChance.classList.replace("opacity-0", "opacity-100");
            twoPMRainChance.textContent = `${data.forecast.forecastday[0].hour[14].chance_of_rain}%`;

            fourPMHour.classList.replace("opacity-0", "opacity-100");
            fourPMTemp.classList.replace("opacity-0", "opacity-100");
            fourPMTemp.textContent = `${data.forecast.forecastday[0].hour[16].temp_c}°C`;
            fourPMHumidity.classList.replace("opacity-0", "opacity-100");
            fourPMHumidity.textContent = `${data.forecast.forecastday[0].hour[16].humidity}%`;
            fourPMWindSpeed.classList.replace("opacity-0", "opacity-100");
            fourPMWindSpeed.textContent = `${data.forecast.forecastday[0].hour[16].wind_kph}km/h`;
            fourPMRainChance.classList.replace("opacity-0", "opacity-100");
            fourPMRainChance.textContent = `${data.forecast.forecastday[0].hour[16].chance_of_rain}%`;

            sixPMHour.classList.replace("opacity-0", "opacity-100");
            sixPMTemp.classList.replace("opacity-0", "opacity-100");
            sixPMTemp.textContent = `${data.forecast.forecastday[0].hour[18].temp_c}°C`;
            sixPMHumidity.classList.replace("opacity-0", "opacity-100");
            sixPMHumidity.textContent = `${data.forecast.forecastday[0].hour[18].humidity}%`;
            sixPMWindSpeed.classList.replace("opacity-0", "opacity-100");
            sixPMWindSpeed.textContent = `${data.forecast.forecastday[0].hour[18].wind_kph}km/h`;
            sixPMRainChance.classList.replace("opacity-0", "opacity-100");
            sixPMRainChance.textContent = `${data.forecast.forecastday[0].hour[18].chance_of_rain}%`;

            eightPMHour.classList.replace("opacity-0", "opacity-100");
            eightPMTemp.classList.replace("opacity-0", "opacity-100");
            eightPMTemp.textContent = `${data.forecast.forecastday[0].hour[20].temp_c}°C`;
            eightPMHumidity.classList.replace("opacity-0", "opacity-100");
            eightPMHumidity.textContent = `${data.forecast.forecastday[0].hour[20].humidity}%`;
            eightPMWindSpeed.classList.replace("opacity-0", "opacity-100");
            eightPMWindSpeed.textContent = `${data.forecast.forecastday[0].hour[20].wind_kph}km/h`;
            eightPMRainChance.classList.replace("opacity-0", "opacity-100");
            eightPMRainChance.textContent = `${data.forecast.forecastday[0].hour[20].chance_of_rain}%`;

            tenPMHour.classList.replace("opacity-0", "opacity-100");
            tenPMTemp.classList.replace("opacity-0", "opacity-100");
            tenPMTemp.textContent = `${data.forecast.forecastday[0].hour[22].temp_c}°C`;
            tenPMHumidity.classList.replace("opacity-0", "opacity-100");
            tenPMHumidity.textContent = `${data.forecast.forecastday[0].hour[22].humidity}%`;
            tenPMWindSpeed.classList.replace("opacity-0", "opacity-100");
            tenPMWindSpeed.textContent = `${data.forecast.forecastday[0].hour[22].wind_kph}km/h`;
            tenPMRainChance.classList.replace("opacity-0", "opacity-100");
            tenPMRainChance.textContent = `${data.forecast.forecastday[0].hour[22].chance_of_rain}%`;

            twelveAMHour.classList.replace("opacity-0", "opacity-100");
            twelveAMTemp.classList.replace("opacity-0", "opacity-100");
            twelveAMTemp.textContent = `${data.forecast.forecastday[0].hour[0].temp_c}°C`;
            twelveAMHumidity.classList.replace("opacity-0", "opacity-100");
            twelveAMHumidity.textContent = `${data.forecast.forecastday[0].hour[0].humidity}%`;
            twelveAmWindSpeed.classList.replace("opacity-0", "opacity-100");
            twelveAmWindSpeed.textContent = `${data.forecast.forecastday[0].hour[0].wind_kph}km/h`;
            twelveAMRainChance.classList.replace("opacity-0", "opacity-100");
            twelveAMRainChance.textContent = `${data.forecast.forecastday[0].hour[0].chance_of_rain}%`;

            twoAMHour.classList.replace("opacity-0", "opacity-100");
            twoAMTemp.classList.replace("opacity-0", "opacity-100");
            twoAMTemp.textContent = `${data.forecast.forecastday[0].hour[2].temp_c}°C`;
            twoAMHumidity.classList.replace("opacity-0", "opacity-100");
            twoAMHumidity.textContent = `${data.forecast.forecastday[0].hour[2].humidity}%`;
            twoAMWindSpeed.classList.replace("opacity-0", "opacity-100");
            twoAMWindSpeed.textContent = `${data.forecast.forecastday[0].hour[2].wind_kph}km/h`;
            twoAMRainChance.classList.replace("opacity-0", "opacity-100");
            twoAMRainChance.textContent = `${data.forecast.forecastday[0].hour[2].chance_of_rain}%`;

            fourAMHour.classList.replace("opacity-0", "opacity-100");
            fourAMTemp.classList.replace("opacity-0", "opacity-100");
            fourAMTemp.textContent = `${data.forecast.forecastday[0].hour[4].temp_c}°C`;
            fourAMHumidity.classList.replace("opacity-0", "opacity-100");
            fourAMHumidity.textContent = `${data.forecast.forecastday[0].hour[4].humidity}%`;
            fourAMWindSpeed.classList.replace("opacity-0", "opacity-100");
            fourAMWindSpeed.textContent = `${data.forecast.forecastday[0].hour[4].wind_kph}km/h`;
            fourAMRainChance.classList.replace("opacity-0", "opacity-100");
            fourAMRainChance.textContent = `${data.forecast.forecastday[0].hour[4].chance_of_rain}%`;
          }, 300);
        });
      } catch (error) {
        errorText.classList.replace("opacity-0", "opacity-100");
        errorText.textContent = error;
        setTimeout(() => {
          errorText.classList.replace("opacity-100", "opacity-0");
        }, 1500);
      }
    }
  }
  enterButton.addEventListener("click", getWeather);
  document.addEventListener("keydown", getWeather);
  document.addEventListener("DOMContentLoaded", getWeather);
})();
