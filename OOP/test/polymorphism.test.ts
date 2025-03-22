describe("Polymorphism", () => {
  class Employee {
    constructor(public name: string) {}
  }

  class Manager extends Employee {}

  class VicePresident extends Manager {}

  function sayHello(employee: Employee): void {
    console.info(employee.name);
  }

  it("should work", () => {
    let employee: Employee = new Employee("Budi");
    console.info(employee);

    employee = new Manager("Budi");
    console.info(employee);

    employee = new VicePresident("Budi");
    console.info(employee);
  });

  it("should suport method polymorphism", () => {
    sayHello(new Employee("Budi"));
    sayHello(new Manager("Joko"));
    sayHello(new VicePresident("Dedi"));
  });
});
