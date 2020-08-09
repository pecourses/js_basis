"use strict";
/* 
const key = "color";

const sayHi = function () {
  return "wrong function";
};

const cat = {
  color: "red",
  weight: 3500,
  amountOfLegs: 4,
  breed: "sphinx",
  isMale: true,
  head: {
    amountOfEyes: 2,
    eyeColor: "grey",
  },

  sayHi() {
    return "Meow!";
  },
};

console.log(cat);
console.log(cat.head.eyeColor);

const cat2 = {
  color: "white",
  weight: 5500,
  amountOfLegs: 4,
  breed: "sphinx",
  isMale: false,
  head: {
    amountOfEyes: 2,
    eyeColor: "grey",
  },

  sayHi() {
    return "Meow!";
  },
}; */
/* 
function Cat(color, weight, breed, name) {
  this.name = name;
  this.color = color;
  this.breed = breed;
  this.weight = weight;

  this.present = function () {
    return `My name is ${this.name}`;
  };

  this.sayHi = function () {
    return "meow";
  };
}

const cat1 = new Cat("white", 4000, "sphinx", "Vasya");
const cat2 = new Cat("white", 3500, "sphinx", "Pete");
const cat3 = new Cat("blue", 4200, "siams", "Vlad");
const cat4 = new Cat("red", 2000, "sphinx", "Murzik");

cat4.color = "black";

console.log(cat1, cat2, cat3, cat4);
 */
/* 
function Country(name, population, area) {
  this.name = name;
  this.population = population;
  this.area = area;
  // this.density = this.population / this.area; logic ERROR
  this.getDensity = function () {
    return this.population / this.area;
  };
}

const country1 = new Country("USA", 350000000, 120000);

console.log(country1);

function Car(model) {
  this.model = model;
  this.speed = 0;
  this.isGoing = false;

  this.checkSpeed = function () {
    this.isGoing = this.speed !== 0;
  };

  this.accelerate = function (speed) {
    this.speed += speed;
    this.checkSpeed();
    return this.speed;
  };
}

const car1 = new Car("Tesla");

const box = {
  key: "value",
  test: "testValue",
  size: "large",
};

function Box(size, color, content) {
  this.content = content;
  this.size = size;
  this.color = color;

  this.open = function () {
    return `${this.content} opened`;
  };
}

function Crate(size, material, content) {
  this.content = content;
  this.size = size;
  this.material = material;
}

Crate.prototype = new Box(); // Задаем прототип(Box) для Crate

const crate1 = new Crate("small", "wood", "testContent");
const crate2 = new Crate("small");
const crate3 = new Crate("small");
const crate4 = new Crate("small");
const crate5 = new Crate("small");
const crate6 = new Crate("small");
console.log(crate1);
console.log(crate1.open());

const string = "str";

let str1 = string;
let str2 = string;

console.log(str1);
console.log(str2);

str1 += "test";

console.log(str1);
console.log(str2);

const controlObj = {
  content: "content",
  test: "test",
};

const anotherObj = controlObj;

function checkDate() {
  //magic
}

function validateDate() {
  //magic
}
 */
/* const ar100 = [];
const arr99 = new Array("stest", "tests", "testse");

const arr = [
  1341,
  213423,
  24352,
  "set",
  true,
  [1, 1, 1, 1, 1],
  { test: "test" },
  function () {},
];

console.log(arr);
//console.log(arr.length);

function logArrayElements(array) {

  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }

  console.log("=============================");

  array.forEach(function (item) {
    console.log(item);
  });

}

logArrayElements(arr);
 */

/* function list() {
  console.log(arguments);
}

list("1",2,3,5,6,63,2,233);
 */
/* 
const controlArray = ["test", "teste2", "test3", 2345, true];

function ArrayMethods() {
  this.push = function () {
    for (let i = 0; i < arguments.length; ++i) {
      this[++this.length] = arguments[i];
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
}

 */

/* 







function MyArray() {
  this.length = 0;

  for (let i = 0; i < arguments.length; i++) {
    this[this.length] = arguments[i];

    this.length++;
  }
}

MyArray.prototype = new ArrayMethods();

const myArr = new MyArray("test", "teste2", "test3", 2345, true);
console.log(myArr.pop());
//console.log(myArr.push("test"));
 */
/* 

// Switch example !

let input = prompt("Choose your destiny: 1 - Coffee, 2 - Tea, 3 - Water");
//input = 2;

switch (input) {
  case "1":
    {
      let test = 10;
      console.log("Your choice is Coffee");
    }
    break;
  case "b":
  case "2":
    {
      let test = 10;
      console.log("Your choice is Tea");
    }
    break;
  case "3":
    {
      console.log("Your choice is water");
    }
    break;
  default: {
    console.log("Unknown action");
  }
} */
/* 

// Arrow Functions

function sum1(a, b) {
  return a + b;
}

const sum2 = function (a, b) {
  return a + b;
};

const sum3 = a => a + a;

const sum4 = (a) => a + a;

const sum5 = (a) => {
  return a + a;
};

const sum6 = (a) => {
  return a + a;
};

 */

// Closure example(Замыкание)

/* function makeCounter() {
  let count = 10;

  let test = 1;

  return function addCount() {
    return ++count;
  };
}

const counter = makeCounter(); // let count, addCount(), let test
const counter2 = makeCounter(); */
