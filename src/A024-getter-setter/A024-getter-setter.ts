export class Person {
  private _name: string;
  private _age: number;
  private _lastName: string;
  private _cpf: string;

  constructor(name: string, age: number, lastName: string, cpf: string) {
    this._name = name;
    this._age = age;
    this._lastName = lastName;
    this._cpf = cpf;
  }

  set name(name: string) {
    this._name = name;
  }

  get name(): string {
    return this._name;
  }

  set cpf(cpf: string) {
    this._cpf = cpf;
  }

  get cpf(): string {
    return this._cpf.replace(/\D/g, '');
  }
}

const person = new Person('Lucas', 25, 'Silva', '123.456.789-00');
person.name = "Erik";
console.log(person);
