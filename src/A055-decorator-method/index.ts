function decorator(
  classPrototyope: any,
  methodName: string,
  descriptor: PropertyDescriptor,
): any {
  console.log(classPrototyope)
  console.log(methodName)
  console.log(descriptor)
}

export class Pessoa {
  constructor(
    private name: string,
    private lastName: string,
    private age: number,
  ) {}

  public method(msg: string) {
    return `${this.name} ${this.lastName}: ${msg}`;
  }

  public getFullName() {
    return this.name + " " + this.lastName;
  }

  @decorator
  public setfullName(value: string) {
    const words = value.split(/\s+/g);
    const firstName = words.shift();
    if (!firstName) return;
    this.name = firstName;
    this.lastName = words.join(" ");
  }
}

const erik = new Pessoa("Erik", "Pereira", 20);
console.log(erik.getFullName());
erik.setfullName("Erik das Neves Correa");
console.log(erik.getFullName());
