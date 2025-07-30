export function joinObj<O1, O2>(obj1: O1, obj2: O2) {
  // return { ...obj1, ...obj2 }
  return Object.assign({}, obj1, obj2)
}

const o1 = { key1: 'value1' }
const o2 = { key2: 'value2' }
const join = joinObj(o1, o2)
console.log(join)
