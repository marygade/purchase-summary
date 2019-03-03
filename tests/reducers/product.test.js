import product from "./product";

describe("todos reducer", () => {
  it("should return the default discount", () => {
    const response = {
      id: 1,
      zipcode: 95050,
      img:
        "https://i5.walmartimages.com/asr/e73e1252-642c-4473-93ea-fd3b564a7027_1.3e81ea58fa3042452fe185129a4a865f.jpeg?odnWidth=undefined&odnHeight=undefined&odnBg=ffffff",
      title: "OFM Essentials Racecar-Style Leather Gaming Chair, Multiple Colors",
      price: 109.72,
      quantity: 1,
      description: "Actual color: Red"
    };
    expect(product(undefined, {})).toEqual(response);
  });
});
