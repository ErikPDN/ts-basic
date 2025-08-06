function decorator(classPrototyope: any, name: string | symbol): any {
  let propertyVal: any;

  return {
    get: () => propertyVal,
    set: (val: string) => {
      propertyVal = val.split('').reverse().join('')
    }
  }

}

export class Pessoa {
  @decorator
  name: string;
  lastName: string;

  @decorator
  age: number;

  constructor(name: string, lastName: string, age: number) {
    this.name = name;
    this.lastName = lastName;
    this.age = age;
  }

  public method(msg: string) {
    return `${this.name} ${this.lastName}: ${msg}`;
  }

  public getFullName() {
    return this.name + " " + this.lastName;
  }

  public setfullName(value: string) {
    const words = value.split(/\s+/g);
    const firstName = words.shift();
    if (!firstName) return;
    this.name = firstName;
    this.lastName = words.join(" ");
  }
}

const person = new Pessoa('Erik', 'Neves', 20)
console.log(person.getFullName())

