describe("Visibility", () => {
  class Counter {
    protected _count: number = 0;

    public increment() {
      this._count++;
    }

    public decrement() {
      this._count--;
    }

    public get count(): number {
      return this._count;
    }
  }

  class DoubleCounter extends Counter {
    public increment() {
      this._count++;
      this._count++;
    }
  }
  it("should support visibility (private, public, protected)", () => {
    const counter = new Counter();
    counter.increment();
    counter.decrement();

    console.info(counter.count);

    const doubleCounter = new DoubleCounter();
    doubleCounter.increment();

    console.info(doubleCounter.count);
  });
});
