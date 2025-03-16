describe("any", () => {
  it("should support in typescript", () => {
    const person: any = {
      id: 1,
      name: "John Doe",
      age: 30,
    };

    person.age = "30";
    console.info(person);
  });
});
