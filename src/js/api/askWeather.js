import { UserError } from "./error.js";
async function askWeatherForACity(apiUrl, cityName) {
  apiUrl.searchParams.set("q", cityName);
  const response = await fetch(apiUrl, { mode: "cors" });

  const responseJson = response.json();
  if (response.status != 200) throw new UserError("error in api", responseJson);
  return responseJson;
}

export { askWeatherForACity };
