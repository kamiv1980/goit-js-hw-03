'use strict'
console.log('Задание 7')

const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
}
let i = 1

const account = {
  // Текущий баланс счета
  balance: 0,
  // История транзакций
  transactions: [],

  createTransaction(amount, type) {
    const transaction = { id: i, type: type, amount: amount }
    i += 1
    return transaction
  },

  /*
   * Метод отвечающий за добавление суммы к балансу.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций */
  deposit(amount) {
    this.transactions.push(createTransaction(amount, Transaction.DEPOSIT))
    this.balance = this.balance + amount
  },

  /*
   * Метод отвечающий за снятие суммы с баланса.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций.
   *
   * Если amount больше чем текущий баланс, выводи сообщение
   * о том, что снятие такой суммы не возможно, недостаточно средств.
   */
  withdraw(amount) {
    this.transactions.push(createTransaction(amount, Transaction.WITHDRAW))
    if (amount > this.balance) {
      console.log('Снятие суммы не возможно, недостаточно средств!')
    } else {
      this.balance = this.balance - amount
    }
  },

  /*
   * Метод возвращает текущий баланс
   */
  getBalance() {
    console.log(`Balance: ${this.balance}`)
    return this.balance
  },

  /*
   * Метод ищет и возвращает объект транзации по id
   */
  getTransactionDetails(id) {
    for (const obj of this.transactions) {
      if (id === obj.id) {
        console.log(obj)
        return obj
      }
    }
  },

  /*
   * Метод возвращает количество средств
   * определенного типа транзакции из всей истории транзакций
   */
  getTransactionTotal(type) {
    let amounts = null
    for (const obj of this.transactions) {
      if (type === obj.type) {
        amounts += obj.amount
      }
    }
  },
}
