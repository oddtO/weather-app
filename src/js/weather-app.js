import { askCurWeatherForACity } from "./api/askCurWeatherForACity.js";
import { askWeatherForecastFreePlan } from "./api/askTodayWeatherStatistics.js";
import { searchGif } from "./api/giphy.js";
import { format } from "date-fns";
import { autocompleteInput } from "./api/search-autocomplete.js";

export default class WeatherApp {
  static CELSIUS_SIGN = "°C";
  static FAHRENHEIT_SIGN = "°F";
  constructor(body) {
    this.searchFormElem = body.querySelector("header > form");
    this.searchInputElem = this.searchFormElem.city;

    this.searchFormElem.addEventListener(
      "submit",
      this.getWeatherData.bind(this),
    );
    this.weatherModeSelect = body.querySelector(".weather-mode-select");

    for (const input of this.weatherModeSelect.querySelectorAll("input")) {
      input.addEventListener("change", () => {
        this.renderWeatherData();
      });
    }
    this.conditionDetailed = {
      gifElem: body.querySelector(".weather-gif-wrapper > img"),
      countryElem: body.querySelector(".country"),
      cityElem: body.querySelector(".city"),
      iconElem: body.querySelector(".weather-condition > img"),
      temperatureAmount: body.querySelector(
        ".weather-condition > .temperature > .number",
      ),
      temperatureScale: body.querySelector(
        ".weather-condition > .temperature > .scale-temperature",
      ),
      feelsLikeAmount: body.querySelector(
        ".feels-like-condition > .temperature > .number",
      ),
      feelsLikeScale: body.querySelector(
        ".feels-like-condition > .temperature > .scale-temperature",
      ),
      conditionName: body.querySelector(".name-condition"),
      chanceOfRain: body.querySelector(".chance-of-rain > .chance"),
      currentTime: body.querySelector(".condition-detailed > time"),
    };

    this.hoursTodayRows = body.querySelectorAll(".table-wrapper tr");
    this.nextDaysConditions = body.querySelectorAll(".next-days > .condition");
    this.autocompleteList = body.querySelector(".autocomplete");
    this.searchSubmitBtn = body.querySelector(
      '.search-wrapper + input[type="submit"]',
    );
    console.log(this);
    this.searchInputElem.addEventListener("input", () => {
      console.log("input");
      this.getAutocompleteData(this.searchInputElem.value);
    });

    this.autocompleteList.addEventListener("click", (event) => {
      const target = event.target;

      if (!(target instanceof HTMLLIElement)) return;
      this.searchInputElem.value = target.dataset.cityName;
      this.searchSubmitBtn.click();
      this.autocompleteList.classList.remove("active");
    });
  }

  async getAutocompleteData(input) {
    if (input.length < 2) {
      this.autocompleteList.classList.remove("active");
      return;
    }

    this.autocompleteList.classList.add("active");
    this.autocompletedEntries = await autocompleteInput(input);
    this.renderAutocompleteData();
  }

  renderAutocompleteData() {
    this.autocompleteList.innerHTML = "";
    for (const cityData of this.autocompletedEntries) {
      this.autocompleteList.insertAdjacentHTML(
        "beforeend",
        `<li data-city-name="${cityData.name}">${cityData.name}</li>`,
      );
    }
  }
  async getWeatherData(event) {
    event.preventDefault();
    await this.updateWeatherData();
    console.log(this.response);
    console.log(this.responseStats);
    this.renderWeatherData();
  }
  renderWeatherData() {
    this.renderConditionDetailed();
    this.renderHoursToday();
    this.renderNextDaysConditions();
  }

