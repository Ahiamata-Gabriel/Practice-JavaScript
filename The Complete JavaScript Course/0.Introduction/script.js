"use strict";
const printForestcast = (array) => {
  if (array.length === 0) return;
  let results = "";

  for (let i = 0; i < array.length; i++) {
    let currentArray = array[i];
    results += `... ${currentArray}°C in ${i + 1} days `;
  }
  return results;
};

console.log(printForestcast([17, 21, 23]));
console.log(printForestcast([12, 5, -5, 0, 4]));
