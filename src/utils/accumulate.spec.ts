import accumulate from "./accumulate";

describe("testing accumulate function", () => {
  it("should ...", () => {
    const iter = {
      [Symbol.iterator]() {
        return {
          i: 1,
          next() {
            if (this.i < 6) {
              return { done: false, value: this.i++ };
            }
            return { done: true, value: this.i };
          },
        };
      },
    };
    
    expect([...accumulate([1, 2, 3, 4, 5])]).toEqual([1, 3, 6, 10, 15]);
    expect([...accumulate(iter)]).toEqual([1, 3, 6, 10, 15]);

    expect([...accumulate([1, 2, 3, 4, 5], { initial: 100 })]).toEqual([
      100, 101, 103, 106, 110, 115,
    ]);
    expect([...accumulate(iter, { initial: 100 })]).toEqual([
      100, 101, 103, 106, 110, 115,
    ]);

    expect([...accumulate([1, 2, 3, 4, 5], { func: (a, b) => a * b })]).toEqual(
      [1, 2, 6, 24, 120]
    );
    expect([...accumulate(iter, { func: (a, b) => a * b })]).toEqual([
      1, 2, 6, 24, 120,
    ]);
  });
});
