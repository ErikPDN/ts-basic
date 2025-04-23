type Age = number;
type Ethnicity = "white" | "black" | "yellow" | "brown" | "indigenous";

type Person = {
  name: string;
  age: Age;
  height?: number;
  ethnicity?: Ethnicity;
};

const person1: Person = {
  name: "Erik",
  age: 20,
  height: 1.7,
};

const person2: Person = {
  name: "Gustavo",
  age: 30,
  height: 1.8,
  ethnicity: "white",
};

console.log(person1);
console.log(person2);
