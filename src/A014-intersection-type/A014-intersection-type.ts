// AND
type HasName = { name: string };
type HasLastName = { lastName: string };
type HasAge = { age: number };

export type Person = HasName & HasLastName & HasAge;

const person1: Person = {
  name: "Erik",
  lastName: "Lima",
  age: 20,
};

console.log(person1);
