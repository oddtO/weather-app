import "../css/reset.css";
import "../css/style.css";
import "../css/body.css";
import "../css/header-body.css";
import "../css/media.css";
import "../css/main-body.css";
import { askCurWeatherForACity } from "./api/askCurWeatherForACity.js";
import { askTodayWeatherStatistics } from "./api/askTodayWeatherStatistics.js";

console.log("cur", await askCurWeatherForACity("Cherkasy"));
console.log("his", await askTodayWeatherStatistics("Cherkasy"));
