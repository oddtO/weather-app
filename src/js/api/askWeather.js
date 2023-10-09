async function askWeatherForACity(apiUrl, cityName) {
  apiUrl.searchParams.set("q", cityName);
  const response = await fetch(apiUrl, { mode: "cors" });
  const responseJson = response.json();

  return responseJson;
}

export { askWeatherForACity };
