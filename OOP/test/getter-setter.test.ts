describe("Getter setter", () => {
  class Category {
    _name?: string;

    get name(): string {
      if (this._name) {
        return this._name;
      } else {
        return "No name";
      }
    }

    set name(value: string) {
      if (value !== "") {
        this._name = value;
      }
    }
  }

  it("should can be create class", () => {
    const category = new Category();
    category.name = "";
    console.info(category.name);

    category.name = "Material";
    console.info(category.name);
  });
});
