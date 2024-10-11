const jonas = {
  firstName: "John",
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
  greet: () => console.log(`Hey ${this.firstName}`),
};

//NB : Arrow functtions do not have thier own this method.
jonas.greet();
