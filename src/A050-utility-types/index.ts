// Record
const object1: Record<string, string | number> = {
  name: "Erik",
  lastName: "Neves",
  age: 21
}

export type Person = {
  name?: string,
  lastName?: string,
  age?: number
}

// Required
type PersonRequired = Required<Person>
// Partial
type PersonPartial = Partial<Person>
// Readonly
type PersonReadonly = Readonly<Person>
// Pick
type PersonPick = Pick<Person, 'name' | 'lastName'>

const object2: PersonRequired = {
  name: "Pedro",
  age: 26,
  lastName: "Silva"
}

// Exxtract e Exclude 
type ABC = 'A' | 'B' | 'C'
type CDE = 'C' | 'D' | 'E'
type TypeExclude = Exclude<ABC, CDE>;
type TypeExtract = Extract<ABC, CDE>;

type AccountMongo = {
  _id: string
  name: string
  age: number
}

type AccountApi = Pick<AccountMongo, Exclude<keyof AccountMongo, '_id'>> & {
  id: string
}

const accountMongo: AccountMongo = {
  _id: 'asdf9p8dfhsajfhsjdhfjsdhfj',
  name: 'Erik',
  age: 21
}

function mapAccount(accountMongo: AccountMongo): AccountApi {
  const { _id, ...accountData } = accountMongo
  return { id: _id, ...accountData }
}

const accoutApi = mapAccount(accountMongo)

console.log(accoutApi)
console.log(object1)
