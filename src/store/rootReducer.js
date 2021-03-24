import { combineReducers } from "redux";
import jobsReducer from "./reducer/jobs";

export default combineReducers({
  jobs: jobsReducer,
});
