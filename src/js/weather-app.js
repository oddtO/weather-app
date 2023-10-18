import { askCurWeatherForACity } from "./api/askCurWeatherForACity.js";
import { searchGif } from "./api/giphy.js";

export default class weatherApp {
  constructor(body) {
    this.searchFormElem = body.querySelector("header > form");
    this.searchInputElem = this.searchFormElem.city;
    this.searchFormElem.addEventListener(
      "submit",
      this.getWeatherData.bind(this),
    );

    this.conditionDetailed = {
      gifElem: body.querySelector(".weather-gif-wrapper > img"),
      countryElem: body.querySelector(".country"),
      cityElem: body.querySelector(".city"),
      iconElem: body.querySelector(".weather-condition > img"),
      temperatureAmount: body.querySelector(".temperature > .number"),
      temperatureScale: body.querySelector(".temperature > scale-temperature"),
    };
  }

  async getWeatherData(event) {
    event.preventDefault();
    await this.updateWeatherData();
    await this.renderConditionDetailed();
    console.log(this.response);
  }
  async renderWeatherData() {
    await this.renderConditionDetailed();
  }

  async renderConditionDetailed() {
    const gifs = await searchGif(this.response.current.condition.text);
    this.conditionDetailed.gifElem.src = gifs.data[0].images.original.url;
  }
  async updateWeatherData() {
    this.response = await this.fetchWeatherData(this.searchInputElem.value);
  }
  fetchWeatherData(cityName) {
    return askCurWeatherForACity(cityName);
  }
}
