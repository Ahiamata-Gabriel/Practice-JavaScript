const checkDogs = (dogsJulia, dogsKate) => {
  const juliaCorrected = dogsJulia.slice();

  juliaCorrected.splice(0, 1);
  juliaCorrected.splice(-2);

  console.log(juliaCorrected);
  const remainingDogs = [...juliaCorrected, ...dogsKate];
  console.log(remainingDogs);

  remainingDogs.forEach((dog, i) => {
    if (dog >= 3) {
      console.log(`Dog number ${i + 1}
        is an adult, and is ${dog} years old`);
    } else console.log(`Dog number ${i + 1} is still a puppy`);
  });
};

checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
