import "../css/reset.css";
import "../css/style.css";
import "../css/body.css";
import "../css/header-body.css";
import "../css/media.css";
import "../css/main-body.css";
import "../css/hours_detailed-main.css";
import "../css/next_days-main.css";
import "../css/loading.css";
import "./weather-app.js";
import { askCurWeatherForACity } from "./api/askCurWeatherForACity.js";
import { askTodayWeatherStatistics } from "./api/askTodayWeatherStatistics.js";
import WeatherApp from "./weather-app.js";

const app = new WeatherApp(document.body);

/* console.log("cur", await askCurWeatherForACity("Cherkasy"));
console.log("his", await askTodayWeatherStatistics("Cherkasy")); */
