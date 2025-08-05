function decorator(
  classPrototyope: any,
  methodName: string,
  index: number
): any {
  console.log(classPrototyope)
  console.log(methodName)
  console.log(index)
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

  public setfullName(value: string, @decorator index: number) {
    const words = value.split(/\s+/g);
    const firstName = words.shift();
    if (!firstName) return;
    this.name = firstName;
    this.lastName = words.join(" ");
  }
}
