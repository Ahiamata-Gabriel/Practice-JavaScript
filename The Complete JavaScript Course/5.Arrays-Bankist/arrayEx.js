const calcAverageHumanAge = (ages) => {
  let allAumanAge = [];
  for (const age of ages) {
    if (age <= 2) {
      const humanAge = 2 * age;
      allAumanAge.push(humanAge);
    } else {
      humanAge = 16 + age * 4;
      allAumanAge.push(humanAge);
      //console.log(allAumanAge);
    }
  }

  const above18 = allAumanAge.filter((age) => age > 18);
  const average = above18.reduce((total, age) => (total + age) / 2);

  return average;
};

console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
console.log(calcAverageHumanAge([16, 6, 10, 1, 15, 8, 3]));
