// let money = prompt('Ваш бюджет на месяц?', '');
//     time = prompt('Введите дату в формате YYYY-MM-DD', '');

// let appData = {
//     budget: money,
//     expenses: {},
//     optionalExpenses: {},
//     income: [],
//     timeData: time,
//     savings: false
// }

// for (let i = 0; i < 2; i++) {
//     let a = prompt('Введите обязательную статью расходов в этом месяце', '');
//         b = prompt('Во сколько обойдется?', '');

    

//     if ( a != null && b != null && a != '' && b != '' && a.length < 50 && a.length < 20) {
//         alert('Done');
//         appData.expenses[a] = b;
//     } else {
//         i = 0;
//     }
// }

// appData.moneyPerDay = appData.budget / 30;

// alert('Ежедневный бюджет: ' + appData.moneyPerDay);

// if (appData.moneyPerDay < 100) {
//     console.log('Минимальный уровень достатка');
// } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
//     console.log('Средний уровень достатка');
// } else if (appData.moneyPerDay > 2000) {
//     console.log('Высокий уровень достатка');
// } else {
//     console.log('Ошибка ввода данных');
// }


let a = 'Hello'.charAt(4);
console.log(a);

let b = 'Hello '

console.log(b.concat('world'));