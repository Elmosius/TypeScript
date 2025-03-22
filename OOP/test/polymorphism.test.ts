describe("Polymorphism", () => {
  class Employee {
    constructor(public name: string) {}
  }

  class Manager extends Employee {}

  class VicePresident extends Manager {}

  function sayHello(employee: Employee): void {
    if (employee instanceof VicePresident) {
      const vp = employee as VicePresident;
      console.info(`Hello Vice President ${vp.name}`);
    } else if (employee instanceof Manager) {
      const manager = employee as Manager;
      console.info(`Hello Manager ${manager.name}`);
    } else {
      console.info(`Hello Employee ${employee.name}`);
    }
  }

  it("should work", () => {
    let employee: Employee = new Employee("Budi");
    console.info(employee);

    employee = new Manager("Budi");
    console.info(employee);

    employee = new VicePresident("Budi");
    console.info(employee);
  });

  it("should support method polymorphism", () => {
    sayHello(new Employee("Budi"));
    sayHello(new Manager("Joko"));
    sayHello(new VicePresident("Dedi"));
  });
});
