import { auth } from './auth';
import { combineReducers } from "redux";
import { products } from "./products";

const rootReducer = combineReducers({
  products,
  auth
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
