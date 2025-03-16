describe("Object Type", () => {
  it("should support in typescript", () => {
    const person: { id: string | number; name: string } = {
      id: 1,
      name: "John Doe",
    };

    console.info(person);

    person.id = "1";
    console.info(person);
  });
});
