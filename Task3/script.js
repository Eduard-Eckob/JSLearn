/*jshint esversion: 6 */
// 'use strict';
let money = prompt("Ваш бюджет на месяц", ""),
time = prompt("Введите дату в формате YYYY-MM-DD", "");

let appData = {
    budget: money,
    expenses: {},
    timeData: time,    
    optionalExpenses: {},
    income: [],
    savings: false
};

let a1 = prompt("Введите обязательную статью расходов в этом месяце", ''),
a2 = prompt("Во сколько обойдется?", ''),
a3 = prompt("Введите обязательную статью расходов в этом месяце", ''),
a4 = prompt("Во сколько обойдется?", '');


appData.expenses.a1 = a2;
appData.expenses.a3 = a4;

let number1 = "50";
let number2 = "55";
let result = +number1 + +number2;
console.log(result);

//alert("Бюджет на 1 день" + appData.budget/30);
document.write("Бюджет на 1 день" + appData.budget/30);
