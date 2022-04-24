import { IterableYieldsTuple } from "./types";

const any = <T>(arr: T[], predicate: (arg: T) => boolean) => {
  for (const el of arr) if (predicate(el)) return true;
  return false;
};

function* zip<T extends Iterable<any>[]>(
  ...iterables: T
): Generator<IterableYieldsTuple<[...T]>, void, undefined> {
  const iterators = iterables.map((it) => it[Symbol.iterator]());

  while (true) {
    const next = iterators.map((it) => it.next());
    if (any(next, (n) => n.done as boolean)) return;
    // @ts-expect-error
    yield next.map((it) => it.value);
  }
}

export default zip;
