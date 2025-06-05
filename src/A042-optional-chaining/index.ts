// Encadeamento opcional e Operador de coalescencia nula

export type Document = {
  title: string;
  text: string;
  date?: Date;
}

const document: Document = {
  title: 'Default Document',
  text: 'hello',
  // date: new Date()
}

console.log(document.date?.toDateString() ?? 'Left value is null')
// se o valor a esquerda é null então valor a direita
