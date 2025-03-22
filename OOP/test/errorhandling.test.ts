describe("Error Handling", () => {
  class ValidationError extends Error {
    constructor(public message: string) {
      super(message);
    }
  }
  function doubleIt(value: number): number {
    if (value <= 0) {
      throw new ValidationError("Value must be greater than 0");
    }
    return value * 2;
  }

  it("should work", () => {
    try {
      const result = doubleIt(-1);
    } catch (error) {
      if (error instanceof ValidationError) {
        console.info("Validation error: ", error.message);
      }
    }
  });
});
