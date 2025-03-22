describe("Interface", () => {
  interface HasName {
    name: string;
  }

  interface CanSayHello {
    sayHello(name: string): string;
  }

  class Person implements HasName, CanSayHello {
    name: string;

    constructor(name: string) {
      this.name = name;
    }

    sayHello(name: string) {
      return `Hello ${name}, my name is ${this.name}`;
    }
  }

  it("should support interface", () => {
    const person = new Person("John Doe");

    console.info(person.sayHello("Budi"));
  });
});
