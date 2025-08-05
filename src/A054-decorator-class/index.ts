type Constructor = new (...args: any[]) => any;

function reverseNameAndColor(param1: string, param2: string) {
  return function <T extends Constructor>(target: T): T {
    console.log("First decorator");
    return class extends target {
      color: string;
      name: string;

      constructor(...args: any[]) {
        super(...args);
        this.name = this.reverse(args[0]);
        this.color = this.reverse(args[1]);
      }

      reverse(val: string) {
        return val.split("").reverse().join("") + ` + ${param1} + ${param2}`;
      }
    };
  };
}

function Entity(param: string) {
  return function (target: Constructor) {
    console.log(param);
    return target;
  };
}

@Entity('Third Decorator')
@reverseNameAndColor("Value1", "Value2")
export class Animal {
  constructor(
    public name: string,
    public color: string,
  ) {}
}

const animal = new Animal("Erik", "purple");
console.log(animal);
