import "../css/reset.css";
import "../css/style.css";
import "../css/body.css";
import "../css/header-body.css";
import "../css/autocomplete-header.css";
import "../css/media.css";
import "../css/main-body.css";
import "../css/hours_detailed-main.css";
import "../css/next_days-main.css";
import "../css/loading.css";
import "./weather-app.js";
import { askCurWeatherForACity } from "./api/askCurWeatherForACity.js";
import { askWeatherForecastFreePlan } from "./api/askTodayWeatherStatistics.js";
import WeatherApp from "./weather-app.js";

/* import { autocompleteInput } from "./api/search-autocomplete";
console.log(await autocompleteInput("Lo*")); */

const app = new WeatherApp(document.body);

/* console.log("cur", await askCurWeatherForACity("asddsadas"));
console.log("his", await askWeatherForecastFreePlan("asddasdas")); */
