interface PersonProtocol<T = string, U = number> {
  name: T;
  lastName: T;
  age: U;
}

const student1: PersonProtocol<string, number> = {
  name: 'Erik',
  lastName: 'Pereira',
  age: 20
}

const student2: PersonProtocol<boolean, number> = {
  name: true,
  lastName: true,
  age: 20
}

const student3: PersonProtocol<string, number> = {
  name: 'Gustavo',
  lastName: 'Ferreira',
  age: 22
}

console.log(student1)
console.log(student2)
