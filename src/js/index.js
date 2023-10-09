import "../css/reset.css";
import "../css/style.css";

const API_KEY = "aea933f100c44dcb81f185825230810";

const BASE_URL = new URL("https://api.weatherapi.com/v1");

const curWeatherUrl = createApi("current.json");

console.log(await askCurWeatherForACity("London"));

function createApi(method) {
  const apiUrl = new URL(BASE_URL);
  apiUrl.pathname += `/${method}`;
  apiUrl.searchParams.set("key", API_KEY);

  return apiUrl;
}

async function askCurWeatherForACity(cityName) {
  curWeatherUrl.searchParams.set("q", cityName);
  const response = await fetch(curWeatherUrl, { mode: "cors" });
  const responseJson = await response.json();

  return responseJson;
}
