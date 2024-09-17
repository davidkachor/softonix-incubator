type TMyPush<T extends readonly any[], U> = [...T, U] // Code here

const arr = [1, 2] as const

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const newArray: TMyPush<[1, 2], '3'> = [1, 2, '3'] // [1, 2, '3']
