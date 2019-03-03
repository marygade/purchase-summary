import { combineReducers } from "redux";
import discount from "./applyPromo";
import product from "./product";
import savings from "./savings";
import tax from "./tax";

export default combineReducers({
  product,
  discount,
  savings,
  tax
});
