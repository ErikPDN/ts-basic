/* eslint-disable */
// Tipos Básicos (ocorre a inferência de tipos)
let nome = 'Erik'; // Já infere que é do tipo string
let adulto: boolean = true; // Também infere
let idade: number = 0xf; // 10, 1.54, -5, 0xf00d
let simbolo: symbol = Symbol('qualquer-symbol'); // Simbolos são únicos
let big: bigint = 10n; // Números inteiros maiores que o Number.MAX_SAFE_INTEGER

// Arrays
let arr: Array<number> = [1, 2, 3]; // Array de números
let arr2: number[] = [1, 2, 3]; // Array de números
let arr3: Array<string> = ['a', 'b', 'c']; // Array de strings

// Objetos 
let person: { name: string, age?: number } = { 'name': 'Erik', age: 30 }; // Objeto com propriedades

// Funções
function soma(x: number, y: number): number {
  return x + y;
}

const sum2: (x: number, y: number) => number = (x: number, y: number) => {
  return x + y;
};

