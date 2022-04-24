import { expectTypeOf } from "expect-type";
import { IterableYieldsTuple, IterableYieldsTypes } from "./types";

describe("", () => {
  describe("", () => {
    const tst = <T extends Iterable<any>[]>(
      ...iterables: T
    ): IterableYieldsTuple<T> => {
      // @ts-expect-error
      return [];
    };

    it("", () => {
      expectTypeOf(tst("aaa", [1, 2])).toEqualTypeOf<[string, number]>();
    });
  });

  describe("", () => {
    const tst = <T extends Iterable<any>[]>(
      ...iterables: T
    ): IterableYieldsTypes<T> => {
      // @ts-expect-error
      return [];
    };
    it("", () => {
      expectTypeOf(tst("aaa", [1, 2])).toEqualTypeOf<string | number>();
    });
  });
});
