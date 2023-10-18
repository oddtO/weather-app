import { askWeatherForACity } from "./askWeather";
import { createWeatherApi } from "./api";

const curWeatherUrl = createWeatherApi("current.json");

export function askCurWeatherForACity(cityName) {
  return askWeatherForACity(curWeatherUrl, cityName);
}
