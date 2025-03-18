describe("Class", () => {
  class Customer {
    constructor() {
      console.log("Customer created");
    }
  }

  class Order {
    constructor() {
      console.info("Order created");
    }
  }

  it("should can be create class", () => {
    const customer: Customer = new Customer();
    const order: Order = new Order();
  });
});
