import { askWeatherForACity } from "./askWeather";
import { createApi } from "./api";

const curWeatherUrl = createApi("current.json");

export function askCurWeatherForACity(cityName) {
  return askWeatherForACity(curWeatherUrl, cityName);
}
