const API_KEY = "aea933f100c44dcb81f185825230810";

const BASE_URL = new URL("https://api.weatherapi.com/v1");

export function createApi(method) {
  const apiUrl = new URL(BASE_URL);
  apiUrl.pathname += `/${method}`;
  apiUrl.searchParams.set("key", API_KEY);

  return apiUrl;
}
