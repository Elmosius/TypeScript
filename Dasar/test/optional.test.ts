describe("Optional", () => {
  it("should support null and undefined", () => {
    function sayHello(name?: string | undefined) {
      if (name) {
        console.info(`Hello ${name}`);
      } else {
        console.info("Hello");
      }
    }

    sayHello("Elmo");
    const x: string | undefined = undefined;
    sayHello(x);
  });
});
