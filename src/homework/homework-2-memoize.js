// Реалізуйте функцію дизайн паттерну memoize яка кешує виконання виклику з одинаковими аргументами
// та при повторному виклику лише повертає вже закешований результат.

function sum (a, b) { return a + b } // for test

// eslint-disable-next-line
function memoize (fn) {
  const cache = {}
  return (...args) => {
    const property = args.toString()
    if (cache[property]) {
      // console.log(`результат ${cache[property]}` + ', відбулось повторне виконання, результат повернуто з кешу без виклику додавання')
      return cache[property]
    } else {
      const result = fn(...args)
      cache[property] = result
      // console.log(`результат ${result}`)
      return result
    }
  }
}

// приклад виконання вашого коду
const sumMemoized = memoize(sum)

sumMemoized(1, 3) // результат 4
sumMemoized(3, 3) // результат 6
sumMemoized(1, 3) // результат 4, відбулось повторне виконання, результат повернуто з кешу без виклику додавання
