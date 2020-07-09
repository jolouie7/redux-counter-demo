// Assuming you have more then one reducer
import { combineReducers } from "redux";
import products from "./ProductReducer";

export default combineReducers({
  products,
});