import zip from "./zip";

describe("testing zip function", () => {
  it("", () => {
    expect([...zip("abc", [1, 2])]).toEqual([
      ["a", 1],
      ["b", 2],
    ]);
  });
});
