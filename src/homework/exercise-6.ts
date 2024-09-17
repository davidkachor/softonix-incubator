/* eslint-disable @typescript-eslint/no-unused-vars */
/* Реалізуйте дженерік версію методу масивів Array.push.
Для перевірки наведіть курсор на pushCheck */

type TPush<T extends number[], U> = [...T, U] // Code here

const pushCheck: TPush<[1, 2], '3'> = [1, 2, '3'] // [1, 2, '3']
