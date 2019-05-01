'use strict';

var leftBorderWidth = 1;
let second = 2;
const pi = 3.14;
let something;
console.log(something);

let person = {
    name: "John",
    age: 25,
    isMaried: false
};

console.log(person["name"]);

let arr = ['plum.png', 'orange.jpg', 'apple.bmp'];

console.log(arr[1])

// alert("Hello World!");

//let answer = prompt("Есть ли Вам 18", "Да");

console.log(typeof(arr));

console.log("arr" + "- object");

if (2*4 == 11){
    console.log("isTrue");
}
else{
    console.log("isNotTrue");
}

(2*4 == 8) ? console.log("isTrue") : console.log("isTrue");

/// ????????????????????????????
let num = 49;
switch(num){
    case num < 50:
        console.log("Less");
        break;
    case num > 50:
        console.log("Greater");
        break;
    case 50:
        console.log("Equal");
        break;
    default:
        console.log("wtf");
        break;    
}
/// ??????????????