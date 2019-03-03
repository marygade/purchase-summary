import discount from "../../src/reducers/applyPromo";

describe("todos reducer", () => {
  it("should return the default discount", () => {
    expect(discount(undefined, {})).toEqual(0);
  });

  it("should return 10 as discount when promo code DISCOUNT is applied", () => {
    const action = { type: "DISCOUNT" };
    expect(discount(undefined, action)).toEqual(10);
  });
});
