export class Calculator {
  constructor(public number: number) {
  }

  add(n: number): this {
    this.number += n
    return this
  }

  sub(n: number): this {
    this.number -= n
    return this
  }

  mult(n: number): this {
    this.number *= n
    return this
  }

  div(n: number): this {
    if (n === 0) {
      throw new Error('Division by 0')
    }

    this.number /= n
    return this
  }

  printNumber() {
    console.log(this.number)
  }
}

const calculator = new Calculator(10);
calculator.add(5).mult(10).sub(20).add(5).div(2).mult(10)
calculator.printNumber()

// Builder - GoF
export class RequestBuilder {
  private method: 'get' | 'post' | null = null;
  private url: string | null = null;

  setMethod(method: 'get' | 'post'): this {
    this.method = method
    return this;
  }

  setUrl(url: string): this {
    this.url = url
    return this
  }

  send() {
    console.log('sending data via ' + this.method + ' to ' + this.url)
  }
}

const request = new RequestBuilder();
request.setUrl('https://www.google.com').setMethod('get').send()

