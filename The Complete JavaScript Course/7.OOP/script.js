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

  function accelarate() {
    this.speed = speed + 10;
    console.log(this.speed);
  }

  function brake() {
    this.speed = speed - 5;
    console.log(this.speed);
  }
};
