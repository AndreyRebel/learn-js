let money = +prompt('Ваш бюджет на месяц?', '');
let time = prompt('Введите дату в формате YYYY-MM-DD', '');
let expenseItem = prompt('Введите обязательную статью расходов в этом месяце', '');
let price = +prompt('Во сколько обойдется?', '');

let appData = {
    budget: money,
    timeData: time,
    expenses: {
        expenseItem: price
    },
    optionalExpenses: '',
    income: '',
    savings: false
}

alert(money / 30);
console.log(typeof(money));
console.log(typeof(price));
