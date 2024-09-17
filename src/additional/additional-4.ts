/* eslint-disable @typescript-eslint/no-unused-vars */

type TMyReturnType<T extends (...args: any[]) => any> = T extends (...args: any[]) => infer I ? I : never

function increment (a: number) { return a + 1 }
function get3 () { return 3 as const }

type TTest41 = TMyReturnType<(a: string) => void> // void
type TTest42 = TMyReturnType<typeof increment> // number
type TTest43 = TMyReturnType<typeof get3> // 3

// -----------------

type TMyParameters<T extends (...args: any[]) => any> = T extends (...args: infer I) => any ? I : never

type TTest44 = TMyParameters<(a: string, b: boolean) => void> // [string, boolean]
type TTest45 = TMyParameters<typeof increment> // [number]
type TTest46 = TMyParameters<typeof get3> // []

// -----------------

type TFirstItem<T extends unknown[]> = T extends [...any, infer I, infer S] ? [I, S] : never

type TTest47 = TFirstItem<[1, 2, 3]> // 1
type TTest40 = TFirstItem<[1]> // 1
type TTest48 = TFirstItem<[]> // never
type TTest49 = TFirstItem<['hello', 'world']> // "hello"

// -----------------

type TTimeUnit = 'hour' | 'minute' | 'second'

type TNumberString = `${number} ${TTimeUnit}s`

const str: TNumberString = '123 hours'

// -----------------

type TStringToTuple<T extends string> = T extends `${infer I}${infer Rest}`
  ? [I, ...TStringToTuple<Rest>]
  : []

type TTest141414 = TStringToTuple<'abc'> // ['a', 'b', 'c']

// -----------------

type TNumbersToStrings<T extends number[]> = T extends [infer I extends number, ...infer Rest extends number[]]
  ? [`${I}`, ...TNumbersToStrings<Rest>]
  : []

type TTest141414asd = TNumbersToStrings<[1, 2, 3, 4, 5, 6]> // ['1','2','3','4','5','6']
