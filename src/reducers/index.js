import { combineReducers } from "redux";
import promo from "./applyPromo";
import product from "./product";
import savings from "./savings";
import tax from "./tax";

export default combineReducers({
  product,
  promo,
  savings,
  tax
});
