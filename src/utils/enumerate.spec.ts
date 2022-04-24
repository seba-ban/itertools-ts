import {expectTypeOf} from 'expect-type'
import enumerate from "./enumerate";

describe("testing enumerate", () => {

  it("should yield index and value", () => {
    const expected = [
      [0, "T"],
      [1, "S"],
      [2, "T"],
    ]
    for (const el of enumerate("TST"))
      expect(el).toEqual(expected[el[0]])
  })

  it("should yield correct types", () => {
    for (const el of enumerate("TST"))
      expectTypeOf(el).toMatchTypeOf<[number, string]>()

    for (const el of enumerate([1,2,3]))
      expectTypeOf(el).toMatchTypeOf<[number, number]>()

    for (const el of enumerate([1, 2, "s"]))
      expectTypeOf(el).toMatchTypeOf<[number, string | number]>()
  })

})