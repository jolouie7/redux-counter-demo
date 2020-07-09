// Assuming you have more then one reducer
import { combineReducers } from "redux";
import productReducer from "./ProductReducer";
import counterReducer from "./CounterReducer"

export default combineReducers({
  productReducer,
  counterReducer
});