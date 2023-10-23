import { createApi } from "./api.js";

const BASE_GIFS_API = new URL("https://api.giphy.com/v1/gifs");
const API_KEY = "SPTXvu03oRCg29rDUFlQrAbkBpwpp9RG";

const giphySearchApi = createGiphyApi("search");

export async function searchGif(query) {
  giphySearchApi.searchParams.set("q", query);
  const response = await fetch(giphySearchApi, { mode: "cors" });
  return response.json();
}

function createGiphyApi(method) {
  return createApi(BASE_GIFS_API, method, "api_key", API_KEY);
}
