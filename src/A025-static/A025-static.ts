export class Person {
  constructor(
    public name: string,
    public lastName: string,
    public age: number,
    public cpf: string) { }

  static sayHello(): void {
    console.log('Hello!');
  }

  static createPerson(name: string, lastName: string): Person {
    return new Person(name, lastName, 0, '');
  }

}

const person = new Person('Lucas', 'Silva', 25, '123.456.789-00');
Person.sayHello();
const person2 = Person.createPerson('Erik', 'Silva');

console.log(person);
console.log(person2);
