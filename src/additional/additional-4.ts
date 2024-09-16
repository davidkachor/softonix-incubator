/* eslint-disable @typescript-eslint/no-unused-vars */

type TMyReturnType<T> = any

function increment (a: number) { return a + 1 }
function get3 () { return 3 as const }

type TTest41 = TMyReturnType<(a: string) => void> // void
type TTest42 = TMyReturnType<typeof increment> // number
type TTest43 = TMyReturnType<typeof get3> // 3

type TMyParameters<T> = any

type TTest44 = TMyParameters<(a: string, b: boolean) => void> // [string, boolean]
type TTest45 = TMyParameters<typeof increment> // [number]
type TTest46 = TMyParameters<typeof get3> // []

type TFirstItem<T> = any

type TTest47 = TFirstItem<[1, 2, 3]> // 1
type TTest48 = TFirstItem<[]> // never
type TTest49 = TFirstItem<['hello', 'world']> // "hello"
