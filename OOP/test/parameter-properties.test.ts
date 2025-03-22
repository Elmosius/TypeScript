describe("Parameter Properties", () => {
  class Person {
    // cara lain untuk mendeklarasikan property kita bisa langsung di parameter constructor
    constructor(public name: string) {}
  }

  it("should support parameter properties", () => {
    const person = new Person("John Doe");
    console.info(person.name);
  });
});
