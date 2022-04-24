import range from "./range";

describe("testing range", () => {
  it("should create correct range", () => {
    expect([...range(10)]).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });

  it("should create correct range", () => {
    expect([...range(-10, -8)]).toEqual([-10, -9]);
  });

  it("should support indexing", () => {
    const r = range(10);
    for (let i = 0; i < 10; i++) {
      // add indexing?
      // const a = r[i]
      expect(r.get(i)).toBe(i);
    }
  });

  it("should return correct sum", () => {
    expect(range(10).sum()).toBe(45);
  });
});
