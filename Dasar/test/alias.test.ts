import { Category, Product } from "../src/alias";

describe("Alias", () => {
  it("should support in typescript", () => {
    const category: Category = {
      id: 1,
      name: "Electronics",
    };

    const product: Product = {
      id: "1",
      name: "Laptop",
      price: 1000,
      category: category,
    };

    console.info(product);
    console.info(product);
  });
});
