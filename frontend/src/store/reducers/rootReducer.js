import { combineReducers } from "redux";

import authReducer from "./authReducers";

//root de reducer para poder agrupar los diferentes reducer de usuarios y todo
const rootReducer = combineReducers({
  auth: authReducer,
});

export default rootReducer;
