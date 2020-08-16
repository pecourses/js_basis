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
/*
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

/* const group = {
  title: "Our class",
  students: ["Vlad", "Sasha", "Petya"],

  logOurGroup() {
    this.students.forEach((item) => {
      console.log(this);

      // console.log(`${this.title}: ${item}`);
    });
  },
};

function logTitle() {
  console.log(this.title);

  const func = function (item) {
    console.log(`${this.title}: ${item}`);
  };

  const funcWithFixedThis = func.bind(this);

  this.students.forEach(funcWithFixedThis);
}

group.logTitle = logTitle;

group.logTitle(); */

/* function isPalindrome(str) {
  const newStr = str
    .toLowerCase()
    .replace(/ /g, "")
    .split("")
    .reverse()
    .join("");

  const strPrepared = str.toLowerCase().replace(/ /g, "");

  return newStr === strPrepared;
}

console.log(isPalindrome("Re cAr"));
 */

/* const nestedObject = {
  job: "НЕ ПРАВИЛЬНЫЙ job",
  item: {
    person: {
      name: "Test",
      age: "25",
      position: {
        company: "Test Company",
        job: "test job",
      },
    },
    person2: {
      name: "Te2st",
      age: "252",
      position: {
        company: "Tes2222t Company",
        job: "test222 job",
      },
    },
  },
};

const object2 = {
  item: {
    test: "65677446474756",
  },
};

const { item } = object2;

const { item: nestedObjectItem } = nestedObject;

console.log("nestedObj", nestedObject);

const arr = [item, nestedObjectItem, "testPrimitive"];
console.log(arr);

const [element, nestedElement, primitiveFromArray, undef] = arr;

console.group("Arr destructured");

console.log(element);
console.log(nestedElement);
console.log(primitiveFromArray);
console.log(undef);

console.groupEnd();
 */
/* const options = {
  item: " test",
  array: [1, 2, 3, 4, 54],
  test: "log",
}; */
/* 
function logFunction({ item= 'item', array = ["empty"], test = null } = {}) {
  console.log(item, array, test);
}

logFunction();
 */

// task 4

/* 

const result=addNum(10);

result(20)  // 30

result(20) // 50

result(100) // 150

*/

const obj = {
  test: "test",
};

obj.addFeature = "feature";

console.log(obj);

Object.defineProperties(obj, {
  definedProp: {
    value: "testtsetes",
    writable: false, // read-only
    enumerable: false, // отключает итерируемость
    configurable: false, // отключает изменяемость
  },
});

console.log(obj);

const user = {
  firstName: "Test",
  lastName: "Testovich",

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },

  set fullName(newFullName) {
    const [firstName, lastName] = newFullName.split(" ");

    this.firstName = firstName;
    this.lastName = lastName;
  },
};
