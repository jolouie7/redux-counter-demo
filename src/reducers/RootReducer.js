// Assuming you have more then one reducer
import { combineReducers } from "redux";
import products from "./ProductReducer";
import counter from "./CounterReducer"

export default combineReducers({
  products,
  counter
});