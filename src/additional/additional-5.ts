type TMyPush<T extends any[], U> = [...T, U] // Code here

const arr = [1, 2]

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const newArray: TMyPush<typeof arr, '3'> = [1, 2, '3'] // [1, 2, '3']
