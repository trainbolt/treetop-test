import axios from "axios";
import { SEARCH_GIFS, GET_TRENDING, GET_RANDOM } from "./types";

const giphyHost = "//api.giphy.com";
const giphyApiKey = "DwDE713ufsjibHSrbgOQioH6xM7GnRdY";

export const searchGifs = searchTerm => async dispatch => {
  const res = await axios.get(
    `${giphyHost}/v1/gifs/search?q=${searchTerm}&limit=24&api_key=${giphyApiKey}`
  );
  dispatch({
    type: SEARCH_GIFS,
    payload: res.data.data
  });
};

export const getTrending = () => async dispatch => {
  const res = await axios.get(
    `${giphyHost}/v1/gifs/trending?limit=24&api_key=${giphyApiKey}`
  );
  dispatch({
    type: GET_TRENDING,
    payload: res.data.data
  });
};

export const getRandom = () => async dispatch => {
  const res = await axios.get(
    `${giphyHost}/v1/gifs/random?rating=g&api_key=${giphyApiKey}`
  );
  dispatch({
    type: GET_RANDOM,
    payload: res.data.data
  });
};
