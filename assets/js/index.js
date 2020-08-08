"use strict";

let test = "test";

const result = isAdult(5);

//console.log(cube(3)); error!

const cube = function (num) {
  // function expression
  return num ** 3;
};

console.log(cube(3)); //ok

/**
 *
 * @param {number} a - number to square
 * @returns {number}
 */

function square(a) {
  console.log(a);

  let number = Number(a);

  return number * number;
}

function isAdult(age) {
  // function declaration

  console.log(test);

  let number = Number(age);

  let result = isNaN(number);

  if (result) {
    return false;
  }

  if (number >= 18) {
    return true;
  }
  return false;
}

// let input = prompt("Enter your number");
// let input2 = prompt("Enter your number");

// const res2 = power(+input, +input2);
// console.log(res2);

function power(base, exp) {
  let result = base;

  for (let i = 1; i < exp; i++) {
    result *= base;
  }

  return result;
}

/**
 *
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */

function getMaxValue(a, b) {
  if (a > b) {
    return a;
  }
  return b;
}

const isEven = function (number) {
  return number % 2 === 0;
};

const testFunc = isEven;

console.log(testFunc);



