// Задача на проміс.
// Виконайте послідовне виконання промісу `arrayHandler` стільки разів, скільки елементів знаходиться
// в масиві array. Кожен наступний проміс повинен виконатись лише тоді коли попередній успішно завершився.
// Функція `arrayHandler` приймає аргументом значення з поточної ітерації масиву `array`

const arrayHandler = (num) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(num)
    }, num * 1000)
  })
}

const array = [1, 2, 3, 4, 5]

// method 1
let promise = Promise.resolve()

for (const num of array) {
  promise = promise
    .then(() => arrayHandler(num))
    // .then(data => console.log(`Спосіб 1: ${data}`))
}

// method 2
(async () => {
  try {
    for (const num of array) {
      await arrayHandler(num)
      // .then(data => console.log(`Спосіб 2: ${data}`))
    }
  } catch (error) {
    console.log(error)
  }
})()

console.log(array)
