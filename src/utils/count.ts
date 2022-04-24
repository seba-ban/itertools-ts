function* count(start = 0, step = 1) {
  let n = start;
  while (true) {
    yield n;
    n += step;
  }
}

export default count;
