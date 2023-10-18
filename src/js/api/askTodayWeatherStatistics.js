import { askWeatherForACity } from "./askWeather";
import { createWeatherApi } from "./api";
import { format } from "date-fns";

const historicalWeatherUrl = createWeatherApi("history.json");

export function askTodayWeatherStatistics(cityName) {
  historicalWeatherUrl.searchParams.set("dt", format(new Date(), "yyyy-MM-dd"));
  return askWeatherForACity(historicalWeatherUrl, cityName);
}
