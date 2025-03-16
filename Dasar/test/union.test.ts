describe("Union", () => {
  it("should support in typescript", () => {
    let sample: string | number | boolean = "Hello World";
    console.info(sample);

    sample = 100;
    console.info(sample);

    sample = true;
    console.info(sample);

    // ini pasti error
    // sample = [1, 2, 3];
  });

  it("should support typeof operator", () => {
    function process(value: string | number | boolean) {
      if (typeof value === "string") {
        return value.toLowerCase();
      } else if (typeof value === "number") {
        return value + 2;
      } else {
        return !value;
      }
    }

    expect(process("Hello")).toBe("hello");
    expect(process(100)).toBe(102);
    expect(process(true)).toBe(false);
  });
});
