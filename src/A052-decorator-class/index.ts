function reverseNameAndColor<T extends new (...args: any[]) => any>(
  target: T,
): T {
  return class extends target {
    color: string;
    name: string;

    constructor(...args: any[]) {
      super(...args);
      this.name = this.reverse(args[0]);
      this.color = this.reverse(args[1]);
    }

    reverse(val: string) {
      return val.split("").reverse().join("");
    }
  };
}

@reverseNameAndColor
export class Animal {
  constructor(
    public name: string,
    public color: string,
  ) { }
}

const animal = new Animal("Erik", "purple");
console.log(animal);
