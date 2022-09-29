/* Crie um objeto que posuirá 2 propriedades, ambas
do tipo array:

  receitas: []
  despesas: []

Agora, crie uma função que irá calcular o total de receitas e
despesas e irá mostrar uma mensagem se a famíia está com
saldo positivo ou negativo, seguido do valor do saldo

*/

let family = {

    incomes: [10000, 2000, 1000],
    expenses: [4000, 1000, 2000]

}

function sum(array) {
    let total = 0;

    for (let value of array)
        total += value

    return total
}

function calculateBalance() {
    const calculateIncomes = sum(family.incomes)
    const calculateExpenses = sum(family.expenses)

    const total = calculateIncomes - calculateExpenses

    const positiveBalance = total >= 0
    let balanceText = "negativo"

    if (positiveBalance) {
        balanceText = "positivo"

    }

    console.log(`Seu saldo é ${balanceText}: R$${total.toFixed(2)}`)

}

calculateBalance()


