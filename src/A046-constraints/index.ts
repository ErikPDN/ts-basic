type GetKeyFn = <O, K extends keyof O>(object: O, key: K) => O[K];

const getKey: GetKeyFn = (object, key) => object[key]

const animal = {
  color: 'Pink',
  vaccine: ['vaccine 1', 'vaccine 2']
}

const vaccines = getKey(animal, 'vaccine')
vaccines.forEach(vaccine => console.log(vaccine))
