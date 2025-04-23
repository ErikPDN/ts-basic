let x = 10;  // eslint-disable-line
x = 0b1010;

console.log(x);

const ten = 10; // Literal type
const one: 1 = 1; // Literal type

const person = {
  name: "Erik" as const, // Name não pode ser alterado
  lastName: "Lima",
};

console.log(person); // "Erik"

function selectColor(color: "red" | "green" | "blue") {
  return color;
}

console.log(selectColor("red")); // "red"

export default 1;
