import { Seller } from "../src/seller";
import { Employee, Manager } from "../src/employee";

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
});
