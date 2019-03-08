import { PROMO_CODE, APPLY_PROMO_CODE } from "../actions/types";

const MOCK_DISCOUNT_VAL = 10;
const MOCK_PROMO_CODE = "DISCOUNT";

const initialState = {
  discount : 0,
  promoCode : "",
  isPromoCodeApplied : false,
  isPromoCodeValid : false
};

export default function promo(state = initialState, action) {
  switch (action.type) {
    case PROMO_CODE:
      return {
        ...state,
        promoCode : action.payload,
        isPromoCodeApplied : false
      };
    case APPLY_PROMO_CODE:
      return {
        ...state,
        discount : state.promoCode.toUpperCase() === MOCK_PROMO_CODE ? MOCK_DISCOUNT_VAL : 0,
        isPromoCodeValid : state.promoCode.toUpperCase() === MOCK_PROMO_CODE ? true : false,
        isPromoCodeApplied : true
      };
    default:
      return state;
  }
}
