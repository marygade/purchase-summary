import { APPLY_PROMO_CODE } from "./types";

export const handleSubmit = (e) => ({
    type : APPLY_PROMO_CODE,
    payload : e.target.value
  });
