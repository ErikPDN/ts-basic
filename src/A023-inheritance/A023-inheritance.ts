export class Person {
  private name: string;
  private lastName: string;
  private age: number;
  private cpf: string;

  constructor(name: string, lastName: string, age: number, cpf: string) {
    this.name = name;
    this.lastName = lastName;
    this.age = age;
    this.cpf = cpf;
  }

  setName(name: string): void {
    this.name = name;
  }

  getName(): string {
    return this.name;
  }

  getFullName() {
    return this.name + ' ' + this.lastName;
  }
}

export class Student extends Person {
  private registration: string;
  private course: string;
  private period: number;

  constructor(registration: string, course: string, period: number, name: string, lastName: string, age: number, cpf: string) {
    super(name, lastName, age, cpf);
    this.registration = registration;
    this.course = course;
    this.period = period;
  }
}

const person1 = new Person('Lucas', 'Lima', 25, '123.456.789-00');
console.log(person1);
person1.setName('Erik')
person1.getName()
console.log(person1.getName());

const student1 = new Student('2023.1234', 'Computer Science', 1, 'Lucas', 'Lima', 25, '123.456.789-00');
console.log(student1);
