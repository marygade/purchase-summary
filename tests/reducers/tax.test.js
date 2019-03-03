import tax from "./tax";

describe("todos reducer", () => {
  it("should return the default discount", () => {
    expect(tax(undefined, {})).toEqual(10.06);
  });
});
