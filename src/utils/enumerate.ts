function* enumerate<T>(
  iterable: Iterable<T>
): Generator<[number, T], void, unknown> {
  let i = 0;
  for (const el of iterable) yield [i++, el];
}

export default enumerate