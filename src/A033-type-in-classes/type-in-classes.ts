type TypePerson = {
  name: string;
  lastName: string;
  fullName: () => string;
}

export class Person implements TypePerson {
  constructor(public name: string, public lastName: string, public age: number) {
    this.name = name;
    this.lastName = lastName;
    this.age = age;
  }

  fullName(): string {
    return `${this.name} ${this.lastName}`;
  }
}

const person = new Person('John', 'Doe', 30);
console.log(person.fullName());
