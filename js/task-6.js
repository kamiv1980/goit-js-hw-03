'use strict'
console.log('Задание 6')

const newProducts = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 2 },
]

const calculateTotalPrice = function (allProdcuts, productName) {
  for (const product of allProdcuts) {
    if (product.name === productName) {
      const cost = product.price * product.quantity
      return cost
    }
  }
}

console.log(calculateTotalPrice(newProducts, 'Радар'))
console.log(calculateTotalPrice(newProducts, 'Дроид'))
