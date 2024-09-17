interface IPerson {
  id: number
  name: string
  age: number
  test?: string
  hobbies: string[]
}

const persons: IPerson[] = [
  { id: 1, name: 'Viktor', age: 10, hobbies: ['test', 'test1'] },
  { id: 2, name: 'Viktor', age: 15, hobbies: ['test', 'test1'] },
  { id: 3, name: 'Andriy', age: 10, hobbies: ['test', 'test1'] },
  { id: 4, name: 'Andriy', age: 20, hobbies: ['test', 'test1'] },
  { id: 5, name: 'Andriy', age: 30, hobbies: ['test', 'test1'] },
  { id: 6, name: 'Oleg', age: 20, hobbies: ['test', 'test1'] }
]

type TGetValidKeys<T extends object> = keyof {
  [key in keyof T as T[key] extends PropertyKey ? key : never]: T[key]
}

// type t = TGetValidKeys<IPerson>

function groupBy<T extends Record<PropertyKey, any>> (arr: T[], field: TGetValidKeys<T>) {
  return arr.reduce((acc, cur) => {
    (acc[cur[field]] = acc[cur[field]] || []).push(cur)
    return acc
  }, {} as Record<PropertyKey, T[]>)
}

const hashedPersons = groupBy(persons, 'name')

export {
  hashedPersons
}
