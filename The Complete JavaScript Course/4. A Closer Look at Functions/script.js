"use strict";

// const bookings = [];

// const createBooking = function (flightNum, numPassengers, price) {
//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };

//   console.log(booking);
//   bookings.push(booking);
// };

// createBooking("H258", 19, 2300);

// const flight = "mn527";
// const gabby = {
//   name: "Ahiamatski GAbby",
//   passport: 259689,
// };

// const checkIn = function (flightNum, passenger) {};

// checkIn(flight, gabby);

//const greet = (greeting) => (name) => console.log(`${greeting} ${name}`);

// const lufthansa = {
//   airline: "Lufthansa",
//   iataCode: "LH",
//   booking: [],
//   book(flightNum, name) {
//     console.log(
//       `${name} booked a seat on ${this.airline} flight ${this.iataCode}`
//     );
//     this.bookings.push({ flight: `${this.iataCode} ${flightNum}`, name });
//   },
// };

// lufthansa.book(239, "Jonas Schedtmann");
// lufthansa.book(299, "John Smith");

// const eurowings = {
//   name: "Eurowings",
//   iataCode: "EW",
//   bookings: [],
// };

// //const book = lufthansa.book;
// //console.log(book);

// lufthansa.planes = 300;f
// lufthansa.buyPlane = function () {
//   console.log(this);

//   this.planes++;
// };

// console.log(lufthansa);

// (function name() {
//   console.log("log this to console");
// })();

// const secureBooking = function () {
//   let passengerCount = 0;

//   return function () {
//     passengerCount++;
//     console.log(`${passengerCount}  passengers`);
//   };
// };

// const booker = secureBooking();
let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

g();
f();
