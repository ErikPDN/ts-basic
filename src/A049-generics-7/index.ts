export function isNumber(val: unknown): val is number {
  return typeof val === 'number' ? true : false
}

export function sum(...args: unknown[]) {
  const result = args.reduce((sum, currVal) => {
    if (isNumber(sum) && isNumber(currVal)) {
      return sum + currVal
    }
    return sum
  }, 0)

  return result
}

console.log(sum(1, 2, 3))
console.log(sum(...[1, 2.2, 3, 4, 'a', 'b', 5.0, 'c']))
