import lightReducer from "./LightReducer";
import tvReducer from "./TvReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  lightReducer,
  tvReducer,
});

export default rootReducer;
