'use strict';

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

const gabby = new Person('Mawuli', 1991);

console.log(gabby.__proto__ === Person.prototype);

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelarate = function () {
  this.speed += 10;
  console.log(this.speed);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(this.speed);
};

const car1 = new Car('BMW', 120);
const car2 = new Car('Mercedes', 95);

console.log(car1);
console.log(car2);

console.log(car1.brake());
