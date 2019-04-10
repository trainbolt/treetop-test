import { combineReducers } from "redux";
import giphyReducer from "./giphyReducer";

export default combineReducers({
  giphy: giphyReducer
});
