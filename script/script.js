'use strict';
let isNumber = function(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};
let money,
    start = function () {
      do {
        money = prompt('Ваш месячный доход?', 10000);
      } while (!isNumber(money));

    };
start();

let appData = {
  income: {}, // Дополнительный доход;
  addIncome: [], // Перечисление доп.доходов;
  expenses1: {}, // Доп.расходы;
  expenses2: {}, // Доп.расходы;
  addExpenses: [], // Перечисление возможных расходов;
  deposit: false, // Наличие депозита;
  misson: 30000, // Поставленная цель;
  period: 6, // За какой период необходимо придти к цели;
  budget: money,
  budgetDay: 0,
  budgetMonth: 0,
  expensesMonth: 0,

  asking: function () {
    let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'Ресторан, Кино');
        appData.addExpenses = addExpenses.toLowerCase().split(/, |,/);
        appData.deposit = confirm('Есть ли у вас депозит в банке?');
  }, 

  getExpensesMonth: function () {
    let sum = 0;
    for (let i = 0; i < 2; i++) {

      if (i === 0) {

        appData.expenses1 = prompt('Введите обязательную статью расходов?', 'Комунальные услуги');
      } else if (i === 1) {
        appData.expenses2 = prompt('Введите обязательную статью расходов?', 'Еда');
      }
      sum += +prompt('Во сколько это обойдется?', 1500);
    }
    console.log('Обязательные расходы на: ', appData.expenses1);
    console.log('Обязательные расходы на: ', appData.expenses2);
    return appData.expensesMonth === sum;
  },

  // expensesAmount = appData.getExpensesMonth(),
  getBudget: function(){
    appData.budgetMonth = appData.budget - appData.expensesMonth;
    appData.budgetDay = Math.floor(appData.budgetMonth / 30);
  },
  // accumulatedMonth = getAccumulatedMonth(),
  // if (accumulatedMonth >= 0) {
  // console.log('Бюджет на месяц: ', accumulatedMonth);
  // },

  getTargetMonth: function () {
    return appData.mission / appData.budgetMonth;
  },

  
  getStatusIncome: function(){
  if (appData.budgetDay >= 1200) {
      return ('У вас высокий уровень дохода');
    } else if(appData.budgetDay >= 600) {
      return ('У вас средний уровень дохода');
    } else if(appData.budgetDay < 600 && appData.budgetDay >= 0){
      return ('К сожалению у вас уровень дохода ниже среднего');
    } else if(appData.budgetDay <= 0){
      return ('Что то пошло не так');
    }
  },

};
appData.asking();
appData.getExpensesMonth();
appData.getBudget();
appData.getTargetMonth();
appData.getStatusIncome();
console.log(`Сумма обязательных расходов ${appData.getExpensesMonth()}`);
// while (!isNaN(money) || money.trim() === '' || money === null)


// console.log('Длинна строки - addExpenses: ',appData.addExpenses.length);
// // console.log(`Период равен ${period} месяцев`);
// console.log(`Цель заработать ${mission} рублей/долларов/гривен/юани`);


// console.log('Месячный доход: ', parseInt(money));

let targetMonth = appData.getTargetMonth();
console.log('targetMonth: ', targetMonth);
if (appData.budgetDay > 0) {
  console.log(`Цель будет достигнута за ${targetMonth} месяца`);
} else {
 console.log(`Цель не будет достигнута.`); 
}

// console.log('Бюджет на день: ', budgetDay);
