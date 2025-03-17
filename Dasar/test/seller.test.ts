import { Seller } from "../src/seller";

describe("Interface", () => {
  it("should support in typescript", () => {
    const seller: Seller = {
      id: 1,
      name: "John Doe",
      address: "Jl. Raya",
      phone: "08123456789",
      email: "john@gmail.com",
    };

    // seller.phone = "123";  // gabisa karena readonly
    console.info(seller);
  });
});
