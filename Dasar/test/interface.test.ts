import { Seller } from "../src/seller";
import { Employee, Manager } from "../src/employee";
import { Person } from "../src/person";

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

  it("should support function interface in typescript", () => {
    interface AddFunction {
      (a: number, b: number): number;
    }

    const add: AddFunction = (value1: number, value2: number) => {
      return value1 + value2;
    };

    expect(add(2, 2)).toBe(4);
  });

  it("should support indexable interface", () => {
    interface StringArray {
      [index: number]: string;
    }

    const names: StringArray = ["John", "Doe"];
    console.info(names);
    expect(names[0]).toBe("John");

    interface StringDictionary {
      [key: string]: string;
    }

    const dictionary: StringDictionary = {
      name: "John Doe",
      age: "30",
    };

    console.info(dictionary);
    expect(dictionary["name"]).toBe("John Doe");
  });

  it("should support extends interface", () => {
    const Udin: Employee = {
      id: 1,
      name: "Udin",
      division: "IT",
    };

    const Elmo: Manager = {
      id: "M1",
      name: "Elmo",
      division: "IT",
      numberOfEmployees: 10,
    };

    console.info(Udin);
    console.info(Elmo);
  });

  it("should support function interface atr", () => {
    interface Person {
      name: string;
      age: number;
      greet(): string;
    }

    const person: Person = {
      name: "John Doe",
      age: 30,
      greet() {
        return `Hello, my name is ${this.name} now I'm ${this.age} years old`;
      },
    };

    console.info(person.greet());
  });

  it("should support intersection interface", () => {
    interface A {
      a: string;
    }

    interface B {
      b: string;
    }

    type C = A & B;

    const c: C = {
      a: "a",
      b: "b",
    };

    console.info(c);
  });

  it("should support assertions", () => {
    const person: any = {
      name: "John Doe",
      age: 30,
    };

    const person2: Person = person as Person;
    console.info(person2);
  });

  it("should support default value", () => {
    function sayHello(name: string = "Guest"): string {
      return `Hello, my name is ${name}`;
    }

    console.info(sayHello());
  });

  it("should support rest parameter", () => {
    function sum(...values: number[]): number {
      let total = 0;

      for (const value of values) {
        total += value;
      }
      return total;
    }

    expect(sum(1, 2, 3)).toBe(6);
  });

  it("should support optional parameter", () => {
    function sayHello(firstName: string, lastName?: string): string {
      if (lastName) {
        return `Hello, my name is ${firstName} ${lastName}`;
      } else {
        return `Hello, my name is ${firstName}`;
      }
    }

    console.info(sayHello("John"));
    console.info(sayHello("John", "Doe"));
  });

  it("should support function overlaoding", () => {
    function A(a: number): number;
    function A(a: string): string;
    function A(a: any): any {
      if (typeof a === "number") {
        return a * 10;
      } else {
        return a;
      }
    }

    expect(A(1)).toBe(10);
    expect(A("Hello World")).toBe("Hello World");
  });
});
