'use strict'
console.log('Задание 2')

const countProps = function (obj) {
  const keys = Object.keys(obj)
  console.log(keys.length)
}

console.log(countProps({}))
console.log(countProps({ name: 'Mango', age: 2 }))
console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 }))
