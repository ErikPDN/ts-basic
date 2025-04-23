let x: unknown;
x = 100;
x = "Erik";
x = 900;

// unknown é mais seguro que any, pois não permite operações sem verificação de tipo
if (typeof x === "number") {
  console.log(x ** x);
}
