'use strict'
console.log('Задание 3')

const findBestEmployee = function (employees) {
  const entries = Object.entries(employees)
  let bestEmployee = ''
  let maxTasks = null
  for (const entry of entries) {
    const key = entry[0]
    const value = entry[1]
    if (value > maxTasks) {
      maxTasks = value
      bestEmployee = key
    }
  }
  return bestEmployee
}

console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  }),
)

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  }),
)

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  }),
)
