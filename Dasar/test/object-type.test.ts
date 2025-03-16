describe("Object Type", () => {
  it("should support in typescript", () => {
    const person: { id: string | number; name: string; hobbies?: string[] } = {
      id: 1,
      name: "John Doe",
      hobbies: ["Reading", "Coding"],
    };

    console.info(person);

    person.id = "1";
    console.info(person);

    person.hobbies?.push("Traveling");
    console.info(person);
  });
});
