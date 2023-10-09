import "../css/reset.css";
import "../css/style.css";
import { askCurWeatherForACity } from "./api/askCurWeatherForACity.js";
import { askTodayWeatherStatistics } from "./api/askTodayWeatherStatistics.js";
console.log("cur", await askCurWeatherForACity("Cherkasy"));
console.log("his", await askTodayWeatherStatistics("Cherkasy"));
