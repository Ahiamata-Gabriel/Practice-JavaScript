'use strict';

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

const gabby = new Person('Mawuli', 1991);

console.log(gabby);
