describe("Properties", () => {
  class Customer {
    readonly id;
    name: string;
    age?: number;

    constructor(id: number, name: string, age?: number) {
      this.id = id;
      this.name = name;
      this.age = age;
    }

    sayHello(name: string) {
      console.log(`Hello ${name}, my name is ${this.name}`);
    }
  }

  it("should can have properties", () => {
    const customer1 = new Customer(1, "John Doe");
    const customer2 = new Customer(1, "", 20);

    console.info(customer1.id);
    console.info(customer1.name);

    console.info(customer2.age);
  });

  it("should can have methods", () => {
    const customer = new Customer(1, "John Doe");

    customer.sayHello("Jane Doe");
  });
});
