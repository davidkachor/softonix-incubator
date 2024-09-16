/* eslint-disable @typescript-eslint/no-unused-vars */
type TMyPick<T, K> = any

type TTest31 = TMyPick<{ a: number; b: number; c: number }, 'a' | 'b'> // { a: number; b: number; }
type TTest32 = TMyPick<{ a: number; b: number; c: number }, 'another'> // error
