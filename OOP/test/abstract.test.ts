describe("abstract class", () => {
  abstract class Customer {
    readonly id: number | string;
    abstract _name: string;

    protected constructor(id: number | string) {
      this.id = id;
    }
    abstract sayHello(name: string): void;
  }

  class RegularCustomer extends Customer {
    _name: string;

    constructor(id: number | string, name: string) {
      super(id);
      this._name = name;
    }

    sayHello(name: string): void {
      console.log(`Hello ${name}, my name is ${this._name}`);
    }
  }

  it("should work", () => {
    const customer1 = new RegularCustomer(1, "Budi");
    console.log(customer1.sayHello("Joko"));
  });
});
