'use strict'
console.log('Задание 4')

const countTotalSalary = function (employees) {
  const allSalary = Object.values(employees)
  let totalSalary = null
  for (const salary of allSalary) {
    totalSalary += salary
  }
  return totalSalary
}

console.log(
  countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80,
  }),
)

console.log(
  countTotalSalary({
    kiwi: 200,
    lux: 50,
    chelsy: 150,
  }),
)
