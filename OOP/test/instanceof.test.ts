describe("Operator Instance Of", () => {
  class Person {}

  class Employee extends Person {}

  class Manager extends Person {}

  it("should have problem using typeof", () => {
    const budi = new Employee();
    const joko = new Manager();

    console.info(typeof budi);
    console.info(typeof joko);
  });

  it("should no problem using instance of", () => {
    const budi = new Employee();
    const joko = new Manager();

    console.info(budi instanceof Person);
    console.info(joko instanceof Employee);
  });
});
