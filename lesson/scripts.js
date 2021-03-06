let money, time;

function start() {
    
    while (isNaN(money) || money == '' || money == null) {
        money = prompt('Ваш бюджет на месяц?', '');
    }

    time = prompt('Введите дату в формате YYYY-MM-DD', '');
}
start();


let appData = {
    budget: money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    timeData: time,
    savings: true
}

function chooseExpenses() {
    for (let i = 0; i < 2; i++) {
        let a = prompt('Введите обязательную статью расходов в этом месяце', '');
            b = prompt('Во сколько обойдется?', '');
    
        
    
        if ( a != null && b != null && a != '' && b != '' && a.length < 50 && a.length < 20) {
            alert('Done');
            appData.expenses[a] = b;
        } else {
            i = i - 1;
        }
    }
}
chooseExpenses();

function chooseOptExpenses() {
    for ( i = 1; i < 4; i++) {
        let otp = prompt('Стаття необязательных расходов?');
        appData.optionalExpenses[i] = otp;
    }
} 
// chooseOptExpenses();

function detectDayBudget() {
    appData.moneyPerDay = +(appData.budget / 30).toFixed();
    alert('Ежедневный бюджет: ' + appData.moneyPerDay);
}
detectDayBudget();

function detectLevel() {
    if (appData.moneyPerDay < 100) {
        console.log('Минимальный уровень достатка');
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log('Средний уровень достатка');
    } else if (appData.moneyPerDay > 2000) {
        console.log('Высокий уровень достатка');
    } else {
        console.log('Ошибка ввода данных');
    }
}
detectLevel();

function checkSavings() {

    if (appData.savings == true) {
        let save = +prompt('Какая у вас сумма накоплений?'),
            persent = +prompt('Под какой процент?');

        appData.monthIncome = (save / 100 / 12 * persent).toFixed(1);
        alert('Доход с вашего депозита: ' + appData.monthIncome);
    }

}
checkSavings();