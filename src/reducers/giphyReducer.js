import { SEARCH_GIFS, GET_TRENDING, GET_RANDOM } from "../actions/types";

export default function(
  state = { trending: [], search: [], randomGif: false },
  action
) {
  switch (action.type) {
    case SEARCH_GIFS:
      return {
        ...state,
        search: action.payload
      };
    case GET_TRENDING:
      return {
        ...state,
        trending: action.payload
      };
    case GET_RANDOM:
      return {
        ...state,
        randomGif: action.payload
      };
    default:
      return state;
  }
}
