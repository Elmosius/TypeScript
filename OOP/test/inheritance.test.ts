describe("Inheritance", () => {
  class Employee {
    name: string;

    constructor(name: string) {
      this.name = name;
    }
  }

  class Manager extends Employee {}

  class Director extends Manager {}

  it("should can be create inheritance", () => {
    const employee = new Employee("Employee");
    console.info(employee.name);

    const manager = new Manager("Manager");
    console.info(manager.name);

    const director = new Director("Director");
    console.info(director.name);
  });
});
