const calcAverageHumanAge = (ages) => {
  let allAumanAge = [];
  for (const age of ages) {
    if (age <= 2) {
      const humanAge = 2 * age;
      allAumanAge.push(humanAge);
    } else {
      humanAge = 16 + age * 4;
      allAumanAge.push(humanAge);
    }
  }
  const above18 = allAumanAge.filter((age) => age >= 18);
  const totalAbove18 = above18.reduce((total, age) => total + age, 0);
  const average = totalAbove18 / above18.length;
  return average;
};

const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);

//console.log(avg1, avg2);
