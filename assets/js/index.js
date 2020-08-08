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
