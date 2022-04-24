import cycle from "./cycle";

describe("testing cycle", () => {
  it("should cycle through string letters", () => {
    const iterator = cycle("ABC")[Symbol.iterator]();
    expect(iterator.next().value).toBe("A");
    expect(iterator.next().value).toBe("B");
    expect(iterator.next().value).toBe("C");
    expect(iterator.next().value).toBe("A");
    expect(iterator.next().value).toBe("B");
    expect(iterator.next().value).toBe("C");
  });

  it("shouldn't create an infinite loop", () => {
    const iterator = cycle([])[Symbol.iterator]();
    for (let i = 0; i < 10; i++) expect(iterator.next().value).toBeUndefined();
  });
});
