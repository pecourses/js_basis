"use strict";

function ArrayMethods() {
  this.push = function () {
    for (let i = 0; i < arguments.length; i++) {
      this[this.length++] = arguments[i];
      return this.length;
    }
  };

  this.pop = function () {
    const lastIndex = this.length - 1;
    const lastItem = this[lastIndex];

    delete this[lastIndex];

    --this.length;

    return lastItem;
  };

  this.forEach = function (callback) {
    for (let i = 0; i < this.length; i++) {
      callback(this[i], i, this);
    }
  };

  this[Symbol.iterator] = function () {};
}

function MyArray() {
  this.length = 0;
  for (let i = 0; i < arguments.length; i++) {
    this[this.length] = arguments[i];
    this.length++;
  }
}

MyArray.prototype = new ArrayMethods();

const myArr = new MyArray("test", "teste2", "test3", 2345, true);

// RECURSION

/* function factorial(number) {
  debugger;
  if (number === 1) {
    return number;
  }

  return number * factorial(number - 1);
  // return 4 * 3 * 2 * 1
}

// with array, without template str.
function logPar(number) {
  if (number === 1) {
    return "()";
  }
  return `(${logPar(number - 1)})`;
}

function power(number, pow) {
  if (pow === 0) {
    return 1;
  }

  if (pow === 1) {
    return number;
  }

  const powAbs = Math.abs(pow);
  const result = number * power(number, powAbs - 1);

  if (pow > 0) {
    return result;
  } else {
    return 1 / result;
  }
}

function logRange(min, max) {
  if (min === undefined || max === undefined || min > max) {
    console.error("Enter a valid range");
    return;
  }

  console.log(min);

  if (min < max) {
    logRange(min + 1, max);
  }
}

function customFlat(array, depth = 1) {
  if (depth < 0) {
    console.error("depth must be a positive value");
    return;
  }
  let newArr = [];
  if (depth === 0) {
    newArr = newArr.concat(array);
    return newArr;
  }
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      //Always arrays
      const buffer = customFlat(array[i], depth - 1);
      newArr = newArr.concat(buffer);
    } else {
      // Always rest
      newArr.push(array[i]);
    }
  }
  return newArr;
} */

const symbolExample = Symbol("test1");
const symbolExample2 = Symbol("test2");
const symbolExample3 = Symbol("test3");

console.log(symbolExample);
console.log(symbolExample2);
console.log(symbolExample3);

const object = {
  test: "test",
  symbolExample: symbolExample,
  [symbolExample2]: 325,
};

object[symbolExample] = "test";

//console.log(object);

// Spread operator
function log(...rest) {
  // rest operator
  const array = ["test", "string", true, {}];
  console.log(rest);
  console.log(array);
  console.log(...array, ...rest); // spread operator
}

//log(1, "test", 4, "st", 5);

function merge(arrayA, arrayB) {
  return [...arrayA, ...arrayB];
}

function append(array, object) {
  return [...array, object];
}

// MAP, SET

const map = new Map();

map.set("key", { test: "test", age: 20 });
map.set("key2", { test: "test", age: 20 });
map.set("ke3", { test: "test", age: 20 });
map.set(1, 1);
map.set("1", "testsetest");

// console.log(map);
logMap(map);

function logMap(map) {
  for (const array of map.entries()) {
    console.log(array);
  }
}

const set = new Set();

set.add("test");
set.add("pizza");
set.add("pizza");
set.add("pizza");
set.add("pizza");
set.add("pizza");
set.add("pizza");
set.add("pizza");

console.log(set);

const arrayCopy = [
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  3,
  6,
  7,
  8,
];

console.log(getUnique(arrayCopy));

function getUnique(arrayWithCopies) {
  const set = new Set(arrayWithCopies);

  //console.log(set);

  return [...set];
}
