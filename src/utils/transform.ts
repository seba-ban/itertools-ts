function* transform<T, P>(iterable: Iterable<T>, transformer: (arg: T) => P) {
  for (const el of iterable) yield transformer(el);
}

export default transform;
