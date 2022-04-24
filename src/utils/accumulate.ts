interface AccumulateOptions<T> {
  func?: (a: T, b: T) => T;
  initial?: T;
}

const defaultFn = <T>(a: T, b: T): T => {
  // @ts-expect-error
  return a + b;
};

function* accumulate<T>(
  iterable: Iterable<T>,
  { func = defaultFn, initial }: AccumulateOptions<T> = {}
) {
  const iterator = iterable[Symbol.iterator]();
  let total = initial;

  if (total === undefined) {
    const next = iterator.next();
    if (next.done) return;
    total = next.value as T;
  }
  yield total;

  while (true) {
    const next = iterator.next();
    if (next.done) return;
    total = func(total, next.value);
    yield total;
  }
}

export default accumulate;
