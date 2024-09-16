/* Реалізуйте дженерік версію методу масивів Array.push.
Для перевірки наведіть курсор на pushCheck */

type TPush<T extends any[], U> = [...T, U] // Code here

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const pushCheck: TPush<[1, 2], '3'> = [1, 2, '3'] // [1, 2, '3']
