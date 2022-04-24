/** maps an iterable array to a tuple of yield values */
export type IterableYieldsTuple<T extends Iterable<any>[]> = {
  [key in keyof T]: T[key] extends Iterable<infer U> ? U : never;
};

/** creates an union type of yield types for an array of iterables */
export type IterableYieldsTypes<T extends Iterable<any>[]> = IterableYieldsTuple<T>[number];
