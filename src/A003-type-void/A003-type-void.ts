function noReturn(...args: string[]): void {
  console.log(args.join(" "));
}

export const person = {
  name: "Erik",
  lastName: "Lima",

  showFullName() {
    console.log(this.name, this.lastName);
  },
};

noReturn("Hello", "World", "!");
person.showFullName();
