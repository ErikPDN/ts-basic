export class Person<T, U> {
  constructor(public name: T, public age: U) {

  }
}

export class Stack<T> {
  private count = 0;
  private elements: { [k: number]: T } = {};

  public push(element: T) {
    this.elements[this.count] = element;
    this.count++;
  }

  public pop(): T | void {
    if (this.isEmpty()) return undefined

    this.count--;
    const element = this.elements[this.count]
    delete this.elements[this.count]
    return element
  }

  private isEmpty() {
    return this.count === 0
  }

  public printStack() {
    for (const key in this.elements) {
      console.log(this.elements[key])
    }
  }
}

const stack = new Stack<number>();
stack.push(1);
stack.push(2)
stack.push(4)
const four = stack.pop()
console.log(four)
stack.printStack()
