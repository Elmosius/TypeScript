describe("Overriding", () => {
  class Employee {
    name: string;

    constructor(name: string) {
      this.name = name;
    }
    sayHello(name: string) {
      return `Hello ${name}, my name is ${this.name}`;
    }
  }

  class Manager extends Employee {
    sayHello(name: string) {
      return `Hello ${name}, my name is ${this.name}, I'm your Manager`;
    }
  }

  it("should support overriding", () => {
    const employee = new Employee("John Doe");
    console.info(employee.sayHello("Budi"));

    const manager = new Manager("Bimo");
    console.info(manager.sayHello("Budi"));
  });
});
