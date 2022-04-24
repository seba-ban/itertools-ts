import { IterableYieldsTypes } from "./types";

function* chain<T extends Iterable<any>[]>(
  ...iterables: T
): Generator<IterableYieldsTypes<T>, void, undefined> {
  for (const iterable of iterables) yield* iterable;
}

export default chain;
