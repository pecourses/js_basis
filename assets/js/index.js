"use strict";

// Именование переменных A-Za-z, 0-9, _, $
// Нельзя использовать числа в начале и ключевые слова

// Однострочный коментарий

/*

Многострочные
коментарии

*/
/* 
let name = "Vasya";
let string = `Your name is ${name}`;
console.log(string);

let check = false; // boolean

let undefinedVariable; // undefined

console.log(typeof undefinedVariable);

let nullValule = null; 

console.log(typeof null);


let nameTest;

nameTest = 20;
 */
///============

/* let inputOne = prompt("enter your num");
let inputTwo = prompt("enter your num2");

inputOne = +inputOne;
inputTwo = +inputTwo;

 
let numberOne = Number(inputOne);
let numberTwo = Number(inputTwo); 
let result = numberOne + numberTwo;

console.log(result);
console.log( isNaN(result) ); */
/* 
let testValue = String(50);
console.log(testValue + " strings");

let num = 10;
let boolValue = Boolean(num);

console.log(num);
console.log(boolValue);

 */
//let num1, num2;
/* 
let num = 5;
let num2 = 10;

//num = num + num2;
num += num2; //=15
console.log(num);

//num = num - num2;
num -= num2; //=5
console.log(num);

//num = num * num2;
num *= num2; //=50
console.log(num);

//num = num / num2;
num /= num2; //=5
console.log(num);
 */

/* 
let number = 10;

console.log(number += 1); // 10  number += 1;
console.log(number);
console.log(++number); //12
console.log(number); //12 */

/* 
let result;

let num1 = "Код";
let num2 = "Код";

result = num1 < num2;
// >, <, >=, <=, !==, ===

result = num1 !== num2;

console.log(result); 
*/

/* 
let age = 20;

let division = 5;

console.log(20 / 5);

console.log(age % division);

console.log(age ** division);

console.log(age / 0);


console.log(!true); 
*/
/* 
let input = prompt("enter day");
+input;
if (input <= 10) {
  console.log(`first part of month`);
} else if (input > 10 && input < 20) {
  console.log("second part of month");
} else if (input > 20) {
  console.log("thrid part");
} else {
  console.log("you did not enter value");
}
 */

/* let result = false || true; //
// || - находит первое истинное значение
// && - находит первое ложное значение

console.log(result);
 */
/* 
let input = prompt("Enter digit");

let result = Number(input);

if (result >= 0 && result <= 15) {
  console.log("first part of hour");
} else if (result > 15 && result <= 30) {
  console.log("second part of hour");
} else if (result >= 31 && result <= 45) {
  console.log("third part");
} else if (result > 45 && result <= 60) {
  console.log("fourth part");
} else {
  console.log("Enter a valid number");
}
 */
/* 
//========while===========

 let iteration = 0;

while (iteration <= 10) {
  console.log(iteration);

  iteration++;
} 


//======do-while==========

 let iter = 0;

do {
  console.log("Wow");
} while (iter === undefined);
 
//=========for===========

for (let i = 0; i <= 100; i++) {

  if (i % 2 === 0) {
    console.log(i);
    continue; // переход к следующей итерации
    break; // Выход из цикла
  }

}
 */

/* 
function functionName(params) {
    // Function Body
} */

// alert("i am function");

function sayHello() {
  console.log("Hi");
}

let teste = 10;
console.log(teste);

sayHello();

let input = prompt("Enter your name");

sayHiToUser(input);

function sayHiToUser(userName, age = 18) {
  let it = 0;

  it++;
  it++;

  console.log(`Hi, ${userName}`);
  console.log(age);
  console.log(it); //2

  return it+5, age;

  console.log("beadgrse");
}

let result = sayHiToUser("vasya");
console.log("RESULT =", result);
