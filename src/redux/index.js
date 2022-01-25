import { combineReducers } from "redux";
import authReducer from "./slices/auth";
import postReducer from "./slices/posts";
const rootReducer = combineReducers({
  posts: postReducer,
  auth: authReducer,
});

export default rootReducer;
