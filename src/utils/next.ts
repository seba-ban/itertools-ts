const nextFactory = <T>(iterable: Iterable<T>) => {
  const iterator = iterable[Symbol.iterator]()
  return () => iterator.next().value as T | undefined
}

export default nextFactory