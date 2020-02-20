import { combineReducers } from "redux";
import auth from "./auth";
import channelReducer from "./channelReducer";

export default combineReducers({ auth, channelReducer });