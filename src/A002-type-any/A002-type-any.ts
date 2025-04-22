function showMessage(msg: any) {
  return msg;
}

console.log(showMessage("Hello, World!")); // Hello, World!
console.log(showMessage(123)); // 123
console.log(showMessage(true)); // true
console.log(showMessage({ name: "Erik" })); // { name: 'Erik' }
