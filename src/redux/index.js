import { combineReducers } from "redux";
import postReducer from "./slices/posts";
const rootReducer = combineReducers({
  posts: postReducer,
});

export default rootReducer;
