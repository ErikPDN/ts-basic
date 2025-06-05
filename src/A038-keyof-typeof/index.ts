type ColorsInPortuguese = typeof colorsToPortuguese;
type ColorsKeys = keyof ColorsInPortuguese;

const colorsToPortuguese = {
  red: 'vermelho',
  blue: 'azul',
  green: 'verde',
  yellow: 'yellow'
}

function translateColor(color: ColorsKeys, colors: ColorsInPortuguese) {
  return colors[color];
}

console.log(translateColor('red', colorsToPortuguese))
console.log(translateColor('blue', colorsToPortuguese))
console.log(translateColor('yellow', colorsToPortuguese))
