function* cycle<T>(iterable: Iterable<T>) {

  const savedEls: T[] = [];

  for (const el of iterable) {
    savedEls.push(el);
    yield el;
  }

  if (savedEls.length === 0) return;

  while (true) yield* savedEls;
}
// function* cycle<T>(iterable: Iterable<T>) {
//   // @ts-expect-error:
//   const save = iterable[Symbol.iterator]() === iterable;

//   const savedEls: T[] = [];
//   let empty = true;

//   for (const el of iterable) {
//     empty = false;
//     if (save) savedEls.push(el);
//     yield el;
//   }

//   if (empty) return;

//   while (true) yield* save ? savedEls : iterable;
// }

export default cycle;
