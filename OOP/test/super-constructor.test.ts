describe("Super Constructor", () => {
  class Person {
    name: string;

    constructor(name: string) {
      this.name = name;
    }
  }

  class Employee extends Person {
    description: string;

    constructor(name: string, description: string) {
      super(name);
      this.description = description;
    }
  }

  it("should support super constructor", () => {
    const employee = new Employee("Employee", "Employee description");
    console.info(employee.name);
    console.info(employee.description);
  });
});
