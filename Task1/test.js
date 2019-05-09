// 'use strict';

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

console.log(person.name);

let arr = ['plum.png', 'orange.jpg', 'apple.bmp'];

console.log(arr[1]);

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
let num = 50;
switch(true){
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

// for (let index = 0; index < 12; index++) {
//     console.log(index);    
// }

let x = [] + 1+ 2;
console.log(x);
// alert( "1"[0] );
//let y = 1; let a = y = 2; alert(a);
console.log( 2 && 1 && null && 0 && undefined);
// console.log(0&&undefined);
// alert( null || 2 && 3 || 4 );
// alert(false || true);
let a = [1, 2, 3]; 
let b = [1, 2, 3];
if(a==b){
    console.log("true");
}
else {
    console.log("fasle");
}
//a == b ? console.log("true") : console.log("");
if("яблоко" > "ёжик"){
    console.log("true")
}
else{
    console.log("false")
}
