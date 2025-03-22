describe("Static", () => {
  class Config {
    static readonly NAME: string = "Belajar TS OOP";
    static readonly VERSION: number = 1.0;
    static readonly AUTHOR: string = "Elmo";
  }

  class MathUtil {
    static sum(...values: number[]): number {
      return values.reduce((acc, val) => acc + val);
    }
  }

  it("should work", () => {
    console.info(Config.NAME);
    console.info(Config.VERSION);
    console.info(Config.AUTHOR);
  });

  it("should work on method too", () => {
    console.info(MathUtil.sum(1, 2, 3, 4, 5));
  });
});
