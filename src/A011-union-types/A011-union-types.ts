function add(a: number | string, b: number | string) {
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  } else if (typeof a === "string" && typeof b === "string") {
    return a + b;
  }
  throw new Error("Invalid arguments");
}

console.log(add(2, 3)); // 5
console.log(add("Erik", "Lima")); // ErikLima
