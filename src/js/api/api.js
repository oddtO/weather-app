const API_KEY = "aea933f100c44dcb81f185825230810";

const BASE_URL = new URL("https://api.weatherapi.com/v1");

export function createApi(baseUrl, method, apiKeyFieldName, apiKey) {
  const apiUrl = new URL(baseUrl);
  apiUrl.pathname += `/${method}`;
  apiUrl.searchParams.set(apiKeyFieldName, apiKey);

  return apiUrl;
}

export function createWeatherApi(method) {
  return createApi(BASE_URL, method, "key", API_KEY);
}
