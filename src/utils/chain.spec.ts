import { expectTypeOf } from "expect-type";
import chain from "./chain";

describe("testing chain function", () => {
  it("", () => {
    expect([...chain("abc", [1, 2, 3])]).toEqual(["a", "b", "c", 1, 2, 3]);
  });
  // it("should provide proper types", () => {
  //   for (const el of chain("abc")) expectTypeOf(el).toMatchTypeOf<string>();

  //   for (const el of chain([1, 2])) expectTypeOf(el).toMatchTypeOf<number>();

  //   for (const el of chain([1, "1"]))
  //     expectTypeOf(el).toMatchTypeOf<string | number>();

  //   for (const el of chain("abc", [1, 2]))
  //     expectTypeOf(el).toMatchTypeOf<string | number>();

  //   interface Tst {
  //     msg: string;
  //   }

  //   const tst: Tst[] = [{ msg: "hello" }];
  //   for (const el of chain("abc", [1, 2], tst))
  //     expectTypeOf(el).toMatchTypeOf<string | number | Tst>();

  //   class TstCls {
  //     *[Symbol.iterator]() {
  //       yield [1, 23];
  //       yield [8, 10];
  //     }
  //   }

  //   for (const el of chain("abc", [1, 2], tst, new TstCls()))
  //     expectTypeOf(el).toMatchTypeOf<string | number | Tst | number[]>();
  // });
});
