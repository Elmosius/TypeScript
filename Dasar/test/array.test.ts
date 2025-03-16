describe("array", () => {
  it("should same", () => {
    const names: string[] = ["John Doe", "Jane Doe", "Alice"];
    const values: number[] = [1000, 2000, 3000];
    const hobbies: ReadonlyArray<string> = ["Reading", "Coding", "Traveling"];

    console.info(names);
    console.info(values);

    console.info(hobbies[0]);
    console.info(hobbies[1]);
    console.info(hobbies[2]);
  });

  it("should support tupple", () => {
    const person: readonly [string, string, number] = [
      "John Doe",
      "Jakarta",
      1000,
    ];

    console.info(person);
  });
});
