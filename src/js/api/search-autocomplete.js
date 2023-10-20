import { createWeatherApi } from "./api";
import { askWeatherForACity } from "./askWeather";

const searchApiUrl = createWeatherApi("search.json");

export function autocompleteInput(input) {
  return askWeatherForACity(searchApiUrl, input + "*");
}
