export function add(a: unknown, b: unknown) {
  if (typeof a === 'number' && typeof b === "number")
    return a + b;

  return `${a}${b}`
}

console.log(add(1, 5))
console.log(add('a', 'b'))

type Person = { name: string }
type Animal = { color: string }
type PersonOrAnimal = Person | Animal

export class Student implements Person {
  constructor(public name: string) {

  }
}

function showName(obj: PersonOrAnimal) {
  if (obj instanceof Student) {
    console.log(obj.name)
  }
}

showName(new Student('Erik'))
