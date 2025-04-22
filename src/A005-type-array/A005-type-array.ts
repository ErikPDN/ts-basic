// Array<T> - T[]
function multipliArgs(...args: number[]): number {
  let total = 1;
  for (const arg of args) {
    total *= arg;
  }
  return total;
}

function multipliWithReduce(...args: number[]): number {
  return args.reduce((acc, curr) => acc * curr, 1);
}

function concatStrings(...args: string[]): string {
  return args.reduce((acc, curr) => acc + curr, "");
}

function toUpperCase(...args: string[]): string[] {
  return args.map((arg) => arg.toUpperCase());
}

console.log(multipliArgs(1, 2, 3, 4)); // 24
console.log(multipliWithReduce(1, 2, 3, 4)); // 24
console.log(concatStrings("faz", "o", "l")); // abc
console.log(toUpperCase("faz", "o", "l")); // [ 'FAZ', 'O', 'L' ]
