/*jshint esversion: 6 */
// 'use strict';
var money = prompt("Ваш бюджет на месяц", "");
var time = prompt("Введите дату в формате YYYY-MM-DD", "");


console.log(money);
console.log(time);

var expenses = new Object();
var optionalExpenses = new Object();
var income = [];

let appData = {
    Budg: money,
    timeData: time,
    expenses: null,
    optionalExpenses: null,
    income: null,
    savings: false
};

alert("Бюджет на 1 день" + money/30);