  renderConditionDetailed() {
    this.conditionDetailed.gifElem.src = this.gifs.data[0].images.original.url;
    clearTimeout(this.timerId);
    this.timerId = setTimeout(this.changeGifs.bind(this), 3000, 0);
    this.conditionDetailed.countryElem.textContent =
      this.response.location.country;

    this.conditionDetailed.cityElem.textContent = this.response.location.name;
    this.conditionDetailed.iconElem.src =
      "https:" + this.response.current.condition.icon;
    console.log(WeatherApp.isCelcius());
    if (WeatherApp.isCelcius()) {
      this.conditionDetailed.temperatureAmount.textContent =
        this.response.current.temp_c;
      this.conditionDetailed.temperatureScale.textContent =
        WeatherApp.CELSIUS_SIGN;
      this.conditionDetailed.feelsLikeAmount.textContent =
        this.response.current.feelslike_c;

      this.conditionDetailed.feelsLikeScale.textContent =
        WeatherApp.CELSIUS_SIGN;
    } else {
      this.conditionDetailed.temperatureAmount.textContent =
        this.response.current.temp_f;
      this.conditionDetailed.temperatureScale.textContent =
        WeatherApp.FAHRENHEIT_SIGN;
      this.conditionDetailed.feelsLikeAmount.textContent =
        this.response.current.feelslike_f;

      this.conditionDetailed.feelsLikeScale.textContent =
        WeatherApp.FAHRENHEIT_SIGN;
    }
    this.conditionDetailed.conditionName.textContent =
      this.response.current.condition.text;
    this.conditionDetailed.chanceOfRain.textContent =
      this.responseStats.forecast.forecastday[0].hour[
        new Date().getHours()
      ].chance_of_rain;

    this.conditionDetailed.currentTime.textContent =
      this.response.location.localtime;
  }
  renderHoursToday() {
    const hoursToday = this.responseStats.forecast.forecastday[0].hour;
    console.log(this);
    for (let i = 0; i < this.hoursTodayRows.length; ++i) {
      let weatherNumber = null;
      let temperatureScale = null;

      if (WeatherApp.isCelcius()) {
        weatherNumber = hoursToday[i].temp_c;
        temperatureScale = WeatherApp.CELSIUS_SIGN;
      } else {
        weatherNumber = hoursToday[i].temp_f;
        temperatureScale = WeatherApp.FAHRENHEIT_SIGN;
      }
      const tr = this.hoursTodayRows[i];
      console.log(tr);
      const date = new Date(hoursToday[i].time);
      tr.innerHTML = `<td>
				${format(date, "HH:mm")}
			</td><td>
				<img src="${"https:" + hoursToday[i].condition.icon}"/>
			</td><td><span class="temperature"><span class="number">${weatherNumber}</span>
				<span class="scale-temperature">${temperatureScale}</span>

			</span></td>`;
    }
  }
  renderNextDaysConditions() {
    const forecastdays = this.responseStats.forecast.forecastday;
    for (let i = 1; i < forecastdays.length; ++i) {
      let temperatureNumber = null;
      let temperatureScale = null;
      if (WeatherApp.isCelcius()) {
        temperatureNumber = forecastdays[i].day.avgtemp_c;
        temperatureScale = WeatherApp.CELSIUS_SIGN;
      } else {
        temperatureNumber = forecastdays[i].day.avgtemp_f;
        temperatureScale = WeatherApp.FAHRENHEIT_SIGN;
      }
      const nextDate = new Date(forecastdays[i].date);
      this.nextDaysConditions[i - 1].innerHTML = `
<time class="day-of-month">${format(nextDate, "do")}</time>	
<time class="weekday">${format(nextDate, "EEEE")}</time>
<div class="weather-condition">
	<img src="${
    "https:" + forecastdays[i].day.condition.icon
  }" alt="weather condition name">
                        <span class="temperature">
		<span class="number">${temperatureNumber}</span>
		<span class="scale-temperature">${temperatureScale}</span></span>
                    </div>
<strong class="name-condition">${forecastdays[i].day.condition.text}</strong>
`;
    }
  }
  async updateWeatherData() {
    const response = this.fetchWeatherData(this.searchInputElem.value);
    const responseStats = askWeatherForecastFreePlan(
      this.searchInputElem.value,
    );

    [this.response, this.responseStats] = await Promise.all([
      response,
      responseStats,
    ]);

    const hourNow = new Date().getHours();
    this.gifs = await searchGif(
      this.response.current.condition.text +
        " weather " +
        (hourNow >= 20 || hourNow <= 6 ? " night " : " noon "),
    );
  }

  changeGifs(callCount) {
    if (callCount >= this.gifs.data.length) callCount = 0;

    this.conditionDetailed.gifElem.src =
      this.gifs.data[callCount].images.original.url;
    this.timerId = setTimeout(this.changeGifs.bind(this), 3000, ++callCount);
  }
  fetchWeatherData(cityName) {
    return askCurWeatherForACity(cityName);
  }

  static isCelcius() {
    return (
      document.querySelector("input[name='temperature-scale']:checked").value ==
      "celsius"
    );
  }
}
