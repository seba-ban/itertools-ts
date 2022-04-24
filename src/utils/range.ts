const startSymbol = Symbol("start");
const endSymbol = Symbol("end");
const stepSymbol = Symbol("step");

class Range {
  [startSymbol]: number;
  [endSymbol]: number;
  [stepSymbol]: number;

  constructor(start: number, end: number, step: number) {
    this[startSymbol] = start;
    this[endSymbol] = end;
    this[stepSymbol] = step;
  }

  *[Symbol.iterator]() {
    const len = this.length;
    for (let i = 0; i < len; i++)
      yield this[startSymbol] + i * this[stepSymbol];
  }

  public get length() {
    return Math.max(
      0,
      Math.ceil((this[endSymbol] - this[startSymbol]) / this[stepSymbol])
    );
  }

  public includes(n: number) {
    if (this.length == 0) return false;
    if (n == this[startSymbol]) return true;
    if (this[stepSymbol] > 0 && (n >= this[endSymbol] || n < this[startSymbol]))
      return false;
    if (this[stepSymbol] < 0 && (n <= this[endSymbol] || n > this[startSymbol]))
      return false;
    return (n - this[startSymbol]) % this[stepSymbol] == 0;
  }

  [Symbol.toPrimitive](hint: string) {
    return hint == "string" ? this.toString() : this.sum();
  }

  toString() {
    return `{${Array.prototype.join.call(this, ",")}}`;
  }

  public get(index: number) {
    const len = this.length;
    if (index < 0) index = len + index;
    if (index < 0 || index >= len) return undefined;
    return this[startSymbol] + index * this[stepSymbol];
  }

  indexOf(n: number) {
    const index = (n - this[startSymbol]) / this[stepSymbol];
    return index < 0 || index >= this.length || !Number.isInteger(index)
      ? -1
      : index;
  }

  sum() {
    const len = this.length;
    if (len == 0) return 0;
    const last = this.get(len - 1);
    if (last === void 0) return 0;
    return (this[startSymbol] + last) * (len / 2);
  }
}

const getDefaultStep = (start: number, stop: number) => (start < stop ? 1 : -1);

function range(end: number): Range;
function range(start: number, end: number): Range;
function range(start: number, end: number, step: number): Range;
function range(...args: number[]) {
  let start: number, end: number, step: number;
  switch (args.length) {
    case 3:
      [start, end, step] = args;
      break;
    case 2:
      [start, end] = args;
      step = getDefaultStep(start, end);
      break;
    case 1:
      start = 0;
      end = args[0];
      step = getDefaultStep(start, end);
      break;
    default:
      throw new TypeError();
  }
  return new Range(start, end, step);
}

export default range;
