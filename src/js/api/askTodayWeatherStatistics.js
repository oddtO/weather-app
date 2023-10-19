import { askWeatherForACity } from "./askWeather";
import { createWeatherApi } from "./api";
import { format } from "date-fns";

const forecastWeatherUrl = createWeatherApi("forecast.json");

export function askWeatherForecast(cityName, days) {
  forecastWeatherUrl.searchParams.set("days", days);
  return askWeatherForACity(forecastWeatherUrl, cityName);
}

export function askTodayWeatherForecast(cityName) {
  return askWeatherForecast(cityName, 1);
}

export function askWeatherForecastFreePlan(cityName) {
  return askWeatherForecast(cityName, 3);
}
