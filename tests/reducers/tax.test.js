import tax from "../../src/reducers/tax";

describe("todos reducer", () => {
  it("should return the default discount", () => {
    expect(tax(undefined, {})).toEqual(10.06);
  });
});
