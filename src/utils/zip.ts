import { IterableYieldsTuple } from "./types";

function* zip<T extends Iterable<any>[]>(
  ...iterables: T
): Generator<IterableYieldsTuple<[...T]>, void, undefined> {
  const iterators = iterables.map((it) => it[Symbol.iterator]());

  while (true) {
    const next = iterators.map((it) => it.next());
    if (next.some((n) => n.done)) return;
    // @ts-expect-error
    yield next.map((it) => it.value);
  }
}

export default zip;
