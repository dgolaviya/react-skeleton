import { combineReducers } from "redux";
import authReducer from "./authReducers";
import userReducer from "./userReducer";

export default combineReducers({
  auth: authReducer,
  userInfo: userReducer,
});
