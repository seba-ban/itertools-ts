function* repeat<T>(obj: T, times?: number) {
  if (times === undefined) while (true) yield obj;
  else for (let i = 0; i < times; i++) yield obj;
}

export default repeat;
