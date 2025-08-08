namespace MyNameSpace {
  const name = "Erik";
  export class NameSpacePerson {
    constructor(public name: string) {}
  }

  const person = new NameSpacePerson(name);
  console.log(person);
}

const nameSpacePerson = new MyNameSpace.NameSpacePerson('Joãozinho')
console.log(nameSpacePerson)
